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
import Link from "next/link";
import Image from "next/image";

const initialPosition = {
	y: -100
}

const animatePosition = {
	y: 0,
	transition:{
		duration: 0.3,
		ease: [.48,.62,.67,.99]
	}
}

export default function Header() {
	const { theme, setTheme } = useContext(ThemeContext);
	const bgCol = theme == "light" ? "bg-neutral-100/30" : " bg-gray-600/5";

	return (
		<mt.header initial={initialPosition} animate={animatePosition} className={`z-20 w-full fixed h-20 max-md:h-18 left-0 top-0 py-2 md:px-12 xl:px-20  transition`}>
			<nav
				className={`${bgCol} backdrop-blur px-10 rounded-full w-full h-full flex justify-end items-center gap-2 relative max-w-7xl mx-auto`}
			>
				<Link href="/" className="flex-1">
					<Image alt="site logo" src={"/Icon.png"} width={49} height={40} />
				</Link>
				<NavigationItems ctx={{ theme, setTheme }} />
				<ChangeThemeBtn ctx={{ theme, setTheme }} />
			</nav>
		</mt.header>
	);
}

function NavigationItems({ ctx }: { ctx: Theme }) {
	const { theme } = ctx;

	const textCol = theme == "light" ? "text-gray-600" : "text-gray-200";
	const hoverTextCol = theme == "light" ? "after:bg-black" : "after:bg-white";
	const baseAfterProps =
		"after:h-0.5 after:w-0 after:hover:w-full after:absolute after:bottom-0 after:left-0 after:transition-all ";

	const items = headerLinks.map((props, idx) => (
		<li className="px-2 py-2 relative text-md" key={idx}>
			<Link href={props.href}>
				<p className={`${hoverTextCol} ${baseAfterProps}`}>{props.label}</p>
			</Link>
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
		<div
			className={`${hoverTextCol} ${baseAfterProps} max-md:hidden relative w-15 h-15 rounded-xl transition-colors`}
		>
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
					delay: 0.15,
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
