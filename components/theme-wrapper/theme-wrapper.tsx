import React from 'react'

import { LSThemeKey } from '../../features/app/constants';

import { useDispatch } from 'react-redux';
import { switchTo } from '../../features/theme/themeSlice';

export default function ThemeWrapper({ children }: { children: JSX.Element }) {
    const dispatch = useDispatch();

    React.useEffect(() => {
        let saved = localStorage.getItem(LSThemeKey);
        let parsed = parseInt(`${saved}`);
        if (parsed) {
            dispatch(switchTo(parsed));
        }
    }, []);

    return (
        <>{children}</>
    )
}