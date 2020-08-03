export interface ThemeState {
    nightTheme: boolean;
}

export interface ThemeStateAction {
    type: string;
    payload?: ThemeState;
}
