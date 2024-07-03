"use client";

import ThemeContext from "@/components/providers/ThemeContext";
import { useContext } from "react";

import { hero, subtext } from "@/lib/fonts";

import PageSection from "@/components/templates/PageSection";
import Stats from "@/components/misc/Stats";

export default function Home() {
	const { theme } = useContext(ThemeContext);
	const bgCol = theme == "light" ? "bg-neutral-200" : "bg-gray-800";

	return (
		<main className={`${bgCol} w-full h-max transition-colors flex flex-col items-center`}>
			<HomeHero />
			<PageSection height={96}>
				<Stats />
			</PageSection>
			<PageSection height={162}></PageSection>
			<PageSection height={162}></PageSection>
		</main>
	);
}

function HomeHero() {
	const { theme } = useContext(ThemeContext);
	const textCol = theme == "light" ? "from-gray-700 to-gray-900" : "from-gray-200 to-gray-400";
	const subtextColor = theme == "light" ? "text-gray-900" : "text-gray-200";
	const heroGradientColor = theme == "light" ? "from-gray-300" : "from-gray-700";
	const headerGradient = " bg-clip-text text-transparent decoration-clone bg-gradient-to-br";

	const buttonColor =
		theme == "light"
			? "hover:bg-gray-900 border-gray-900 text-gray-900 hover:text-gray-200"
			: "hover:bg-gray-200 text-gray-200 hover:text-gray-900";
	return (
		<PageSection height={162} flexCenter>
			<div className={`${heroGradientColor} absolute w-full h-full bg-gradient-to-b to-white/0`} />
			<div className="w-max h-128 flex items-center text-center z-10">
				<div className="py-6 max-md:w-96 w-162 h-fit">
					<h1
						className={`text-6xl leading-tighter tracking-tighter ${textCol} ${headerGradient} ${hero.className}`}
					>
						You actually opened it. I'm Lance.
					</h1>
					<p className={`mt-3 ${subtext.className} ${subtextColor} tracking-tight text-md opacity-65`}>
						I do things, so many things. CAD is one of them.
					</p>
					<button type="button" className={`${buttonColor} mt-8 transition-all text-lg border-2 px-24 py-3 rounded-3xl`}>
						About me
					</button>
				</div>
			</div>
		</PageSection>
	);
}
