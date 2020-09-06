import React, { FunctionComponent } from "react"
import { View } from "react-native"

import CurrentWeather from "./CurrentWeather"
import HourlyForecast from "./HourlyForecast"

interface WeatherProps {
    currentWeather: any
    hourlyWeather: any
}

const Weather: FunctionComponent<WeatherProps> = ({
    currentWeather,
    hourlyWeather,
}) => {
    return (
        <View style={{ flex: 8 }}>
            <CurrentWeather currentWeather={currentWeather} />
            <HourlyForecast
                hourlyWeather={hourlyWeather}
                sunrise={currentWeather?.sunrise || 0}
                sunset={currentWeather?.sunset || 0}
            />
        </View>
    )
}

export default Weather
