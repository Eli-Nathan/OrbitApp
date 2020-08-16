import React, {
    useEffect,
    useState,
    useCallback,
    FunctionComponent,
} from "react"
import {
    Platform,
    RefreshControl,
    ScrollView,
    Text,
    TouchableHighlight,
} from "react-native"
import "react-native-gesture-handler"
import { connect } from "react-redux"

import { PERMISSIONS, request } from "react-native-permissions"
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from "react-navigation"

import Screen from ".."
import Location from "../../components/location/Location"
import * as ACTIONS from "../../reducers/location/actions"
import { RootState } from "../../reducers"
import { LocationState } from "../../reducers/location/types"
import BottomSheet from "../../components/bottomSheet"
import { getPosition } from "../../utils/Geolocate"

interface HomeScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
    route: any
    setNightTheme: any
    setLatLon: any
    setLocationData: any
    setCurrentWeather: any
    setFetching: any
    setError: any
    currentWeather: any
    hourlyWeather: any
    dailyWeather: any
    location: LocationState
    nightTheme: boolean
}

const HomeScreen: FunctionComponent<HomeScreenProps> = ({
    navigation,
    route,
    setNightTheme,
    setLatLon,
    setLocationData,
    setCurrentWeather,
    setFetching,
    setError,
    currentWeather,
    hourlyWeather,
    dailyWeather,
    location,
    nightTheme,
}) => {
    const [refreshing, setRefreshing] = useState(false)
    const getPositionProps = {
        setNightTheme,
        setLatLon,
        setLocationData,
        setCurrentWeather,
        setFetching,
        setError,
        navigation,
    }

    useEffect(() => {
        if (!route.params.hasWeather) {
            getPosition(getPositionProps)
        }
    }, [])

    const onRefresh = useCallback(async () => {
        setRefreshing(true)
        try {
            getPosition(getPositionProps)
            setTimeout(() => setRefreshing(false), 1000)
        } catch (error) {
            console.error(error)
        }
        setTimeout(() => setRefreshing(false), 1000)
    }, [refreshing])

    return (
        <Screen navigation={navigation} hasSearch nightTheme={nightTheme}>
            <ScrollView style={{ flexGrow: 1, height: "100%" }}>
                {currentWeather && location ? (
                    <Location
                        currentWeather={currentWeather}
                        hourlyWeather={hourlyWeather}
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
            {dailyWeather && (
                <BottomSheet
                    dailyWeather={dailyWeather}
                    snapPoints={[600, 180]}
                />
            )}
        </Screen>
    )
}

const mapStateToProps = (state: RootState) => {
    const location = state.location
    const { currentWeather, hourlyWeather, dailyWeather, fetching } = location
    return {
        sunRise:
            currentWeather?.sunrise ||
            new Date(new Date().setHours(5, 0, 0, 0)).toISOString(),
        sunSet:
            currentWeather?.sunset ||
            new Date(new Date().setHours(20, 0, 0, 0)).toISOString(),
        currentWeather: currentWeather,
        hourlyWeather: hourlyWeather,
        dailyWeather: dailyWeather,
        location: location,
        fetching: fetching,
        nightTheme: state.theme?.nightTheme || false,
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    setNightTheme: (nightTheme: boolean) => {
        dispatch(ACTIONS.setNightTheme(nightTheme))
    },
    setLatLon: (lat: number, lon: number) => {
        dispatch(ACTIONS.setLatLon(lat, lon))
    },
    setLocationData: (woeid: number, name: string) => {
        dispatch(ACTIONS.setLocationData(woeid, name))
    },
    setCurrentWeather: (weather: any) => {
        dispatch(ACTIONS.setCurrentWeather(weather))
    },
    setFetching: () => dispatch(ACTIONS.setFetching()),
    setError: (error: string) => dispatch(ACTIONS.setError(error)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
