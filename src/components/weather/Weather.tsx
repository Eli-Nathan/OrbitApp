import React, { FunctionComponent } from "react"

import CurrentWeather from "./CurrentWeather"
import HourlyForecast from "./HourlyForecast"
import WeeklyForecast from "./WeeklyForecast"

interface WeatherProps {
    currentWeather: any
}

const Weather: FunctionComponent<WeatherProps> = ({ currentWeather }) => {
    return (
        <>
            <CurrentWeather currentWeather={currentWeather} />
            <HourlyForecast currentWeather={currentWeather} />
            <WeeklyForecast currentWeather={currentWeather} />
        </>
    )
}

export default Weather
