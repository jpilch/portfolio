import { CSSVariables } from "../features/app/constants";
import { Theme } from "../features/theme/themeSlice";

const {
    colorPrimary,
    colorSecondary,
    bgColorPrimary,
    bgColorSecondary,
    bgColorHighlight,
    borderColorPrimary
} = CSSVariables;


export function adjustTo(theme: Theme) {
    let rootStyle = document.documentElement.style;

    switch (theme) {
        case Theme.light:
            rootStyle.setProperty(colorPrimary.name, colorPrimary.light);
            rootStyle.setProperty(colorSecondary.name, colorSecondary.light);
            rootStyle.setProperty(bgColorPrimary.name, bgColorPrimary.light);
            rootStyle.setProperty(bgColorSecondary.name, bgColorSecondary.light);
            rootStyle.setProperty(bgColorHighlight.name, bgColorHighlight.light);
            rootStyle.setProperty(borderColorPrimary.name, borderColorPrimary.light);
            break;

        case Theme.dark:
            rootStyle.setProperty(colorPrimary.name, colorPrimary.dark);
            rootStyle.setProperty(colorSecondary.name, colorSecondary.dark);
            rootStyle.setProperty(bgColorPrimary.name, bgColorPrimary.dark);
            rootStyle.setProperty(bgColorSecondary.name, bgColorSecondary.dark);
            rootStyle.setProperty(bgColorHighlight.name, bgColorHighlight.dark);
            rootStyle.setProperty(borderColorPrimary.name, borderColorPrimary.dark);
            break;

        default:
            throw new Error("Theme error");
    }
}