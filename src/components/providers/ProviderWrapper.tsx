"use client";

import { ReactNode, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";
import MenuContext from "./MenuContext";
import { Menu } from "../misc/Menu";

export default function ProviderWrapper({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<"light" | "dark">("dark");
	const [toggled, setToggled] = useState<boolean>(false);


	useEffect(() => {
		const initialScheme = window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light";
		setTheme(initialScheme);

		window.addEventListener("resize", () => {
			if (window.innerWidth > 430) {
				setToggled(false);
			}
		});
	}, []);

	const changeTheme = () => {
		let t: "dark" | "light" = theme != "light" ? "light" : "dark";
		setTheme(t);
	};

	const toggleMenu = () => {
		setToggled(!toggled);
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
			<MenuContext.Provider value={{ toggled, setToggled: toggleMenu }}>
			<Menu toggled={toggled} setToggled={toggleMenu} />
			{children}</MenuContext.Provider>
		</ThemeContext.Provider>
	);
}
