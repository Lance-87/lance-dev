import { heading_2, subtext } from "@/lib/fonts";
import Link from "next/link";

export default function ProjectsSection() {
	return (
		<div className=" w-full h-full bg-gradient-to-br bg-neutral-950">
			<div className="max-w-7xl w-full py-4 mx-auto">
				<div className="border border-neutral-700/20 flex gap-2 flex-col overflow-hidden md:flex-row rounded-xl w-full h-162 lg:h-128">
					<div className="w-full h-full flex items-center px-2 lg:px-10">
						<div className="w-96 h-fit mx-10">
							<h2 className={`text-5xl font-semibold tracking-tight`}>Projects</h2>
							<p className={`font-light mt-4 mb-2 text-md opacity-80`}>
								I have worked on many projects ranging from robots in CAD, Graphic Design, Photo Manipulation,
								and Programming.
							</p>
							<span className="pb-2 font-light relative mt-4 text-md after:h-0.5 after:bg-white after:w-0 after:hover:w-full after:absolute after:bottom-0 after:left-0 after:transition-all">
								<Link href={"/projects"}> See all projects</Link>
							</span>
						</div>
					</div>
					<div className="w-1024 h-full"></div>
				</div>
			</div>
		</div>
	);
}
