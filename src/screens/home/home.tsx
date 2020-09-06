import React, { useEffect, FunctionComponent, useState, useRef } from "react"
import { View } from "react-native"
import "react-native-gesture-handler"
import { connect } from "react-redux"
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
import { OrbitIcon } from "../../assets/icons"
import { Column } from "../../primitives"
import { useAsyncStorage } from "@react-native-community/async-storage"
import { calcIsDay } from "../../utils/dates"

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
    userLocation: any
    timezone: string
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
    userLocation,
    timezone,
}) => {
    const [loading, setLoading] = useState(true)
    const [persistedWeather, setPersistedWeather] = useState<any>(false)
    const { getItem } = useAsyncStorage("@current_weather")

    const readWeatherFromStorage = async () => {
        const item = await getItem()
        setPersistedWeather(item)
        setTimeout(() => setLoading(false), 1000)
    }
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
        readWeatherFromStorage()
    }, [])

    useEffect(() => {
        readWeatherFromStorage()
        if (!loading && !persistedWeather) {
            getPosition(getPositionProps)
        } else {
            const {
                title,
                lat,
                lon,
                currentWeather,
                hourlyWeather,
                dailyWeather,
                lastUpdated,
                timezone,
            } = JSON.parse(persistedWeather)
            const timeSincePersist = Date.now() - lastUpdated
            const twoMinutes = 120000
            if (timeSincePersist > twoMinutes) {
                getPosition(getPositionProps)
            } else {
                setLatLon(lat, lon)
                setLocationData(title, timezone)
                setCurrentWeather({
                    current: currentWeather,
                    hourly: hourlyWeather,
                    daily: dailyWeather,
                })
                currentWeather &&
                    setNightTheme(
                        !calcIsDay(
                            currentWeather.sunrise,
                            currentWeather.sunset,
                            new Date()
                        )
                    )
            }
        }
    }, [loading])

    const reload = () => {
        setLoading(true)
        getPosition(getPositionProps).then(() =>
            setTimeout(() => setLoading(false), 2000)
        )
    }

    return (
        <Screen
            navigation={navigation}
            hasSearch
            reload={reload}
            nightTheme={nightTheme}
        >
            <View style={{ flexGrow: 1, height: "100%" }}>
                {!loading && currentWeather && location ? (
                    <>
                        <View style={{ flexGrow: 10 }}>
                            <Location
                                currentWeather={currentWeather}
                                hourlyWeather={hourlyWeather}
                                locationName={userLocation.locationName}
                                nightTheme={nightTheme}
                                timezone={timezone}
                            />
                        </View>

                        {dailyWeather && (
                            <View style={{ flexGrow: 4 }}>
                                <BottomSheet dailyWeather={dailyWeather} />
                            </View>
                        )}
                    </>
                ) : (
                    <Column
                        style={{
                            flexGrow: 1,
                            marginTop: -270,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <OrbitIcon
                            width={78}
                            height={78}
                            viewBox={"0 0 78 78"}
                            animated
                        />
                    </Column>
                )}
            </View>
        </Screen>
    )
}

const mapStateToProps = (state: RootState) => {
    const location = state.location
    const { fetching, userLocation } = location
    const {
        currentWeather,
        hourlyWeather,
        dailyWeather,
        timezone,
    } = userLocation
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
        userLocation,
        fetching: fetching,
        nightTheme: state.theme?.nightTheme || false,
        timezone,
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    setNightTheme: (nightTheme: boolean) => {
        dispatch(ACTIONS.setNightTheme(nightTheme))
    },
    setLatLon: (lat: number, lon: number) => {
        dispatch(ACTIONS.setLatLon(ACTIONS.SET_USER_LAT_LON, lat, lon))
    },
    setLocationData: (name: string, timezone: string) => {
        dispatch(
            ACTIONS.setLocationData(
                ACTIONS.SET_USER_LOCATION_DATA,
                name,
                timezone
            )
        )
    },
    setCurrentWeather: (weather: any) => {
        dispatch(
            ACTIONS.setCurrentWeather(ACTIONS.SET_USER_CURRENT_WEATHER, weather)
        )
    },
    setFetching: () => dispatch(ACTIONS.setFetching()),
    setError: (error: string) => dispatch(ACTIONS.setError(error)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
