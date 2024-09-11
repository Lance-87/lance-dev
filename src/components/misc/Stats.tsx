import { useContext, useEffect, useRef, useState } from "react";
import ThemeContext from "../providers/ThemeContext";
import { motion as mt, animate, stagger, useScroll, useTransform, useInView, MotionValue } from "framer-motion";

import * as fonts from "@/lib/fonts";
import stats from "@/lib/stats";

interface StatboxProps {
	stats: string;
	label: string;
	description: string;
	firstChild?: boolean;
	scrollProgress: MotionValue;
}

export default function Stats() {
	const { theme } = useContext(ThemeContext);
	const [loaded, setLoaded] = useState(false);

	const { scrollYProgress } = useScroll();

	const ref = useRef(null);
	const inView = useInView(ref);

	useEffect(() => {
		setLoaded(inView);
	}, [inView]);

	useEffect(() => {
		if (loaded) {
			animate(
				".statBox",
				{ opacity: 1, y: 0, filter: "blur(0)" },
				{ delay: stagger(0.1, { startDelay: 0.5 }), duration: 0.75, ease: [0, 0.55, 0.45, 1] }
			);
		} else {
			animate(".statBox", { opacity: 0, y: 10, filter: "blur(10px)" }, { duration: 0 });
		}
	}, [loaded]);

	const bgCol = theme == "light" ? "bg-neutral-200/20" : "bg-neutral-950";
	const textColor = theme == "light" ? "text-gray-900" : "text-gray-300";

	return (
		<div ref={ref} className={`${bgCol} ${textColor} shadow-2xl transition-all w-full h-full p-2 mx-auto`}>
			<div className="max-w-7xl px-2 mx-auto w-full h-full grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 grid-rows-4 gap-4 justify-items-center">
				{stats.map((s, idx) => (
					<StatBox
						key={idx}
						firstChild={idx == 0}
						stats={s.stat}
						scrollProgress={scrollYProgress}
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
		theme == "dark" ? "border-neutral-700/20 hover:border-neutral-500/40" : "bg-slate-100/10 hover:bg-white/30";

	const flex = "flex flex-row items-center justify-around";

	let firstChildGrad = props.firstChild ? "from-red-500 to-blue-500" : "from-neutral-400 to-neutral-100";
	let textSettings = theme == "dark" && `bg-clip-text text-transparent  bg-gradient-to-tl  ${firstChildGrad}`;

	const firstChildProps =
		"first:row-span-1 first:col-span-1 first:lg:col-span-1 first:lg:row-span-2 first:md:col-span-2  first:lg:!flex-col gap-4 first:lg:!justify-center first:px-8";
	const firstChildLabel = props.firstChild ? "text-5xl md:text-8xl drop-shadow-[0px_0px_25px_#d295ee]" : "text-6xl";
	const labelWidth = props.firstChild ? "w-fit" : "w-32";
	return (
		<mt.div
			initial={{ opacity: 0, x: -10, filter: "blur(10px)" }}
			style={{ transition: "border 0.1s ease-in, background 0.1s ease-in" }}
			className={`statBox ${background} ${flex} ${firstChildProps} px-2 shadow-xl w-full border border-neutral-700 rounded-2xl`}
		>
			<div className={`${labelWidth} h-fit `}>
				<h3 className={`font-extrabold text-center tracking-tighter  ${firstChildLabel} ${textSettings} `}>
					{props.stats}
				</h3>
			</div>
			<div className="w-full ml-3">
				<h4 className={`font-semibold tracking-tighter text-md lg:text-xl`}>{props.label}</h4>
				<p className={`mt-1 text-xs lg:text-md font-light opacity-80`}>{props.description}</p>
			</div>
		</mt.div>
	);
}
