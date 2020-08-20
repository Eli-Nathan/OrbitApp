import React, {
    useEffect,
    useState,
    useCallback,
    FunctionComponent,
} from "react"
import { ScrollView, View } from "react-native"
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
import { ClearSkyDay } from "../../assets/icons"
import { Column } from "../../primitives"

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
}) => {
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

    return (
        <Screen navigation={navigation} hasSearch nightTheme={nightTheme}>
            <View style={{ flexGrow: 1, height: "100%" }}>
                {currentWeather && location ? (
                    <Location
                        currentWeather={currentWeather}
                        hourlyWeather={hourlyWeather}
                        locationName={userLocation.locationName}
                        nightTheme={nightTheme}
                    />
                ) : (
                    <Column
                        style={{
                            flexGrow: 1,
                            alignItems: "center",
                            marginTop: -300,
                            justifyContent: "center",
                        }}
                    >
                        <ClearSkyDay width={100} height={100} />
                    </Column>
                )}
            </View>
            {dailyWeather && (
                <BottomSheet
                    dailyWeather={dailyWeather}
                    snapPoints={[600, 220]}
                />
            )}
        </Screen>
    )
}

const mapStateToProps = (state: RootState) => {
    const location = state.location
    const { fetching, userLocation } = location
    const { currentWeather, hourlyWeather, dailyWeather } = userLocation
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
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    setNightTheme: (nightTheme: boolean) => {
        dispatch(ACTIONS.setNightTheme(nightTheme))
    },
    setLatLon: (lat: number, lon: number) => {
        dispatch(ACTIONS.setLatLon(ACTIONS.SET_USER_LAT_LON, lat, lon))
    },
    setLocationData: (woeid: number, name: string) => {
        dispatch(
            ACTIONS.setLocationData(ACTIONS.SET_USER_LOCATION_DATA, woeid, name)
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
