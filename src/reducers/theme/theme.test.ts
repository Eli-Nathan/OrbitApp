import { SET_NIGHT_THEME, setNightTheme } from './actions';
import { initialState, themeReducer } from './theme';
jest.mock('react-native-gesture-handler', () => {});

describe('location reducer', () => {
    describe('actions', () => {
        describe('setLatLng', () => {
            it('should create an action to add the location to state', () => {
                const expectedAction = {
                    type: SET_NIGHT_THEME,
                    payload: {
                        lng: 2,
                    },
                };
                expect(setNightTheme(true)).toEqual(expectedAction);
            });
        });
    });
    describe('reducer', () => {
        it('should return the initial state', () => {
            expect(themeReducer(undefined, { type: 'empty' })).toEqual(
                initialState,
            );
        });
        it('should set nightTheme values', () => {
            const payload = {
                nightTheme: true,
            };
            expect(
                themeReducer(initialState, {
                    type: 'SET_NIGHT_THEME',
                    payload,
                }),
            ).toEqual({
                nightTheme: true,
            });
        });
    });
});

export default locationReducer;
