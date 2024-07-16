import { DM_Sans, Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";

const heading = Inter_Tight({
	weight: "800",
	subsets: ["latin"],
});

const heading_2 = Inter_Tight({
	weight: "700",
	subsets: ["latin"],
});


const hero = DM_Sans({
	weight: "900",
	subsets: ["latin"],
	fallback:["monospace"]
});

const subtext = DM_Sans({
	weight: "300",
	subsets: ["latin"],
});
const num = Inter({
	weight: "800",
	subsets: ["latin"],
});

const navigation = DM_Sans({
    weight: "400",
	subsets: ["latin"],
})
export {
    heading, subtext, num, hero, navigation, heading_2
}