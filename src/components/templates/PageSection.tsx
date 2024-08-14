import { ReactNode } from "react";

interface PageSectionProps {
	height: number;
	flexCenter?: boolean;
	children?: ReactNode;
	autoFit: "md" | "lg" | "sm" | "none";
}

const variants = {
	lg: {
		"128": "lg:h-128",
		"196": "lg:h-196",
		"96": "lg:h-96",
		"72": "lg:h-72",
		"162": "lg:h-162",
	},
	md: {
		"128": "md:h-128",
		"196": "md:h-196",
		"96": "md:h-96",
		"72": "md:h-72",
		"162": "md:h-162",
	},
	sm: {
		"128": "sm:h-128",
		"196": "sm:h-196",
		"96": "sm:h-96",
		"72": "sm:h-72",
		"162": "sm:h-162",
	},
	none: {
		"128": "h-128",
		"196": "h-196",
		"96": "h-96",
		"72": "h-72",
		"162": "h-162",
	},
};

export default function PageSection(props: PageSectionProps) {
	const flexCenter = props.flexCenter ? "flex justify-center items-center" : "";
	let autoFit;

	switch (props.autoFit) {
		case "lg":
			//@ts-ignore
			autoFit = "h-fit " + variants.lg[props.height];
			break;
		case "md":
			//@ts-ignore
			autoFit = "h-fit " + variants.md[props.height];
			break;
		case "sm":
			//@ts-ignore
			autoFit = "h-fit " + variants.sm[props.height];
			break;
		case "none":
			//@ts-ignore
			autoFit = variants.none[props.height];
			break;
	}

	return <section className={`w-full relative  overflow-hidden ${autoFit} ${flexCenter}`}>{props.children}</section>;
}
