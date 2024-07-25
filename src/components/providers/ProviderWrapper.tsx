"use client";

import { ReactNode, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ProviderWrapper({ children }: { children: ReactNode }) {

	const [theme, setTheme] = useState<"light" | "dark">("dark");

	useEffect(()=>{
		const initialScheme = window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light";
		setTheme(initialScheme)
	},[])

	const changeTheme = () => {
		let t: "dark" | "light" = theme != "light" ? "light" : "dark";
		setTheme(t);
	};

	return <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>{children}</ThemeContext.Provider>;
}
