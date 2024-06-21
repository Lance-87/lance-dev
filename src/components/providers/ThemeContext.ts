import { createContext } from "react";

export interface Theme {
  theme: "light" | "dark";
  setTheme: () => void;
}

const ThemeContext = createContext<Theme>({
  theme: "light",
  setTheme: () => {},
});

export default ThemeContext;
