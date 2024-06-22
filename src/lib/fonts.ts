import { DM_Sans, Inter } from "next/font/google";

const heading = DM_Sans({
	weight: "700",
	subsets: ["latin"],
});

const hero = DM_Sans({
	weight: "900",
	subsets: ["latin"],
});

const subtext = Inter({
	weight: "400",
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
    heading, subtext, num, hero, navigation
}