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
				{ opacity: 1, x: 0, },
				{ delay: stagger(0.1), duration: 0.75, ease: [0, 0.55, 0.45, 1] }
			);
		}
	}, [loaded]);

	const bgCol = theme == "light" ? "bg-neutral-200/20" : "bg-gradient-radial to-neutral-950 to-30% from-neutral-900";
	const textColor = theme == "light" ? "text-gray-900" : "text-gray-300";

	return (
		<div
			className={`${bgCol} ${textColor} shadow-2xl transition-all w-full h-full pt-16 pb-4 px-4 mx-auto border-b border-neutral-700 border-dashed`}
		>
			<div className="max-w-7xl mx-auto w-full h-full grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 grid-rows-4 gap-4 justify-items-center">
				{stats.map((s, idx) => (
					<StatBox
						key={`st-${idx}`}
						firstChild={idx == 0}
						stats={s.stat}
						label={s.label}
						description={s.description}
					/>
				))}
			</div>
		</div>
	);
}

function StatBox(props: StatboxProps) {
	const { theme } = useContext(ThemeContext);
	const background =
		theme == "dark"
			? "border-neutral-700/20  hover:border-neutral-500/40"
			: "bg-slate-100/10 hover:bg-white/30";

	const flex = "flex flex-row items-center justify-around";

	let textSettings =
		theme == "dark" && " bg-clip-text text-transparent  bg-gradient-to-tl  from-neutral-400 to-neutral-100";

	const firstChildProps = props.firstChild
		? "row-span-1 col-span-1 lg:col-span-1 lg:row-span-2 md:col-span-2  lg:!flex-col gap-4 lg:!justify-center px-8"
		: "p-5";
	const firstChildLabel = props.firstChild ? "w-fit text-5xl md:text-8xl" : "text-5xl";

	return (
		<mt.div
			initial={{ opacity: 0, x: -20 }}
			style={{ transition: "border 0.1s ease-in, background 0.1s ease-in " }}
			className={`statBox ${background} ${flex} ${firstChildProps} shadow-xl w-full border border-slate-500/0 rounded-2xl`}
		>
			<div className={`w-32 h-fit ${firstChildLabel}`}>
				<h3 className={`font-extrabold text-center tracking-tighter  ${textSettings} `}>{props.stats}</h3>
			</div>
			<div className="w-full ml-3">
				<h4 className={`font-semibold tracking-tighter text-md lg:text-xl`}>{props.label}</h4>
				<p className={`mt-1 text-sm lg:text-md opacity-80`}>{props.description}</p>
			</div>
		</mt.div>
	);
}
