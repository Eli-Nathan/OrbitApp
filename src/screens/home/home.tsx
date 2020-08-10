import React, {
    useEffect,
    useState,
    useRef,
    useCallback,
    FunctionComponent,
} from "react"
import {
    AppState,
    Platform,
    RefreshControl,
    ScrollView,
    Text,
    TouchableHighlight,
} from "react-native"
import { connect } from "react-redux"
import Geolocation from "@react-native-community/geolocation"
import {
    PERMISSIONS,
    RESULTS,
    checkMultiple,
    request,
    openSettings,
    check,
} from "react-native-permissions"
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from "react-navigation"
import { useFocusEffect } from "@react-navigation/native"

import Screen from ".."
import Location from "../../components/location/Location"
import * as ACTIONS from "../../reducers/location/actions"
import { API } from "../../constants/api"
import { RootState } from "../../reducers"
import { calcIsDay } from "../../utils/dates"
import { LocationState } from "../../reducers/location/types"
import apiFetch from "../../hooks/apiFetch/apiFetch"

interface HomeScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
    route: any
    dispatchSetNightTheme: any
    dispatchSetLatLon: any
    dispatchSetLocationData: any
    dispatchSetCurrentWeather: any
    dispatchSetFetching: any
    dispatchSetError: any
    weather: any
    location: LocationState
    nightTheme: boolean
}

const HomeScreen: FunctionComponent<HomeScreenProps> = ({
    navigation,
    route,
    dispatchSetNightTheme,
    dispatchSetLatLon,
    dispatchSetLocationData,
    dispatchSetCurrentWeather,
    dispatchSetFetching,
    dispatchSetError,
    weather,
    location,
    nightTheme,
}) => {
    const appState = useRef(AppState.currentState)
    const [appStateVisible, setAppStateVisible] = useState(appState.current)
    const [refreshing, setRefreshing] = useState(false)
    useEffect(() => {
        AppState.addEventListener("change", _handleAppStateChange)

        return () => {
            AppState.removeEventListener("change", _handleAppStateChange)
        }
    }, [])

    const _handleAppStateChange = (nextAppState: any) => {
        if (
            !weather &&
            appState.current.match(/inactive|background/) &&
            nextAppState === "active"
        ) {
            // getPosition()
        }

        appState.current = nextAppState
        setAppStateVisible(appState.current)
        console.log("AppState", appState.current)
    }
    const geoLocate = () =>
        Geolocation.getCurrentPosition(
            (pos) => {
                if (pos.coords.latitude && pos.coords.longitude) {
                    dispatchSetFetching()
                    const lat = pos.coords.latitude
                    const lon = pos.coords.longitude
                    dispatchSetLatLon(lat, lon)
                    apiFetch(API.WEATHER, {
                        lat,
                        lon,
                        units: "metric",
                    })
                        .then((data) => {
                            dispatchSetLocationData(data.id, data.name)
                            dispatchSetCurrentWeather(data)
                            dispatchSetNightTheme(
                                !calcIsDay(
                                    data.current.sunrise,
                                    data.current.sunset,
                                    new Date()
                                )
                            )
                        })
                        .catch((error) => dispatchSetError(error))
                }
            },
            (error) => dispatchSetError(error)
        )

    const getPosition = () => {
        checkMultiple([
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        ])
            .then((statuses) => {
                const permission =
                    Platform.OS === "ios"
                        ? statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
                        : statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]
                switch (permission) {
                    case RESULTS.UNAVAILABLE:
                        console.log(
                            "This feature is not available (on this device / in this context)"
                        )
                        break
                    case RESULTS.DENIED:
                        navigation.navigate("Search")
                        break
                    case RESULTS.GRANTED:
                        geoLocate()
                        break
                    case RESULTS.BLOCKED:
                        console.log(
                            "The permission is denied and not requestable anymore"
                        )
                        break
                }
            })
            .catch((error) => dispatchSetError(error))
    }

    useEffect(() => {
        if (!route.params.hasWeather) {
            getPosition()
        }
    }, [])

    const onRefresh = useCallback(async () => {
        setRefreshing(true)
        try {
            getPosition()
            setTimeout(() => setRefreshing(false), 1000)
        } catch (error) {
            console.error(error)
        }
        setTimeout(() => setRefreshing(false), 1000)
    }, [refreshing])

    return (
        <Screen navigation={navigation} hasSearch nightTheme={nightTheme}>
            <ScrollView
                style={{ flexGrow: 1, height: "100%" }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {weather && location ? (
                    <Location
                        weather={weather}
                        location={location}
                        nightTheme={nightTheme}
                    />
                ) : (
                    <TouchableHighlight
                        onPress={() =>
                            request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(
                                () => getPosition
                            )
                        }
                    >
                        <Text
                            style={{
                                color: "#fff",
                                textAlign: "center",
                            }}
                        >
                            Allow WeatherApp to use location services
                        </Text>
                    </TouchableHighlight>
                )}
            </ScrollView>
        </Screen>
    )
}

const mapStateToProps = (state: RootState) => {
    const location = state.location
    const { currentWeather, fetching } = location
    const { nightTheme } = state.theme
    return {
        sunRise:
            currentWeather?.sunrise ||
            new Date(new Date().setHours(5, 0, 0, 0)).toISOString(),
        sunSet:
            currentWeather?.sunset ||
            new Date(new Date().setHours(20, 0, 0, 0)).toISOString(),
        currentWeather: currentWeather,
        location: location,
        fetching: fetching,
        nightTheme: nightTheme || false,
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    dispatchSetNightTheme: (nightTheme: boolean) => {
        dispatch(ACTIONS.setNightTheme(nightTheme))
    },
    dispatchSetLatLon: (lat: number, lon: number) => {
        dispatch(ACTIONS.setLatLon(lat, lon))
    },
    dispatchSetLocationData: (woeid: number, name: string) => {
        dispatch(ACTIONS.setLocationData(woeid, name))
    },
    dispatchSetCurrentWeather: (weather: any) => {
        dispatch(ACTIONS.setCurrentWeather(weather))
    },
    dispatchSetFetching: () => dispatch(ACTIONS.setFetching()),
    dispatchSetError: (error: string) => dispatch(ACTIONS.setError(error)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
