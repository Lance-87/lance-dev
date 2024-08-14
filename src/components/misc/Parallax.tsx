import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ theme, src }: { theme: string; src: StaticImageData }) {
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 0.75], [0, 500]);
	return (
		<motion.div style={{ y }} className={`h-512 w-256 lg:w-full absolute`}>
			<Image src={src} fill quality={80} loading="lazy" alt=""  style={{ opacity: 0.2 }} />
		</motion.div>
	);
}
