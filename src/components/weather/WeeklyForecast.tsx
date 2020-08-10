import React, { FunctionComponent } from "react"
import { StyleSheet, Image } from "react-native"

import WeatherIcon from "../weatherIcon"
import { API } from "../../constants/api"
import { parseTemp } from "../../utils/strings"
import { Column, Text } from "../../primitives"

interface WeeklyForecastProps {
    dailyWeather: any
}

const renderIcon = (code: string) => (
    <Image
        source={{ uri: `${API.ICON}${code}@4x.png` }}
        style={{ width: 225, height: 225 }}
    />
)

const WeeklyForecast: FunctionComponent<WeeklyForecastProps> = ({
    dailyWeather,
}) => {
    return (
        <Column style={styles.colStyle}>
            <Text style={styles.textCenter}>Daily weather ken</Text>
        </Column>
    )
}

const styles: any = StyleSheet.create({
    colStyle: {
        margin: 12,
        flex: 1,
        display: "flex",
        borderRadius: 8,
        textAlign: "center",
        alignItems: "center",
    },
    textCenter: {
        textAlign: "center",
        color: "#fff",
    },
    temp: {
        fontSize: 68,
        fontWeight: "bold",
    },
    tempSmall: {
        fontWeight: "normal",
        fontSize: 40,
    },
    today: {
        fontSize: 28,
        fontWeight: "bold",
    },
})

export default WeeklyForecast
