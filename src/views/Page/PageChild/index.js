import { useCallback } from 'react';
import useTheme from '@/hooks/useTheme';
import { ThemeType } from '@/utils/consts';

export default function PageChild() {
    const [theme, setTheme] = useTheme();

    const onThemeChanged = useCallback(
        (type) => {
            setTheme(type);
        },
        [setTheme]
    );
    return (
        <>
            <div>PageChild</div>
            <div>CurrentTheme: {theme}</div>
            {Object.keys(ThemeType).map((key) => (
                <button
                    onClick={() => onThemeChanged(ThemeType[key])}
                    key={key}
                >
                    {key}
                </button>
            ))}
        </>
    );
}
