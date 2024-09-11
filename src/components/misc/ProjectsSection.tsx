import Image from "next/image";
import Link from "next/link";
import robotss from "../../../public/roboss.png";
import pssss from "../../../public/psss.png";
import TypingHeader from "./TypingHeader";
import { useRef, useState, useEffect } from "react";
import { useInView, animate, stagger, useScroll, useTransform, motion } from "framer-motion";

export default function ProjectsSection() {
	const [loaded, setLoaded] = useState(false);

	const ref = useRef(null);

	const inView = useInView(ref, { margin: "25% 0px 0px 0px" });

	useEffect(() => {
		setLoaded(inView);
	}, [inView]);

	const animSequence = [
		[".animString", { opacity: 1, filter: "blur(0px)" }, { delay: stagger(0.075), duration: 0.25 }],
		[
			".pr-p-anim",
			{ opacity: 1, x: 0, filter: "blur(0px)" },
			{ duration: 0.25, at: "+0.25", ease: [0, 0.55, 0.45, 1] },
		],
		[
			".pr-a-anim",
			{ opacity: 1, x: 0, filter: "blur(0px)" },
			{ duration: 0.25, at: "-0.1", ease: [0, 0.55, 0.45, 1] },
		],
		[".pr-projc-anim", { opacity: 1, filter: "blur(0px)" }, { duration: 0, at: "-0.125" }],
	];
	const closeSequence = [
		[".pr-a-anim", { opacity: 0, x: -5, filter: "blur(10px)" }, { duration: 0 }],
		[".pr-p-anim", { opacity: 0, x: -5, filter: "blur(10px)" }, { duration: 0, at: "<" }],
		[".pr-projc-anim", { opacity: 0, filter: "blur(10px)" }, { duration: 0, at: "<" }],
		[".animString", { opacity: 0, filter: "blur(10px)" }, { duration: 0, at: "<" }],
	];

	useEffect(() => {
		if (loaded) {
			//@ts-ignore
			animate(animSequence);
		} else {
			//@ts-ignore
			animate(closeSequence);
		}
	}, [loaded]);

	return (
		<div className="w-full h-full bg-gradient-to-br bg-neutral-950">
			<div className="max-w-7xl w-full p-2 mx-auto">
				<div
					ref={ref}
					className="border border-neutral-700/20 flex gap-2 flex-col-reverse overflow-hidden md:flex-row rounded-xl w-full h-162 lg:h-128"
				>
					<motion.div className="w-full h-full flex items-center px-2 lg:px-10">
						<div className="w-96 h-fit mx-10">
							<h2 className={`text-5xl font-semibold tracking-tight`}>
								<TypingHeader loaded={loaded} text={"Projects"} />
							</h2>
							<p className={`pr-p-anim font-light mt-4 mb-2 text-md opacity-80`}>
								I have worked on many projects ranging from robots in CAD, Graphic Design, Photo Manipulation,
								and Programming.
							</p>
							<div className="pr-a-anim w-fit pb-2 font-light relative mt-4 text-md after:h-0.5 after:bg-white after:w-0 after:hover:w-full after:absolute after:bottom-0 after:left-0 after:transition-all">
								<Link href={"/projects"}> See all projects</Link>
							</div>
						</div>
					</motion.div>
					<div className="w-full h-full relative">
						<div className="absolute w-full z-20 h-full bg-gradient-radial to-neutral-950 from-black/0" />
						<div className="absolute w-full z-20 h-full bg-gradient-to-t md:bg-gradient-to-r from-neutral-950" />
						<div className=" h-full aspect-video relative rounded-xl overflow-hidden">
							<Image objectFit="cover" src={robotss} alt="robot ss" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
