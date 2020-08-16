export interface LocationState {
    fetching?: boolean
    error?: string | null
    userLocation: LocationData
    searchedLocation?: LocationData
}

export interface LocationData {
    lat?: number
    lon?: number
    woeid?: number | null
    locationName?: string | null
    nearby?: any
    currentWeather?: any
    hourlyWeather?: any
    dailyWeather?: any
}

export interface LocationStateAction {
    type: string
    payload?: any
}
