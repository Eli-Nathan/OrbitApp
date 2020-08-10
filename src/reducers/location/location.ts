import {
    SET_LAT_LON,
    SET_FETCHING,
    SET_ERROR,
    SET_LOCATION_DATA,
    SET_CURRENT_WEATHER,
    SET_NIGHT_THEME,
} from "./actions"
import { LocationState, LocationStateAction } from "./types"

export const initialState = {
    lat: 0,
    lon: 0,
    fetching: true,
    error: null,
}

export const locationReducer = (
    state: LocationState = initialState,
    action: LocationStateAction
) => {
    switch (action.type) {
        case SET_LAT_LON:
            return {
                ...state,
                lat: action?.payload?.lat || 0,
                lon: action?.payload?.lon || 0,
                fetching: false,
                error: null,
            }
        case SET_LOCATION_DATA:
            return {
                ...state,
                woeid: action.payload?.woeid,
                locationName: action.payload?.locationName,
                nearby: action.payload?.nearby,
                fetching: false,
                error: null,
            }
        case SET_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.payload?.weather?.current,
                hourlyWeather: action.payload?.weather?.hourly,
                dailyWeather: action.payload?.weather?.daily,
                fetching: false,
                error: null,
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
