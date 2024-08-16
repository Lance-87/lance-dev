"use client";

import ThemeContext from "@/components/providers/ThemeContext";
import { useContext } from "react";
import { hero, subtext } from "@/lib/fonts";

import heroimg from "../../public/hero.png";

import PageSection from "@/components/templates/PageSection";
import Stats from "@/components/misc/Stats";
import ProjectsSection from "@/components/misc/ProjectsSection";
import Parallax from "@/components/misc/Parallax";
import { GeistSans } from "geist/font/sans";

export default function Home() {
	const { theme } = useContext(ThemeContext);
	const bgCol = theme == "light" ? "bg-neutral-300" : "bg-neutral-950";

	return (
		<main className={`${bgCol} w-full h-max transition-colors flex flex-col items-center relative`}>
			<PageSection height={196} autoFit="none">
				<HomeHero />
			</PageSection>
			<PageSection height={128} autoFit="lg">
				<Stats />
			</PageSection>
			<PageSection height={162} autoFit="lg" flexCenter>
				<ProjectsSection />
			</PageSection>
			<PageSection height={96} autoFit="none"></PageSection>
		</main>
	);
}

function HomeHero() {
	const { theme } = useContext(ThemeContext);

	const textCol = theme == "light" ? "from-gray-700 to-gray-900" : "from-neutral-300 to-neutral-500";
	const subtextColor = theme == "light" ? "text-gray-900" : "text-white-100";
	const headerGradient = " bg-clip-text text-transparent decoration-clone bg-gradient-to-br";
	const heroGradientColor = theme == "light" ? "from-gray-400/80" : "from-neutral-950";

	const buttonColor =
		theme == "light"
			? "hover:bg-gray-900 border-gray-900 text-gray-900 hover:text-gray-200"
			: "hover:bg-gray-200 text-gray-200 hover:text-gray-900";
	return (
		<>
			<Parallax theme={theme} src={heroimg} />
			<div className={`${heroGradientColor} -z-0 absolute w-full h-full bg-gradient-to-t`} />
			<div className="w-full h-full max-w-7xl px-4 mx-auto">
				<div className="mt-20 w-full px-4 h-162 flex items-center justify-center md:justify-start text-left z-10relative">
					<div className="w-60 md:px-0 z-20 md:w-96 h-fit text-center md:text-left">
						<h1
							className={`text-5xl md:text-6xl leading-tight tracking-tighter font-bold ${textCol} ${headerGradient}`}
						>
							This site is a work in progress.
						</h1>
						<p className={`mt-3 text-sm md:text-lg font-light ${subtextColor} ${subtext} text-md`}>
							This site will eventually showcase everything that I do
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
		</>
	);
}
