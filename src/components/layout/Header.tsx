"use client";

//third-party imports
import { ReactNode, useContext } from "react";
import ThemeContext, { Theme } from "../providers/ThemeContext";
import { Sun, Moon } from "react-feather";
import { AnimatePresence, motion as mt } from "framer-motion";

//fonts

//lib imports
import headerLinks from "@/lib/headerLinks";
import BaseButton from "../templates/BaseButton";
import { navigation } from "@/lib/fonts";

export default function Header() {
	const { theme, setTheme } = useContext(ThemeContext);
	const bgCol = theme == "light" ? "bg-neutral-100/10" : "bg-gray-800/20";

	return (
		<header
			className={` ${bgCol} backdrop-blur-md z-20 w-full fixed h-20 max-md:h-18 left-0 top-0 py-2 md:px-12 xl:px-20  transition`}
		>
			<nav className="w-full h-full flex justify-end items-center gap-2 relative">
				<NavigationItems ctx={{ theme, setTheme }} />
				<ChangeThemeBtn ctx={{ theme, setTheme }} />
			</nav>
		</header>
	);
}

function NavigationItems({ ctx }: { ctx: Theme }) {
	const { theme } = ctx;

	const textCol = theme == "light" ? "text-gray-600" : "text-gray-200";
	const hoverTextCol = theme == "light" ? "after:hover:bg-black" : "after:hover:bg-white";
	const baseAfterProps =
		"after:w-full after:h-0 after:hover:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all ";

	const items = headerLinks.map((props, idx) => (
		<li className="px-2 py-2 relative text-md" key={idx}>
			<a href={props.href} className={`${hoverTextCol} ${baseAfterProps}`}>
				{props.label}
			</a>
		</li>
	));

	return (
		<div className="h-max w-max max-md:hidden ">
			<ul
				className={` flex items-center content-center gap-1 ${navigation.className} transition ${textCol} relative`}
			>
				{items}
			</ul>
		</div>
	);
}

function ChangeThemeBtn({ ctx }: { ctx: Theme }) {
	const { theme, setTheme } = ctx;

	const hoverTextCol = theme == "light" ? "after:hover:bg-black" : "after:hover:bg-white";
	const baseAfterProps =
		"after:w-full after:h-0 after:hover:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all";

	const icon =
		theme == "light" ? (
			<AnimatedSunMoon key="sun">
				<Sun size={"1.25rem"} color={`black`} />
			</AnimatedSunMoon>
		) : (
			<AnimatedSunMoon key="moon">
				<Moon size={"1.25rem"} color={"white"} />
			</AnimatedSunMoon>
		);

	return (
		<div className={`${hoverTextCol} ${baseAfterProps} max-md:hidden relative w-15 h-15 rounded-xl transition-colors`}>
			<BaseButton props={{ onClick: setTheme }}>
				<AnimatePresence mode="wait">{icon}</AnimatePresence>{" "}
			</BaseButton>
		</div>
	);
}

function AnimatedSunMoon({ children, key }: { children: ReactNode; key: string }) {
	return (
		<mt.div
			initial={{
				y: 100,
			}}
			animate={{
				y: 0,
				display: "block",
				transition: {
					duration: 0.15,
					delay: 0.148,
					ease: [0.4, 0, 0.2, 1],
				},
			}}
			exit={{
				y: -100,
				transition: {
					duration: 0.15,
					ease: [0.4, 0, 0.2, 1],
				},
			}}
			key={key}
		>
			{children}
		</mt.div>
	);
}
