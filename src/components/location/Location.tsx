import React from "react"
import { StyleSheet, View, ViewStyle, Text } from "react-native"

import Locale from "../locale/Locale"
import Weather from "../weather"
// import BottomDrawer from "../bottomDrawer"

interface LocationProps {
    currentWeather: any
    hourlyWeather: any
    location: any
    nightTheme: boolean
}

const Location = (props: LocationProps) => {
    return (
        <>
            {!props.currentWeather ? null : (
                <View style={styles.locationDisplay}>
                    <Locale
                        nightTheme={props.nightTheme}
                        userLocation={props.location}
                    />
                    <Weather
                        currentWeather={props.currentWeather}
                        hourlyWeather={props.hourlyWeather}
                    />
                </View>
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
