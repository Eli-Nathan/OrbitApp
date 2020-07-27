export const SET_LAT_LNG = 'SET_LAT_LNG';
export const SET_FETCHING = 'SET_FETCHING';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOCATION_DATA = 'SET_LOCATION_DATA';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';

export const setLatLng = (lat: number, lng: number) => ({
    type: SET_LAT_LNG,
    payload: {
        lat,
        lng,
    },
});

export const setLocationData = (
    woeid: number,
    locationName: string,
    nearby: any,
) => ({
    type: SET_LOCATION_DATA,
    payload: {
        woeid,
        locationName,
        nearby,
    },
});

export const setCurrentWeather = (weather: any) => ({
    type: SET_CURRENT_WEATHER,
    payload: {
        weather,
        fetching: false,
    },
});

export const setFetching = () => ({
    type: SET_FETCHING,
    payload: {
        fetching: true,
    },
});

export const setError = (error: string) => ({
    type: SET_ERROR,
    payload: {
        fetching: false,
        error,
    },
});
