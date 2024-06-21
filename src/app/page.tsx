"use client";

import ThemeContext from "@/components/providers/ThemeContext";
import { useContext } from "react";

import { Chivo_Mono, Bebas_Neue, Victor_Mono, Fragment_Mono } from "next/font/google";
import PageSection from "@/components/templates/PageSection";

const header = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
});

const subtext = Fragment_Mono({
	weight: "400",
	subsets: ["latin"],
});

export default function Home() {
	const { theme } = useContext(ThemeContext);
	const bgCol = theme == "light" ? "bg-neutral-300" : "bg-gray-800";

	return (
		<main className={`${bgCol} w-full h-max transition-colors flex flex-col items-center`}>
			<HomeHero />
			<PageSection height={128}></PageSection>
			<PageSection height={96}></PageSection>
			<PageSection height={162}></PageSection>
		</main>
	);
}

function HomeHero() {
	const { theme } = useContext(ThemeContext);
	const textCol = theme == "light" ? "text-gray-800" : "text-gray-200";

	return (
		<PageSection height={162} flexCenter>
			<div className="w-max h-128 flex items-center text-center">
				<div className="py-6 w-162 h-fit">
					<h1 className={`text-6xl leading-tight ${header.className} ${textCol}`}>
						You actually opened it. I'm Lance.
					</h1>
					<p className={`mt-3 ${subtext.className} ${textCol} tracking-tighter text-md opacity-65`}>
						I do things, so many things. CAD is one of them.
					</p>
					<button className="mt-8 text-lg border px-24 py-3 rounded-3xl">About me</button>
				</div>
			</div>
		</PageSection>
	);
}
