import { LocationState, LocationStateAction } from './types';
import {
    SET_LAT_LNG,
    SET_FETCHING,
    SET_ERROR,
    setLatLng,
    setError,
    setFetching,
} from './actions';
import { initialState, locationReducer } from './location';
jest.mock('react-native-gesture-handler', () => {});

describe('location reducer', () => {
    describe('actions', () => {
        describe('setLatLng', () => {
            it('should create an action to add the location to state', () => {
                const expectedAction = {
                    type: SET_LAT_LNG,
                    payload: {
                        lat: 1,
                        lng: 2,
                    },
                };
                expect(setLatLng(1, 2)).toEqual(expectedAction);
            });
        });
        describe('setFetching', () => {
            it('should create an action to set fetching status', () => {
                const expectedAction = {
                    type: SET_FETCHING,
                    payload: {
                        fetching: true,
                    },
                };
                expect(setFetching()).toEqual(expectedAction);
            });
        });
        describe('setError', () => {
            it('should create an action to add an error', () => {
                const error = 'Error message';
                const expectedAction = {
                    type: SET_ERROR,
                    payload: {
                        error,
                        fetching: false,
                    },
                };
                expect(setError(error)).toEqual(expectedAction);
            });
        });
    });
    describe('reducer', () => {
        it('should return the initial state', () => {
            expect(locationReducer(undefined, { type: 'empty' })).toEqual(
                initialState,
            );
        });
        it('should add lat lng values', () => {
            const payload = {
                lat: 10,
                lng: 20,
            };
            expect(
                locationReducer(initialState, {
                    type: 'SET_LAT_LNG',
                    payload,
                }),
            ).toEqual({
                lat: 10,
                lng: 20,
                fetching: false,
                error: null,
            });
        });
        it('should set fetching', () => {
            const initialState = {
                lat: 10,
                lng: 20,
                fetching: false,
                error: null,
            };
            expect(
                locationReducer(initialState, {
                    type: 'SET_FETCHING',
                    payload: { fetching: true },
                }),
            ).toEqual({
                lat: 10,
                lng: 20,
                fetching: true,
                error: null,
            });
        });
        it('should set error', () => {
            const initialState = {
                lat: 10,
                lng: 20,
                error: null,
            };
            expect(
                locationReducer(initialState, {
                    type: 'SET_ERROR',
                    payload: { error: 'Error message' },
                }),
            ).toEqual({
                lat: 10,
                lng: 20,
                fetching: false,
                error: 'Error message',
            });
        });
    });
});

describe('#locationReducer', () => {});

export default locationReducer;
