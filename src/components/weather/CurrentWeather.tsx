import React, { FunctionComponent } from "react"
import { StyleSheet, View, Dimensions } from "react-native"

import WeatherIcon from "../weatherIcon"
import { parseTemp } from "../../utils/strings"
import { Column, Text, Row } from "../../primitives"

interface WeatherProps {
    currentWeather: any
}

const windowHeight = Dimensions.get("window").height
const iconPercentSize = windowHeight > 800 ? 18 : 12

const CurrentWeather: FunctionComponent<WeatherProps> = ({
    currentWeather,
}) => {
    return (
        <Column style={styles.colStyle}>
            <View style={styles.iconContainer}>
                <WeatherIcon
                    size={(windowHeight / 100) * 18}
                    code={`${currentWeather.weather[0].icon}`}
                    isCurrent
                />
            </View>
            <View style={{ justifyContent: "space-around" }}>
                <Text bold style={{ ...styles.textCenter, ...styles.today }}>
                    Today
                </Text>
                <Row>
                    <Text bold style={{ ...styles.textCenter, ...styles.temp }}>
                        {parseTemp(currentWeather?.temp)}
                    </Text>
                    <Text style={{ ...styles.textCenter, ...styles.tempSmall }}>
                        °c
                    </Text>
                </Row>
                <Text style={{ ...styles.textCenter, ...styles.weatherString }}>
                    {currentWeather?.weather[0].main}
                </Text>
            </View>
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
        lineHeight: 78,
        fontSize: 68,
    },
    tempSmall: {
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
        marginTop: 12,
        lineHeight: 50,
        fontSize: 28,
    },
})

export default CurrentWeather
