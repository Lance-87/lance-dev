"use client";

import ThemeContext from "@/components/providers/ThemeContext";
import { useContext } from "react";
import { hero, subtext } from "@/lib/fonts";

import PageSection from "@/components/templates/PageSection";
import Stats from "@/components/misc/Stats";
import ProjectsSection from "@/components/misc/ProjectsSection";
import Parallax from "@/components/misc/Parallax";

export default function Home() {
	const { theme } = useContext(ThemeContext);
	const bgCol = theme == "light" ? "bg-neutral-300" : "bg-gray-800";

	return (
		<main className={`${bgCol} w-full h-max transition-colors flex flex-col items-center relative`}>
			<HomeHero />
			<PageSection height={"fit"}>
				<Stats />
			</PageSection>
			<PageSection height={162} flexCenter>
				<ProjectsSection />
			</PageSection>
			<PageSection height={162}></PageSection>
		</main>
	);
}

function HomeHero() {
	const { theme } = useContext(ThemeContext);
	const textCol = theme == "light" ? "from-gray-700 to-gray-900" : "from-gray-200 to-gray-400";
	const subtextColor = theme == "light" ? "text-gray-900" : "text-gray-200";
	const heroGradientColor = theme == "light" ? "from-gray-400/50" : "from-black";
	const headerGradient = " bg-clip-text text-transparent decoration-clone bg-gradient-to-br";

	const buttonColor =
		theme == "light"
			? "hover:bg-gray-900 border-gray-900 text-gray-900 hover:text-gray-200"
			: "hover:bg-gray-200 text-gray-200 hover:text-gray-900";
	return (
		<PageSection height={196}>
			<Parallax />
			<div className={`${heroGradientColor} absolute w-full h-full bg-gradient-to-br to-white/0`} />
			<div className="w-full h-full max-w-7xl mx-auto">
				<div className="mt-20 w-max h-162 flex items-center text-left z-10 ml-16 relative">
					<div className="py-6 max-md:w-96 w-128 h-fit">
						<h1
							className={`text-6xl leading-tighter tracking-tighter ${textCol} ${headerGradient} ${hero.className}`}
						>
							You actually opened it. I'm Lance.
						</h1>
						<p className={`mt-3 ${subtext.className} ${subtextColor} tracking-tight text-md opacity-65`}>
							I do things, so many things. But do I know the things that I do? Of course, not!
						</p>
						<button
							type="button"
							className={`${buttonColor} mt-8 transition-all text-lg border-2 px-24 py-4 rounded-xl`}
						>
							About me
						</button>
					</div>
				</div>
			</div>
		</PageSection>
	);
}
