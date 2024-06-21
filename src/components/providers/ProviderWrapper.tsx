"use client";

import { ReactNode, useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ProviderWrapper({ children }: { children: ReactNode }) {
  const scheme = window.matchMedia("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";

  const [theme, setTheme] = useState(scheme);

  const changeTheme = () => {
    let t = theme != "light" ? "light" : "dark";
    setTheme(t);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
