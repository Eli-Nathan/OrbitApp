import React, { useEffect, useState, FunctionComponent } from "react"
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
import { RootState } from "../../reducers"
import { LocationState } from "../../reducers/location/types"
import BottomSheet from "../../components/bottomSheet"
import { Column } from "../../primitives"
import { OrbitIcon } from "../../assets/icons"

interface SearchedWeatherScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
    route: any
    currentWeather: any
    hourlyWeather: any
    dailyWeather: any
    location: LocationState
    nightTheme: boolean
    searchedLocation: any
    timezone: string
    timezoneOffset: number
}

const SearchedWeatherScreen: FunctionComponent<SearchedWeatherScreenProps> = ({
    navigation,
    currentWeather,
    hourlyWeather,
    dailyWeather,
    location,
    nightTheme,
    searchedLocation,
    timezone,
    timezoneOffset,
}) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => setLoading(false))
    return (
        <Screen navigation={navigation} hasSearch nightTheme={nightTheme}>
            <View style={{ flexGrow: 1, height: "100%" }}>
                {!loading && currentWeather && location ? (
                    <>
                        <View style={{ flexGrow: 10 }}>
                            <Location
                                currentWeather={currentWeather}
                                hourlyWeather={hourlyWeather}
                                locationName={searchedLocation?.locationName}
                                nightTheme={nightTheme}
                                timezone={timezone}
                                timezoneOffset={timezoneOffset}
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
    const { fetching, searchedLocation } = location
    return {
        currentWeather: searchedLocation?.currentWeather,
        hourlyWeather: searchedLocation?.hourlyWeather,
        dailyWeather: searchedLocation?.dailyWeather,
        location: location,
        searchedLocation,
        fetching: fetching,
        nightTheme: state.theme?.nightTheme || false,
        timezone: searchedLocation?.timezone || "Europe/London",
        timezoneOffset: searchedLocation?.timezoneOffset || 0,
    }
}

export default connect(mapStateToProps)(SearchedWeatherScreen)
