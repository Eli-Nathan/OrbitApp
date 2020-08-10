export interface LocationState {
    lat?: number
    lon?: number
    fetching?: boolean
    error?: string | null
    woeid?: number | null
    locationName?: string | null
    nearby?: any
    currentWeather?: any
    hourlyWeather?: any
    dailyWeather?: any
}

export interface LocationStateAction {
    type: string
    payload?: LocationState
}
