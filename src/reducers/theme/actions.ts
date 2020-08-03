export const SET_NIGHT_THEME = 'SET_NIGHT_THEME';

export const setNightTheme = (nightTheme: boolean) => ({
    type: SET_NIGHT_THEME,
    payload: {
        nightTheme,
    },
});
