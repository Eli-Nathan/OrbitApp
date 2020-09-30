export interface LocationState {
    fetching?: boolean
    error?: string | null
    userLocation: LocationData
    searchedLocation?: LocationData
    recentSearches: any
}

export interface LocationData {
    lat?: number
    lon?: number
    locationName?: string | null
    timezone?: string
    timezoneOffset: number
    currentWeather?: any
    hourlyWeather?: any
    dailyWeather?: any
}

export interface LocationStateAction {
    type: string
    payload?: any
}
