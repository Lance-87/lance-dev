"use client";

import ThemeContext from "@/components/providers/ThemeContext";
import { useContext } from "react";
import { hero, subtext } from "@/lib/fonts";

import heroimg from "../../public/hero.png"

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
			<PageSection height={96} autoFit="lg">
				<Stats />
			</PageSection>
			<PageSection height={162} autoFit="none" flexCenter>
				<ProjectsSection />
			</PageSection>
			<PageSection height={162} autoFit="none"></PageSection>
		</main>
	);
}

function HomeHero() {
	const { theme } = useContext(ThemeContext);

	const textCol = theme == "light" ? "from-gray-700 to-gray-900" : "from-gray-200 to-gray-400";
	const subtextColor = theme == "light" ? "text-gray-900" : "text-gray-200";
	const heroGradientColor = theme == "light" ? "from-gray-400/80" : "from-black";
	const headerGradient = " bg-clip-text text-transparent decoration-clone bg-gradient-to-br";

	const buttonColor =
		theme == "light"
			? "hover:bg-gray-900 border-gray-900 text-gray-900 hover:text-gray-200"
			: "hover:bg-gray-200 text-gray-200 hover:text-gray-900";
	return (
		<PageSection height={196} autoFit="none">
			<Parallax theme={theme} src={heroimg}/>
			<div className={`${heroGradientColor} absolute w-full h-full bg-gradient-to-br to-white/0`} />
			<div className="w-full h-full max-w-7xl mx-auto">
				<div className="mt-20 w-full md:w-max h-162 flex items-center justify-center md:justify-start text-left z-10 md:ml-16 ml-0 relative">
					<div className="w-60 px-2 md:px-0 md:w-96 h-fit text-center md:text-left">
						<h1
							className={`text-5xl md:text-6xl leading-tighter tracking-tighter ${textCol} ${headerGradient} ${hero.className}`}
						>
							(WIP) You actually opened it.
						</h1>
						<p className={`mt-3 text-sm md:text-lg ${subtext.className} ${subtextColor} tracking-tight text-md opacity-65`}>
							I do things, so many things. But do I know the things that I do? Of course, not!
						</p>
						<button
							type="button"
							className={`${buttonColor} mt-8 transition-all text-lg border-2 px-12 md:px-24 py-2 md:py-4 rounded-lg`}
						>
							About me
						</button>
					</div>
				</div>
			</div>
		</PageSection>
	);
}
