export const SET_NIGHT_THEME = "SET_NIGHT_THEME"
export const SET_USER_LAT_LON = "user/SET_LAT_LON"
export const SET_SEARCHED_LAT_LON = "searched/SET_LAT_LON"
export const SET_FETCHING = "SET_FETCHING"
export const SET_ERROR = "SET_ERROR"
export const SET_USER_LOCATION_DATA = "user/SET_LOCATION_DATA"
export const SET_SEARCHED_LOCATION_DATA = "searched/SET_LOCATION_DATA"
export const SET_USER_CURRENT_WEATHER = "user/SET_CURRENT_WEATHER"
export const SET_SEARCHED_CURRENT_WEATHER = "searched/SET_CURRENT_WEATHER"
export const SET_RECENT_SEARCHES = "searched/SET_RECENT_SEARCHES"

export const setNightTheme = (nightTheme: boolean) => ({
    type: SET_NIGHT_THEME,
    payload: {
        nightTheme,
    },
})

export const setLatLon = (type: string, lat: number, lon: number) => ({
    type: type,
    payload: {
        lat,
        lon,
    },
})

export const setLocationData = (
    type: string,
    woeid: number,
    locationName: string,
    timezone: string
) => ({
    type: type,
    payload: {
        woeid,
        locationName,
        timezone,
    },
})

export const setCurrentWeather = (type: string, weather: any) => ({
    type: type,
    payload: {
        weather,
        fetching: false,
    },
})

export const setRecentSearches = (
    type: string,
    title: string,
    lat: number,
    lon: number
) => ({
    type: type,
    payload: {
        title,
        lat,
        lon,
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
