import React from "react"
import { StyleSheet, ScrollView, ViewStyle } from "react-native"

import Locale from "../locale/Locale"
import Weather from "../weather"

interface LocationProps {
    currentWeather: any
    hourlyWeather: any
    dailyWeather: any
    location: any
    nightTheme: boolean
}

const Location = (props: LocationProps) => {
    return (
        <>
            {!props.currentWeather ? null : (
                <ScrollView style={styles.locationDisplay}>
                    <Locale
                        nightTheme={props.nightTheme}
                        userLocation={props.location}
                    />
                    <Weather
                        currentWeather={props.currentWeather}
                        hourlyWeather={props.hourlyWeather}
                        dailyWeather={props.dailyWeather}
                    />
                </ScrollView>
            )}
        </>
    )
}

interface Styles {
    locationDisplay: ViewStyle
}

const styles: any = StyleSheet.create<Styles>({
    locationDisplay: {
        display: "flex",
        color: "#fff",
        width: "100%",
    },
})

export default Location
