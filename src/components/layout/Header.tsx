"use client";

//third-party imports
import { AnimatePresence, animate, motion as mt, stagger } from "framer-motion";
import { ReactNode, useContext, useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";
import ThemeContext, { Theme } from "../providers/ThemeContext";

//fonts

//lib imports
import headerLinks from "@/lib/headerLinks";
import useInit from "@/lib/hooks/useInit";
import Image from "next/image";
import Link from "next/link";
import { MenuBurger } from "../misc/Menu";
import BaseButton from "../templates/BaseButton";

const initialPosition = {
	y: -100,
	opacity: 0,
};

export default function Header() {
	const [load, setLoad] = useState(false);
	const { theme, setTheme } = useContext(ThemeContext);
	const bgCol = theme == "light" ? "bg-neutral-100/30" : " bg-neutral-700/15";

	useInit(() => {
		setLoad(true);
	});

	useEffect(() => {
		animate(
			".animHeader",
			{ y: 0, opacity: 1 },
			{
				duration: 1,
				ease: [0.25, 1, 0.5, 1],
				type: "tween",
			}
		);
	}, [load]);

	return (
		<>
			<mt.header
				initial={initialPosition}
				className={`animHeader z-50 w-full fixed h-16 md:h-20 xl:h-22 left-0 top-0 py-0 md:py-2 px-0 md:px-10 xl:px-20 `}
			>
				<nav
					className={`${bgCol} backdrop-blur overflow-hidden px-4 md:px-8 xl:px-12 py-2 md:py-8 md:rounded-lg w-full h-full flex justify-between items-center gap-2 relative max-w-7xl mx-auto`}
				>
					<Link href="/">
						<Image alt="site logo" src={"/Icon.png"} width={49} height={40} />
					</Link>
					<div className="flex">
						<NavigationItems ctx={{ theme, setTheme }} load={load} />
						<ChangeThemeBtn ctx={{ theme, setTheme }} />
					</div>
					<MenuBurger />
				</nav>
			</mt.header>
		</>
	);
}

function NavigationItems({ ctx, load }: { ctx: Theme; load: boolean }) {
	const { theme } = ctx;

	const textCol = theme == "light" ? "text-gray-600" : "text-gray-200";
	const hoverTextCol = theme == "light" ? "after:bg-black" : "after:bg-white";
	const baseAfterProps =
		"after:h-0.5 after:w-0 after:hover:w-full after:absolute after:bottom-0 after:left-0 after:transition-all";

	useEffect(() => {
		if (load) {
			animate(
				".anim",
				{ y: 0 },
				{
					delay: stagger(0.075),
					ease: [0.34, 1.56, 0.64, 1],
					duration: 1,
				}
			);
		}
	}, [load]);

	const items = headerLinks.map((props, idx) => (
		<mt.li
			initial={{ y: 50 }}
			className={`${hoverTextCol} ${baseAfterProps} text-sm px-2 py-2 relative text-md anim`}
			key={idx}
		>
			<Link href={props.href}>{props.label}</Link>
		</mt.li>
	));

	return (
		<div className="h-max w-max hidden md:block">
			<ul
				className={` flex items-center content-center gap-1 overflow-hidden transition ${textCol} relative`}
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
		"after:h-0.5 after:w-0 after:hover:w-full after:absolute after:bottom-0 after:left-0 after:transition-all";

	const icon =
		theme == "light" ? (
			<AnimatedSunMoon ckey="sun">
				<Sun size={"1.25rem"} color={`black`} />
			</AnimatedSunMoon>
		) : (
			<AnimatedSunMoon ckey="moon">
				<Moon size={"1.25rem"} color={"white"} />
			</AnimatedSunMoon>
		);

	return (
		<mt.div
			initial={{ y: 50 }}
			className={`${hoverTextCol} ${baseAfterProps} anim max-md:hidden overflow-hidden relative w-15 h-15 rounded-xl transition-colors`}
		>
			<BaseButton props={{ onClick: setTheme }}>
				<AnimatePresence mode="wait">{icon}</AnimatePresence>{" "}
			</BaseButton>
		</mt.div>
	);
}

function AnimatedSunMoon({ children, ckey }: { children: ReactNode; ckey: string }) {
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
					ease: [0.45, 0, 0.55, 1],
				},
			}}
			exit={{
				y: -100,
				transition: {
					duration: 0.15,
					ease: [0.45, 0, 0.55, 1],
				},
			}}
			key={ckey}
		>
			{children}
		</mt.div>
	);
}
