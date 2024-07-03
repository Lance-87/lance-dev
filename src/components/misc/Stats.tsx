import { useContext } from "react";
import ThemeContext from "../providers/ThemeContext";

import * as fonts from "@/lib/fonts";

import stats from "@/lib/stats";

interface StatboxProps {
	stats: string;
	label: string;
	description: string;
}

export default function Stats() {
	const { theme } = useContext(ThemeContext);
	const bgCol = theme == "light" ? "bg-neutral-200/30" : "bg-black/10";
	const textColor = theme == "light" ? "text-gray-900" : "text-gray-200";
	const allStats = stats.map((s, idx) => (
		<div>
			<StatBox stats={s.stat} label={s.label} description={s.description} key={`s-${idx}`} />
		</div>
	));

	return (
		<div
			className={`${bgCol} ${textColor} transition-all border-y border-slate-400/20 w-full h-max p-5 flex justify-center`}
		>
			<div className="max-w-6xl w-full h-max grid grid-cols-3 max-lg:grid-cols-1 max-lg:px-5 grid-rows-2 gap-4 gap-x-4 items-center">
				{allStats}
			</div>
		</div>
	);
}

function StatBox(props: StatboxProps) {
	const { theme } = useContext(ThemeContext);
	const hoverEffects =
		theme == "dark"
			? "hover:border-slate-200/60 hover:bg-gradient-to-t hover:from-neutral-300/10 hover:to-white-0 hover:from-0% hover:to-70%"
			: "hover:bg-white/30";
	const flex = "flex flex-row items-center xl:justify-center gap-3";
	let textSettings = theme == "dark" && " bg-clip-text text-transparent  bg-gradient-to-b  from-gray-400 to-gray-600";
	return (
		<div className={`w-full h-full border border-slate-500 rounded-2xl transition-all p-3 ${hoverEffects} ${flex}`}>
			<div className="w-32 h-32 flex justify-center items-center">
				<h1 className={`${fonts.num.className} tracking-tighter text-6xl ${textSettings} `}>{props.stats}</h1>
			</div>
			<div className="w-72 ml-4">
				<h2 className={`${fonts.heading.className} tracking-tighter text-2xl`}>{props.label}</h2>
				<p className={`${fonts.subtext.className} mt-1 text-xs tracking-tight opacity-50`}> {props.description}</p>
			</div>
		</div>
	);
}
