import React, {
    useEffect,
    useState,
    useCallback,
    FunctionComponent,
} from "react"
import { ScrollView, Text, TouchableHighlight, View } from "react-native"
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

interface SearchedWeatherScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
    route: any
    currentWeather: any
    hourlyWeather: any
    dailyWeather: any
    location: LocationState
    nightTheme: boolean
    searchedLocation: any
}

const SearchedWeatherScreen: FunctionComponent<SearchedWeatherScreenProps> = ({
    navigation,
    currentWeather,
    hourlyWeather,
    dailyWeather,
    location,
    nightTheme,
    searchedLocation,
}) => {
    return (
        <Screen navigation={navigation} hasSearch nightTheme={nightTheme}>
            <View style={{ flexGrow: 1, height: "100%" }}>
                {currentWeather && location ? (
                    <Location
                        currentWeather={currentWeather}
                        hourlyWeather={hourlyWeather}
                        locationName={searchedLocation?.locationName}
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
                            Allow Orbit to use location services
                        </Text>
                    </TouchableHighlight>
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
    const { fetching, searchedLocation } = location
    return {
        sunRise:
            searchedLocation?.currentWeather?.sunrise ||
            new Date(new Date().setHours(5, 0, 0, 0)).toISOString(),
        sunSet:
            searchedLocation?.currentWeather?.sunset ||
            new Date(new Date().setHours(20, 0, 0, 0)).toISOString(),
        currentWeather: searchedLocation?.currentWeather,
        hourlyWeather: searchedLocation?.hourlyWeather,
        dailyWeather: searchedLocation?.dailyWeather,
        location: location,
        searchedLocation,
        fetching: fetching,
        nightTheme: state.theme?.nightTheme || false,
    }
}

export default connect(mapStateToProps)(SearchedWeatherScreen)
