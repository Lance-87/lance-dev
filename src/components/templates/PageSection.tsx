import { ReactNode } from "react";

interface PageSectionProps {
	height: number | string;
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
		case 72:
			remHeight = "h-72";
			break;
		case 162:
			remHeight = "h-162";
			break;
		case "fit":
			remHeight = "h-fit";
			break;
		default:
			break;
	}

	return <section className={`w-full relative  overflow-hidden ${remHeight} ${flexCenter}`}>{props.children}</section>;
}
