export const SET_NIGHT_THEME = "SET_NIGHT_THEME"
export const SET_LAT_LON = "SET_LAT_LON"
export const SET_FETCHING = "SET_FETCHING"
export const SET_ERROR = "SET_ERROR"
export const SET_LOCATION_DATA = "SET_LOCATION_DATA"
export const SET_CURRENT_WEATHER = "SET_CURRENT_WEATHER"

export const setNightTheme = (nightTheme: boolean) => ({
    type: SET_NIGHT_THEME,
    payload: {
        nightTheme,
    },
})

export const setLatLon = (lat: number, lon: number) => ({
    type: SET_LAT_LON,
    payload: {
        lat,
        lon,
    },
})

export const setLocationData = (woeid: number, locationName: string) => ({
    type: SET_LOCATION_DATA,
    payload: {
        woeid,
        locationName,
    },
})

export const setCurrentWeather = (weather: any) => ({
    type: SET_CURRENT_WEATHER,
    payload: {
        weather,
        fetching: false,
    },
})

export const setFetching = () => ({
    type: SET_FETCHING,
    payload: {
        fetching: true,
    },
})

export const setError = (error: string) => ({
    type: SET_ERROR,
    payload: {
        fetching: false,
        error,
    },
})
