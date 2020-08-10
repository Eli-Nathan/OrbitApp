import React, { FunctionComponent } from "react"
import { StyleSheet, ScrollView } from "react-native"

import WeatherIcon from "../weatherIcon"
import { parseTemp } from "../../utils/strings"
import { Column, Row, Text } from "../../primitives"

interface HourlyForecastProps {
    currentWeather: any
}

const hourBlock: FunctionComponent<any> = () => {}

const HourlyForecast: FunctionComponent<HourlyForecastProps> = ({
    currentWeather,
}) => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
        >
            <Column style={styles.colStyle}>
                <WeatherIcon code={`${currentWeather.weather[0].icon}`} />
                <Text style={{ ...styles.textCenter, ...styles.today }}>
                    Today
                </Text>
                <Text style={{ ...styles.textCenter, ...styles.temp }}>
                    {parseTemp(currentWeather?.main?.temp)}
                    <Text style={{ ...styles.textCenter, ...styles.tempSmall }}>
                        °c
                    </Text>
                </Text>
                <Text style={styles.textCenter}>
                    {currentWeather?.weather[0].main}
                </Text>
            </Column>
            <Column>
                <WeatherIcon code={`${currentWeather.weather[0].icon}`} />
                <Text style={{ ...styles.textCenter, ...styles.today }}>
                    Today
                </Text>
                <Text style={{ ...styles.textCenter, ...styles.temp }}>
                    {parseTemp(currentWeather?.main?.temp)}
                    <Text style={{ ...styles.textCenter, ...styles.tempSmall }}>
                        °c
                    </Text>
                </Text>
                <Text style={styles.textCenter}>
                    {currentWeather?.weather[0].main}
                </Text>
            </Column>
            <Column>
                <WeatherIcon code={`${currentWeather.weather[0].icon}`} />
                <Text style={{ ...styles.textCenter, ...styles.today }}>
                    Today
                </Text>
                <Text style={{ ...styles.textCenter, ...styles.temp }}>
                    {parseTemp(currentWeather?.main?.temp)}
                    <Text style={{ ...styles.textCenter, ...styles.tempSmall }}>
                        °c
                    </Text>
                </Text>
                <Text style={styles.textCenter}>
                    {currentWeather?.weather[0].main}
                </Text>
            </Column>
        </ScrollView>
    )
}

const styles: any = StyleSheet.create({
    colStyle: {
        backgroundColor: "red",
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

export default HourlyForecast
