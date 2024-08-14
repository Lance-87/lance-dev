import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ theme, src }: { theme: string; src: StaticImageData }) {
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 0.75], [0, 500]);
	return (
		<motion.div style={{ y }} className={`grayscale opacity-20 h-256 w-full absolute bg-img-${theme}`}>
			<Image src={src} quality={10} loading="lazy" alt="" placeholder="blur" />
		</motion.div> 
	);
}
