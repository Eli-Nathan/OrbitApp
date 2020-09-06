import React, { FunctionComponent } from "react"
import { StyleSheet, ScrollView, View, Dimensions } from "react-native"

import WeatherIcon from "../weatherIcon"
import { parseTemp } from "../../utils/strings"
import { Column, Row, Text } from "../../primitives"
import Theme from "../../theme"
import { calcIsDayRoughly } from "../../utils/dates"

const windowHeight = Dimensions.get("window").height

interface HourlyForecastProps {
    hourlyWeather: any
    sunrise: number
    sunset: number
}

interface HourBlockProps {
    key: number
    weather: any
    time: number
    temp: number
    sunrise: number
    sunset: number
}

const HourBlock: FunctionComponent<HourBlockProps> = ({
    weather,
    time,
    temp,
    sunrise,
    sunset,
}) => {
    const dayBlock = calcIsDayRoughly(sunrise, sunset, time)
    return (
        <Column
            style={{
                ...styles.card,
                ...styles[dayBlock ? "cardDay" : "cardNight"],
            }}
        >
            <Text
                style={{
                    ...styles.textCenter,
                    ...styles.today,
                    ...styles[dayBlock ? "dayText" : "nightText"],
                }}
            >
                {new Date(time * 1000).getHours()}:00
            </Text>
            <WeatherIcon code={`${weather.icon}`} />
            <Row>
                <Text
                    style={{
                        ...styles.textCenter,
                        ...styles.temp,
                        ...styles[dayBlock ? "dayText" : "nightText"],
                    }}
                >
                    {parseTemp(temp)}
                </Text>
                <Text
                    style={{
                        ...styles.textCenter,
                        ...styles.tempSmall,
                        ...styles[dayBlock ? "dayText" : "nightText"],
                    }}
                >
                    °c
                </Text>
            </Row>
        </Column>
    )
}

const HourlyForecast: FunctionComponent<HourlyForecastProps> = ({
    hourlyWeather,
    sunrise,
    sunset,
}) => {
    const renderHours = () => {
        return hourlyWeather
            .slice(1, 12)
            .map((hour: any) => (
                <HourBlock
                    key={hour.dt}
                    weather={hour.weather[0]}
                    time={hour.dt}
                    temp={hour.temp}
                    sunrise={sunrise}
                    sunset={sunset}
                />
            ))
    }
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            style={styles.scrollStyle}
        >
            {renderHours()}
            <View style={{ width: 30 }} />
        </ScrollView>
    )
}

const styles: any = StyleSheet.create({
    scrollStyle: {
        flexGrow: 1,
        height: 100,
        paddingLeft: 18,
        paddingRight: 18,
        marginTop: 12,
    },
    card: {
        backgroundColor: "#fff",
        shadowColor: "#7388A5",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 6.68,
        elevation: 11,
        height: (windowHeight / 100) * 18,
        margin: 6,
        padding: 12,
        width: (windowHeight / 100) * 18,
        borderRadius: 12,
        textAlign: "center",
        alignItems: "center",
    },
    cardDay: {
        backgroundColor: "#fff",
    },
    cardNight: {
        backgroundColor: Theme.Colours.DarkBlue,
    },
    textCenter: {
        textAlign: "center",
        color: "#7388A5",
    },
    temp: {
        fontSize: 20,
        fontWeight: "bold",
    },
    tempSmall: {
        fontWeight: "normal",
        fontSize: 10,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 0,
    },
    today: {
        fontSize: 16,
        fontWeight: "normal",
    },
    dayText: {
        color: "#7388A5",
    },
    nightText: {
        color: "#fff",
    },
})

export default HourlyForecast
