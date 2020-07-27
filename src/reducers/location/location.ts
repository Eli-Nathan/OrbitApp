import { LocationState, LocationStateAction } from './types';

const initialState = {
    lat: 0,
    lng: 0,
    fetching: true,
    error: null,
};

const locationReducer = (
    state: LocationState = initialState,
    action: LocationStateAction,
) => {
    switch (action.type) {
        case 'ADD_LOCATION':
            return {
                ...state,
                lat: action.lat,
                lng: action.lng,
                fetching: action.fetching,
                error: null,
            };
        case 'SET_FETCHING':
            return {
                ...state,
                fetching: action.fetching,
                error: null,
            };
        case 'SET_ERROR':
            return {
                ...state,
                fetching: action.fetching,
                error: action.error,
            };
        default:
            return state;
    }
};

export default locationReducer;
