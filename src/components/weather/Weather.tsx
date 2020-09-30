import React, { FunctionComponent } from "react"
import { View } from "react-native"

import CurrentWeather from "./CurrentWeather"
import HourlyForecast from "./HourlyForecast"

interface WeatherProps {
    currentWeather: any
    hourlyWeather: any
    timezoneOffset: number
}

const Weather: FunctionComponent<WeatherProps> = ({
    currentWeather,
    hourlyWeather,
    timezoneOffset,
}) => {
    return (
        <View style={{ flex: 8 }}>
            <CurrentWeather currentWeather={currentWeather} />
            <HourlyForecast
                hourlyWeather={hourlyWeather}
                sunrise={currentWeather?.sunrise || 0}
                sunset={currentWeather?.sunset || 0}
                timezoneOffset={timezoneOffset}
            />
        </View>
    )
}

export default Weather
