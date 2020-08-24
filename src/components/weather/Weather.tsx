import React, { FunctionComponent } from "react"

import CurrentWeather from "./CurrentWeather"
import HourlyForecast from "./HourlyForecast"
import WeeklyForecast from "./WeeklyForecast"

interface WeatherProps {
    currentWeather: any
    hourlyWeather: any
}

const Weather: FunctionComponent<WeatherProps> = ({
    currentWeather,
    hourlyWeather,
}) => {
    return (
        <>
            <CurrentWeather currentWeather={currentWeather} />
            <HourlyForecast
                hourlyWeather={hourlyWeather}
                sunrise={currentWeather?.sunrise || 0}
                sunset={currentWeather?.sunset || 0}
            />
        </>
    )
}

export default Weather
