import { useContext, createContext } from "react";


const ThemeContext = createContext('dark');
export const useTheme = () => useContext(ThemeContext);
export const ThemeSwitchProvider = ThemeContext.Provider;