import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/store/reducers/global';
import Theme from '@/styles';
import { ThemeType } from '@/utils/consts';

const { ThemeMain, ThemeSub } = Theme;

const getCurrentTheme = (themeValue) => {
    switch (themeValue) {
        case ThemeType.MAIN:
            return ThemeMain;
        case ThemeType.SUB:
            return ThemeSub;
        default:
            return ThemeMain;
    }
};

export default function useTheme() {
    const dispatch = useDispatch();
    const themeValue = useSelector(({ global: { theme } }) => theme);
    const [currentTheme, setCurrentTheme] = useState(
        getCurrentTheme(themeValue)
    );

    // themeValue被設定後, 需選擇對應的Theme
    useEffect(() => {
        setCurrentTheme(getCurrentTheme(themeValue));
    }, [themeValue, setCurrentTheme]);

    // 掛載該Hook可透過此函式設定themeValue, type需為ThemeType的value
    const changeThemeValue = useCallback(
        (type) => {
            dispatch(setTheme(type));
        },
        [dispatch]
    );

    return [themeValue, changeThemeValue, currentTheme];
}
