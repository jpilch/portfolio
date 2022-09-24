import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { adjustTo } from "../../lib/theme";

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
        switchTheme: (state) => {
            state.theme = state.theme === Theme.light
                ? Theme.dark
                : Theme.light;
            adjustTo(state.theme);
        },
    },
});

export const { switchTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;