import React, { FunctionComponent } from "react"
import { StyleSheet, ScrollView, View } from "react-native"

import WeatherIcon from "../weatherIcon"
import { parseTemp } from "../../utils/strings"
import { Column, Row, Text } from "../../primitives"

interface HourlyForecastProps {
    hourlyWeather: any
}

interface HourBlockProps {
    key: number
    weather: any
    time: number
    temp: number
}

const HourBlock: FunctionComponent<HourBlockProps> = ({
    weather,
    time,
    temp,
}) => (
    <Column style={styles.colStyle}>
        <Text style={{ ...styles.textCenter, ...styles.today }}>
            {new Date(time * 1000).getHours()}:00
        </Text>
        <WeatherIcon code={`${weather.icon}`} />
        <Row>
            <Text style={{ ...styles.textCenter, ...styles.temp }}>
                {parseTemp(temp)}
            </Text>
            <Text style={{ ...styles.textCenter, ...styles.tempSmall }}>
                °c
            </Text>
        </Row>
    </Column>
)

const HourlyForecast: FunctionComponent<HourlyForecastProps> = ({
    hourlyWeather,
}) => {
    const renderHours = () => {
        return hourlyWeather
            .splice(1, 12)
            .map((hour: any) => (
                <HourBlock
                    key={hour.dt}
                    weather={hour.weather[0]}
                    time={hour.dt}
                    temp={hour.temp}
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
        paddingLeft: 18,
        paddingRight: 18,
    },
    colStyle: {
        backgroundColor: "#fff",
        shadowColor: "#7388A5",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 6.68,
        elevation: 11,
        margin: 6,
        padding: 12,
        width: 140,
        flex: 1,
        display: "flex",
        borderRadius: 12,
        textAlign: "center",
        alignItems: "center",
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
})

export default HourlyForecast
