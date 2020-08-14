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
            <Column style={styles.colStyle}>
                <WeatherIcon code={icon} />
            </Column>
            <Column style={styles.tempCol}>
                <Row style={styles.tempRow}>
                    <Row>
                        <Text style={{ ...styles.textCenter, ...styles.temp }}>
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
                </Row>
            </Column>
            <Column style={styles.tempCol}>
                <Row style={styles.tempRow}>
                    <Row>
                        <Text style={{ ...styles.textCenter, ...styles.temp }}>
                            {tempMin}
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
    iconCol: {
        width: "20%",
    },
    dayCol: {
        width: "40%",
    },
    tempCol: {
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
    tempRow: {
        marginTop: 12,
        justifyContent: "flex-end",
    },
})

export default WeeklyForecast
