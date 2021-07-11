import { createSlice } from '@reduxjs/toolkit';
import { ThemeType } from '@/utils/consts';
const globalSlice = createSlice({
    name: 'global',
    initialState: {
        theme: ThemeType.MAIN,
    },
    reducers: {
        setTheme: (state, action) => {
            const { payload } = action;
            return {
                ...state,
                theme: payload,
            };
        },
    },
});

export const { setTheme } = globalSlice.actions;

export default globalSlice.reducer;
