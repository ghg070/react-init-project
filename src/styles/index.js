import ThemeMain from './theme-main';
import ThemeSub from './theme-sub';

const Theme = { ThemeMain, ThemeSub };

export const getMain = (prop) => prop.theme.main;
export default Theme;
