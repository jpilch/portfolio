import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export enum Theme {
    light,
    dark
}

type ThemeState = {
    theme: Theme
}

const initialState: ThemeState = {
    theme: Theme.light
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        switchToLight: (state) => {
            state.theme = Theme.light;
        },
        switchToDark: (state) => {
            state.theme = Theme.dark;
        },
    },
});

export const { switchToDark, switchToLight } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;