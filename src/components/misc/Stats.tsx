import { useContext } from "react";
import ThemeContext from "../providers/ThemeContext";

import * as fonts from "@/lib/fonts"

import stats from "@/lib/stats";

interface StatboxProps {
	stats: string;
	label: string;
	description: string;
}



export default function Stats() {
	const { theme } = useContext(ThemeContext);
	const bgCol = theme == "light" ? "bg-neutral-400" : "bg-gray-700/70";

	const allStats = stats.map((s, idx) => (
        <div>
		    <StatBox stats={s.stat} label={s.label} description={s.description} key={`s-${idx}`} />
        </div>
    ));

	return (
		<div className={`${bgCol} transition-all border-y border-slate-400/20 w-full h-full p-5 flex justify-center`}>
			<div className="max-w-6xl w-full h-full grid grid-cols-3 grid-rows-2 gap-4 gap-x-4 items-center">
				{allStats}
			</div>
		</div>
	);
}

function StatBox(props: StatboxProps) {
	const hoverEffects =
		"hover:border-slate-200/60 hover:bg-gradient-to-t hover:from-neutral-300/10 hover:to-white-0 hover:from-0% hover:to-70%";
	const flex = "flex flex-row align-center gap-3";

	return (
		<div className={`w-full h-full border border-slate-500 rounded-2xl transition-all p-3 ${hoverEffects} ${flex}`}>
			<div className="w-32 h-32 flex justify-center items-center">
				<h1
					className={`${fonts.num.className} tracking-tighter text-6xl bg-gradient-to-b from-gray-200 to-gray-500 bg-clip-text text-transparent `}
				>
					{props.stats}
				</h1>
			</div>
			<div className="w-fit ml-4">
				<h2 className={`${fonts.heading.className} tracking-tighter text-2xl`}>{props.label}</h2>
				<p className={`${fonts.subtext.className} mt-1 text-xs tracking-tight text-slate-200/60`}> {props.description}</p>
			</div>
		</div>
	);
}
