import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ theme, src }: { theme: string; src: StaticImageData }) {
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 0.5], [0, 500]);
	return (
		<motion.div style={{ y }} className={`h-512 w-screen lg:w-full absolute`}>
			<Image src={src} quality={80} priority alt="" style={{ opacity: 0.1, transform: "grayscale(1)" }} />
		</motion.div>
	);
}
