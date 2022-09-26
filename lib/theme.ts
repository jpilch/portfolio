import { CSSVariables, LSThemeKey } from "../features/app/constants";
import { Theme } from "../features/theme/themeSlice";

const {
    colorPrimary,
    colorSecondary,
    bgColorPrimary,
    bgColorSecondary,
    bgColorHighlight,
    borderColorPrimary
} = CSSVariables;

const CSSPropArr = [
    colorPrimary,
    colorSecondary,
    bgColorPrimary,
    bgColorSecondary,
    bgColorHighlight,
    borderColorPrimary
]


export function adjustTo(theme: Theme): void {
    let rootStyle = document.documentElement.style;

    for (let prop of CSSPropArr) {
        rootStyle.setProperty(
            prop.name,
            theme === Theme.light
                ? prop.light
                : prop.dark
        );
    }

    localStorage.setItem(LSThemeKey, `${theme}`);
}