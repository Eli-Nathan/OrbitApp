import {
    SET_FETCHING,
    SET_ERROR,
    SET_USER_LAT_LON,
    SET_USER_LOCATION_DATA,
    SET_USER_CURRENT_WEATHER,
    SET_SEARCHED_LAT_LON,
    SET_SEARCHED_LOCATION_DATA,
    SET_SEARCHED_CURRENT_WEATHER,
    SET_RECENT_SEARCHES,
} from "./actions"
import { LocationState, LocationStateAction } from "./types"

export const initialState = {
    userLocation: {
        lat: 0,
        lon: 0,
    },
    recentSearches: [],
    fetching: true,
    error: null,
}

export const locationReducer = (
    state: LocationState = initialState,
    action: LocationStateAction
) => {
    switch (action.type) {
        case SET_USER_LAT_LON:
            return {
                ...state,
                userLocation: {
                    ...state.userLocation,
                    lat: action?.payload?.lat || 0,
                    lon: action?.payload?.lon || 0,
                },
                fetching: false,
                error: null,
            }
        case SET_USER_LOCATION_DATA:
            return {
                ...state,
                userLocation: {
                    ...state.userLocation,
                    locationName: action.payload?.locationName,
                    timezone: action.payload?.timezone,
                },
                fetching: false,
                error: null,
            }
        case SET_USER_CURRENT_WEATHER:
            return {
                ...state,
                userLocation: {
                    ...state.userLocation,
                    currentWeather: action.payload?.weather?.current,
                    hourlyWeather: action.payload?.weather?.hourly,
                    dailyWeather: action.payload?.weather?.daily,
                },
                fetching: false,
                error: null,
            }
        case SET_SEARCHED_LAT_LON:
            return {
                ...state,
                searchedLocation: {
                    ...state.searchedLocation,
                    lat: action?.payload?.lat,
                    lon: action?.payload?.lon,
                },
                fetching: false,
                error: null,
            }
        case SET_SEARCHED_LOCATION_DATA:
            return {
                ...state,
                searchedLocation: {
                    ...state.searchedLocation,
                    locationName: action.payload?.locationName,
                    timezone: action.payload?.timezone,
                },
                fetching: false,
                error: null,
            }
        case SET_SEARCHED_CURRENT_WEATHER:
            return {
                ...state,
                searchedLocation: {
                    ...state.searchedLocation,
                    currentWeather: action.payload?.weather?.current,
                    hourlyWeather: action.payload?.weather?.hourly,
                    dailyWeather: action.payload?.weather?.daily,
                },
                fetching: false,
                error: null,
            }
        case SET_RECENT_SEARCHES:
            let recentSearches = state.recentSearches
            const existingIndex = recentSearches.findIndex(
                (loc: any) => loc.title === action.payload.title
            )
            if (existingIndex === -1 && state.recentSearches.length > 5) {
                recentSearches = state.recentSearches.slice(1, 5)
            } else if (existingIndex >= 0) {
                recentSearches.splice(existingIndex, 1)
            }
            return {
                ...state,
                recentSearches: [
                    ...recentSearches,
                    {
                        title: action.payload.title,
                        lat: action.payload.lat,
                        lon: action.payload.lon,
                    },
                ],
            }
        case SET_FETCHING:
            return {
                ...state,
                fetching: true,
                error: null,
            }
        case SET_ERROR:
            return {
                ...state,
                fetching: false,
                error: action?.payload?.error,
            }
        default:
            return state
    }
}

export default locationReducer
