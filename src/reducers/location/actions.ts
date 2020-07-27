export const ADD_LOCATION = 'ADD_LOCATION';
export const SET_FETCHING = 'SET_FETCHING';
export const SET_ERROR = 'SET_ERROR';

export const addLocation = (lat: number, lng: number) => ({
    type: ADD_LOCATION,
    payload: {
        lat,
        lng,
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
