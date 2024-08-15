import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ theme, src }: { theme: string; src: StaticImageData }) {
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 0.5], [0, 500]);
	return (
		<motion.div style={{ y }} className={`h-196 mx-auto w-full md:w-192 md:h-512 absolute`}>
			<Image src={src} quality={80} fill priority alt="" style={{ opacity: 0.1, transform: "grayscale(1)" }} />
		</motion.div>
	);
}
