import React, { FunctionComponent } from "react"
import { StyleSheet, Image, View } from "react-native"

import WeatherIcon from "../weatherIcon"
import { API } from "../../constants/api"
import { parseTemp } from "../../utils/strings"
import { Column, Text, Row } from "../../primitives"
import { calculateNextSevenDays } from "../../constants/dates"

interface WeeklyForecastProps {
    dailyWeather: any
}

interface DayBlockProps {
    day: string
    icon: string
    tempMax: string
    tempMin: any
}

const DayBlock: FunctionComponent<DayBlockProps> = ({
    day,
    icon,
    tempMax,
    tempMin,
}) => {
    return (
        <Row style={styles.weatherRow}>
            <Column style={styles.dayCol}>
                <Text style={styles.dayText}>{day}</Text>
            </Column>
            <Column style={styles.iconCol}>
                <WeatherIcon code={icon} small />
            </Column>
            <Column style={styles.tempCol}>
                <Row style={styles.tempRow}>
                    <Text
                        style={{
                            ...styles.textCenter,
                            ...styles.temp,
                            ...styles.tempMax,
                        }}
                    >
                        {tempMax}
                    </Text>
                    <Text
                        style={{
                            ...styles.textCenter,
                            ...styles.tempSmall,
                        }}
                    >
                        °c
                    </Text>
                </Row>
            </Column>
            <Column style={styles.tempCol}>
                <Row style={styles.tempRow}>
                    <Text
                        style={{
                            ...styles.textCenter,
                            ...styles.temp,
                            ...styles.tempMin,
                        }}
                    >
                        {tempMin}
                    </Text>
                    <Text
                        style={{
                            ...styles.textCenter,
                            ...styles.tempSmall,
                            ...styles.tempMin,
                        }}
                    >
                        °c
                    </Text>
                </Row>
            </Column>
        </Row>
    )
}

const WeeklyForecast: FunctionComponent<WeeklyForecastProps> = ({
    dailyWeather,
}) => {
    const renderDays = () => {
        return dailyWeather ? (
            dailyWeather
                .slice(1, 8)
                .map((day: any, i: number) => (
                    <DayBlock
                        key={day.dt}
                        day={calculateNextSevenDays()[i]}
                        icon={day.weather[0].icon}
                        tempMax={parseTemp(day.temp.max)}
                        tempMin={parseTemp(day.temp.min)}
                    />
                ))
        ) : (
            <Text>...</Text>
        )
    }
    return renderDays()
}

const styles: any = StyleSheet.create({
    weatherRow: {
        paddingTop: 12,
        paddingBottom: 12,
    },
    iconCol: {
        width: "25%",
        alignItems: "center",
        justifyContent: "center",
    },
    dayCol: {
        width: "35%",
    },
    tempCol: {
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
    },
    dayText: {
        width: "100%",
    },
    textCenter: {
        textAlign: "center",
        color: "#7388A5",
    },
    temp: {
        fontSize: 20,
    },
    tempSmall: {
        fontSize: 10,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 0,
    },
    tempMin: {
        color: "#96BBE6",
    },
    today: {
        fontSize: 16,
    },
    tempRow: {
        // marginTop: -20,
    },
})

export default WeeklyForecast
