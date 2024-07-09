"use client"

import ThemeContext from "@/components/providers/ThemeContext";
import { useContext } from "react";


export default function ProjectsPage() {
	const { theme } = useContext(ThemeContext);
	const bgCol = theme == "light" ? "bg-neutral-200" : "bg-gray-800";

	return (
		<main className={`${bgCol} w-full h-max transition-colors flex flex-col items-center`}>
			
		</main>
	);
}
