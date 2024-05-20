import { createContext } from "react";


export interface Theme {
  theme: string;
  setTheme: () => void;
}

const ThemeContext = createContext<Theme>({
  theme: "light",
  setTheme: () => {},
});

export default ThemeContext;
