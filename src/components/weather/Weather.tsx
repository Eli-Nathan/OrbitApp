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
                sunrise={currentWeather.sunrise}
                sunset={currentWeather.sunset}
            />
        </>
    )
}

export default Weather
