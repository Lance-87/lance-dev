"use client";

//third-party imports
import { ReactNode, useContext, useEffect, useState } from "react";
import ThemeContext, { Theme } from "../providers/ThemeContext";
import { Sun, Moon } from "react-feather";
import { AnimatePresence, animate, motion as mt, stagger } from "framer-motion";

//fonts

//lib imports
import headerLinks from "@/lib/headerLinks";
import BaseButton from "../templates/BaseButton";
import { navigation } from "@/lib/fonts";
import Link from "next/link";
import Image from "next/image";
import ms from "@/lib/helpers/ms";

const initialPosition = {
	y: -100,
	opacity: 0,
};

export default function Header() {
	const [open, setOpen] = useState(false);
	const [load, setLoad] = useState(false);
	const { theme, setTheme } = useContext(ThemeContext);
	const bgCol = theme == "light" ? "bg-neutral-100/30" : " bg-gray-600/5";

	useEffect(() => {
		setOpen(true);
		setLoad(true);
	}, []);

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
				className={`animHeader z-20 w-full fixed h-20 max-md:h-18 left-0 top-0 py-2 md:px-12 xl:px-20 `}
			>
				<nav
					className={`${bgCol} backdrop-blur overflow-hidden px-10 rounded-lg w-full h-full flex justify-end items-center gap-2 relative max-w-7xl mx-auto`}
				>
					<Link href="/" className="flex-1">
						<Image alt="site logo" src={"/Icon.png"} width={49} height={40} />
					</Link>
					<NavigationItems ctx={{ theme, setTheme }} open={open} />
					<ChangeThemeBtn ctx={{ theme, setTheme }} />
				</nav>
			</mt.header>
		</>
	);
}

function NavigationItems({ ctx, open }: { ctx: Theme; open: boolean }) {
	const { theme } = ctx;

	const textCol = theme == "light" ? "text-gray-600" : "text-gray-200";
	const hoverTextCol = theme == "light" ? "after:bg-black" : "after:bg-white";
	const baseAfterProps =
		"after:h-0.5 after:w-0 after:hover:w-full after:absolute after:bottom-0 after:left-0 after:transition-all";

	useEffect(() => {
		if (open) {
			animate(
				".anim",
				{ y: 0 },
				{
					delay: stagger(0.075),
					ease: [0.45, 0, 0.55, 1],
					duration: 1,
				}
			);
		}
	}, [open]);

	const items = headerLinks.map((props, idx) => (
		<mt.li
			initial={{ y: 50 }}
			className={`${hoverTextCol} ${baseAfterProps} px-2 py-2 relative text-md anim`}
			key={idx}
		>
			<Link href={props.href}>{props.label}</Link>
		</mt.li>
	));

	return (
		<div className="h-max w-max max-md:hidden ">
			<ul
				className={` flex items-center content-center gap-1 overflow-hidden ${navigation.className} transition ${textCol} relative`}
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
		"after:h-0.5 after:w-0 after:hover:w-full after:absolute after:bottom-0 after:left-0 after:transition-all"

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
