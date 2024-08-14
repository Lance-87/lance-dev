"use client";

import { useContext, useEffect } from "react";
import MenuContext from "../providers/MenuContext";
import { animate, DOMKeyframesDefinition, DynamicAnimationOptions, motion as mt, stagger } from "framer-motion";
import ModalPortal from "../templates/ModalPortal";
import ThemeContext from "../providers/ThemeContext";
import headerLinks from "@/lib/headerLinks";
import Link from "next/link";

import * as fonts from "@/lib/fonts";

export default function MenuBurger() {
	const { toggled, setToggled } = useContext(MenuContext);
	const { theme } = useContext(ThemeContext);
	const color = theme == "dark" ? "bg-white" : "bg-black";

	useEffect(() => {
		const initDuration = { duration: 0.5, ease: [0.16, 1, 0.3, 1], at: "<", delay: 0.5 };
		const duration = { duration: 0.5, ease: [0.16, 1, 0.3, 1], at: "<" };
		const b2Duration = { duration: 0.25, ease: [0.16, 1, 0.3, 1], at: "<" };

		const initAnimations = [
			[".b1", { width: 35 }, initDuration],
			[".b2", { width: 15 }, initDuration],
			[".b3", { width: 25 }, initDuration],
		];

		const animations = toggled
			? [
					[".b1", { rotate: 45, width: 30, y: 8 }, duration],
					[".b2", { opacity: 0, width: 0 }, b2Duration],
					[".b3", { rotate: -45, y: -8, width: 30 }, duration],
			  ]
			: [
					[".b1", { rotate: 0, width: 35, y: 0 }, duration],
					[".b2", { opacity: 1, width: 15 }, b2Duration],
					[".b3", { rotate: 0, y: 0, width: 25 }, duration],
			  ];

		//@ts-ignore
		animate(initAnimations);
		//@ts-ignore
		animate(animations);

		if (toggled) {
			document.getElementById("main-body")?.classList.add("no-scroll");
		} else {
			document.getElementById("main-body")?.classList.remove("no-scroll");
		}
	}, [toggled]);

	return (
		<>
			<button
				title="burger"
				className="block md:hidden"
				onClick={() => {
					setToggled();
				}}
			>
				<div className="flex flex-col gap-1 w-max h-max p-2">
					<mt.div initial={{ width: 0 }} className={`b1 block h-1 rounded-full ${color}`} />
					<mt.div initial={{ width: 0 }} className={`b2 block h-1 rounded-full ${color}`} />
					<mt.div initial={{ width: 0 }} className={`b3 block h-1 rounded-full ${color}`} />
				</div>
			</button>

			<ModalPortal>
				<Menu toggled={toggled} setToggled={setToggled} />
			</ModalPortal>
		</>
	);
}

function useMenu(toggled: boolean) {
	const animations = toggled
		? [
				[
					".bgcont",
					{
						opacity: 1,
						display: "block",
					},
					{ duration: 0.25, ease: [0.16, 1, 0.3, 1] },
				],
				[".menu", { height: "70%" }, { duration: 0.625, ease: [0.16, 1, 0.3, 1], at: "<" }],
				[
					".m-link",
					{ opacity: 1, y: 0 },
					{ duration: 0.5, delay: stagger(0.05), ease: [0.16, 1, 0.3, 1], at: "-0.25" },
				],
		  ]
		: [
				[
					".m-link",
					{ opacity: 0, y: 50 },
					{ duration: 0.5, delay: stagger(0.05, { from: "last" }), ease: [0.16, 1, 0.3, 1], at: "-0.1" },
				],
				[".menu", { height: 0 }, { duration: 0.5, ease: [0.16, 1, 0.3, 1] }],
				[
					".bgcont",
					{
						opacity: 0,
						display: "none",
					},
					{ duration: 0.5, ease: [0.16, 1, 0.3, 1], at: "+0.01" },
				],
		  ];

	//@ts-ignore
	return animate(animations);
}

function Menu({ toggled, setToggled }: { toggled: boolean; setToggled: () => void }) {
	const { theme } = useContext(ThemeContext);

	useMenu(toggled);

	const color = theme == "dark" ? "bg-gradient-to-br from-gray-800 to-black" : "bg-gray-200";

	const items = headerLinks.map((props, idx) => (
		<mt.li
			onClick={() => {
				setToggled();
			}}
			initial={{ opacity: 0 }}
			className={`px-2 py-2 relative text-md m-link`}
			key={idx}
		>
			<Link href={props.href}>{props.label}</Link>
		</mt.li>
	));

	return (
		<mt.div initial={{ opacity: 0 }} className={`bgcont fixed left-0 top-0 z-20 w-screen h-screen bg-black/50`}>
			<mt.nav
				initial={{ height: 0 }}
				className={`menu mx-auto h-[70%] ${color}  w-full flex items-center rounded-b-3xl`}
			>
				<ul
					className={`mx-auto ${fonts.navigation.className} text-2xl text-white content-center gap-1 overflow-hidden transition relative`}
				>
					{items}
				</ul>
			</mt.nav>
		</mt.div>
	);
}
