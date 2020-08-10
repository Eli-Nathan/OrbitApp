import { SET_NIGHT_THEME } from "./actions"
import { ThemeState, ThemeStateAction } from "./types"

export const initialState = {
    nightTheme: false,
}

export const themeReducer = (
    state: ThemeState = initialState,
    action: ThemeStateAction
) => {
    switch (action.type) {
        case SET_NIGHT_THEME:
            return {
                ...state,
                nightTheme: Boolean(action?.payload?.nightTheme),
            }
        default:
            return state
    }
}

export default themeReducer
