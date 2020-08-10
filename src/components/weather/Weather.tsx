import React, { FunctionComponent } from "react"

import CurrentWeather from "./CurrentWeather"
import HourlyForecast from "./HourlyForecast"
import WeeklyForecast from "./WeeklyForecast"

interface WeatherProps {
    currentWeather: any
    hourlyWeather: any
    dailyWeather: any
}

const Weather: FunctionComponent<WeatherProps> = ({
    currentWeather,
    hourlyWeather,
    dailyWeather,
}) => {
    return (
        <>
            <CurrentWeather currentWeather={currentWeather} />
            <HourlyForecast hourlyWeather={hourlyWeather} />
            <WeeklyForecast dailyWeather={dailyWeather} />
        </>
    )
}

export default Weather
