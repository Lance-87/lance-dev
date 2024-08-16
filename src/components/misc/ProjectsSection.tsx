import { heading_2, subtext } from "@/lib/fonts";

export default function ProjectsSection() {
	return (
		<div className=" w-full h-fit px-2 py-5 max-w-7xl">
			<div className="bg-black/30 shadow-xl flex gap-2 flex-col overflow-hidden md:flex-row rounded-[5rem] w-full h-162 lg:h-128">
				<div className="w-full h-full flex items-center px-2 lg:px-10">
					<div className="w-64 h-fit mx-12">
						<h2 className={`${heading_2.className} text-5xl`}>Projects</h2>
						<p className={`${subtext.className} mt-4 text=2xl`}>I have worked on many STEM related projects before</p>
					</div>
				</div>
				<div className="w-1024 h-full"></div>
			</div>
		</div>
	);
}
