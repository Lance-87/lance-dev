import { ReactNode } from "react";

interface PageSectionProps {
	height: number;
	flexCenter?: boolean;
	children?: ReactNode;
}

export default function PageSection(props: PageSectionProps) {
	let remHeight;
	const flexCenter = props.flexCenter ? "flex justify-center items-center" : "";

	switch (props.height) {
		case 128:
			remHeight = "h-128";
			break;
		case 196:
			remHeight = "h-196";
			break;
		case 96:
			remHeight = "h-96";
			break;
		case 162:
			remHeight = "h-162"
		default:
			break;
	}

	return (
		<section className={`border border-red-400 h- w-full ${remHeight} flex justify-center`}>
			<div className={` ${flexCenter} w-full h-full`}>{props.children}</div>
		</section>
	);
}
