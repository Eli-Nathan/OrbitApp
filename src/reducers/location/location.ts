import { ADD_LOCATION, SET_FETCHING, SET_ERROR } from './actions';
import { LocationState, LocationStateAction } from './types';

export const initialState = {
    lat: 0,
    lng: 0,
    fetching: true,
    error: null,
};

export const locationReducer = (
    state: LocationState = initialState,
    action: LocationStateAction,
) => {
    switch (action.type) {
        case ADD_LOCATION:
            return {
                ...state,
                lat: action?.payload?.lat,
                lng: action?.payload?.lng,
                fetching: false,
                error: null,
            };
        case SET_FETCHING:
            return {
                ...state,
                fetching: true,
                error: null,
            };
        case SET_ERROR:
            return {
                ...state,
                fetching: false,
                error: action?.payload?.error,
            };
        default:
            return state;
    }
};

export default locationReducer;
