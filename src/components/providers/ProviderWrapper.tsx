"use client";

import { ReactNode, useContext, useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ProviderWrapper({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    let t = theme != "light" ? "light" : "dark";
    setTheme(t);
  };

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      changeTheme()
    });

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
