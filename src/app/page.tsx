"use client";

import ThemeContext from "@/components/providers/ThemeContext";
import { useContext } from "react";

import {hero, subtext} from "@/lib/fonts"

import PageSection from "@/components/templates/PageSection";
import Stats from "@/components/misc/Stats";



export default function Home() {
	const { theme } = useContext(ThemeContext);
	const bgCol = theme == "light" ? "bg-neutral-200" : "bg-gray-800";

	return (
		<main className={`${bgCol} w-full h-max transition-colors flex flex-col items-center`}>
			<HomeHero />
			<PageSection height={96}>
				<Stats/>
			</PageSection>
			<PageSection height={162}></PageSection>
			<PageSection height={162}></PageSection>
		</main>
	);
}

function HomeHero() {
	const { theme } = useContext(ThemeContext);
	const textCol = theme == "light" ? "from-sky-700 to-sky-900" : "from-gray-200 to-gray-400";
	const heroGradientColor = theme == "light" ? "from-gray-400" : "from-gray-700"
	const headerGradient=" bg-clip-text text-transparent decoration-clone bg-gradient-to-br"

	return (
		<PageSection height={162} flexCenter>
			<div className={`${heroGradientColor} absolute w-full h-full bg-gradient-to-br to-white/0`}/>
			<div className="w-max h-128 flex items-center text-center z-20">
				<div className="py-6 w-162 h-fit">
					<h1 className={`text-6xl leading-tighter tracking-tighter ${textCol} ${headerGradient} ${hero.className}`}>
						You actually opened it. I'm Lance.
					</h1>
					<p className={`mt-3 ${subtext.className} ${textCol} tracking-tight text-md opacity-65`}>
						I do things, so many things. CAD is one of them.
					</p>
					<button className="mt-8 text-lg border px-24 py-3 rounded-3xl">About me</button>
				</div>
			</div>
		</PageSection>
	);
}
