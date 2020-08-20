import React, { FunctionComponent } from "react"
import { StyleSheet, View } from "react-native"

import WeatherIcon from "../weatherIcon"
import { parseTemp } from "../../utils/strings"
import { Column, Text, Row } from "../../primitives"

interface WeatherProps {
    currentWeather: any
}

const CurrentWeather: FunctionComponent<WeatherProps> = ({
    currentWeather,
}) => {
    return (
        <Column style={styles.colStyle}>
            <WeatherIcon large code={`${currentWeather.weather[0].icon}`} />
            <Text style={{ ...styles.textCenter, ...styles.today }}>Today</Text>
            <Row>
                <Text style={{ ...styles.textCenter, ...styles.temp }}>
                    {parseTemp(currentWeather?.temp)}
                </Text>
                <Text style={{ ...styles.textCenter, ...styles.tempSmall }}>
                    °c
                </Text>
            </Row>
            <Text style={{ ...styles.textCenter, ...styles.weatherString }}>
                {currentWeather?.weather[0].main}
            </Text>
        </Column>
    )
}

const styles: any = StyleSheet.create({
    colStyle: {
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
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 6,
    },
    weatherString: {
        fontSize: 22,
        marginBottom: 12,
    },
    today: {
        fontSize: 28,
        fontWeight: "bold",
    },
})

export default CurrentWeather
