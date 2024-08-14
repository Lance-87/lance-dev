import { useContext, useEffect, useState } from "react";
import ThemeContext from "../providers/ThemeContext";
import { motion as mt, animate, stagger, useScroll, useMotionValueEvent } from "framer-motion";

import * as fonts from "@/lib/fonts";
import stats from "@/lib/stats";

interface StatboxProps {
	stats: string;
	label: string;
	description: string;
	firstChild?: boolean;
	key: string;
}

export default function Stats() {
	const { theme } = useContext(ThemeContext);
	const [loaded, setLoaded] = useState(false);
	const { scrollYProgress } = useScroll();
	
	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		if (latest > 0.25) {
			setLoaded(true);
		}
	});

	useEffect(() => {
		if (loaded) {
			animate(
				".statBox",
				{ opacity: 1 },
				{ delay: stagger(0.075), duration: 0.5, ease: [0.45, 0, 0.55, 1], type: "decay" }
			);
		}
	}, [loaded]);

	const bgCol = theme == "light" ? "bg-neutral-200/20" : "bg-black/35";
	const textColor = theme == "light" ? "text-gray-900" : "text-gray-300";

	return (
		<div
			className={`${bgCol} ${textColor} shadow-2xl transition-all border-y border-slate-400/10 w-full h-max p-4 flex flex-col items-center justify-space-between`}
		>
			<div className="max-w-6xl w-full h-max grid grid-cols-3 max-lg:grid-cols-1 max-lg:px-5 my-10 grid-rows-2 gap-4 gap-x-4 items-center">
				{stats.map((s, idx) => (
					<StatBox key={`st-${idx}`} firstChild={idx == 0} stats={s.stat} label={s.label} description={s.description} />
				))}
			</div>
		</div>
	);
}

function StatBox(props: StatboxProps) {
	const { theme } = useContext(ThemeContext);
	const background =
		theme == "dark"
			? "bg-gradient-to-tl from-slate-800/20  hover:border-slate-500/40"
			: "bg-slate-100/10 hover:bg-white/30";
	const flex = "flex flex-row items-center xl:justify-around";
	let textSettings =
		theme == "dark" && " bg-clip-text text-transparent  bg-gradient-to-b  from-gray-300 to-gray-100/60";

	const firstChildProps = props.firstChild ? "row-span-2 col-span-1 !flex-col" : "";
	const firstChildLabel = props.firstChild ? "text-8xl" : "text-6xl";

	return (
		<mt.div
			initial={{ opacity: 0 }}
			key={props.key}
			style={{ transition: "border 0.1s ease-in, background 0.1s ease-in " }}
			className={`statBox ${firstChildProps} shadow-xl w-full h-full border border-slate-500/0 rounded-lg p-5 ${background} ${flex}`}
		>
			<div className="w-32 h-32 flex justify-center items-center">
				<h3 className={`${fonts.num.className} tracking-tighter ${firstChildLabel} ${textSettings} `}>
					{props.stats}
				</h3>
			</div>
			<div className="w-72 ml-3">
				<h4 className={`${fonts.heading.className} text-xl`}>{props.label}</h4>
				<p className={`${fonts.subtext.className} mt-1 leading-5 tracking-wide text-sm opacity-50`}>
					{props.description}
				</p>
			</div>
		</mt.div>
	);
}
