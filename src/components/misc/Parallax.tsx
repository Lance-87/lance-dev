import "./Parallax.css"
import {motion, useScroll, useTransform} from "framer-motion"

export default function Parallax(){
    const {scrollYProgress} = useScroll()
    const y = useTransform(scrollYProgress, [0, 0.5],[0,500])
    return(
        <motion.div style={{y}} className="h-full w-full absolute bg-img">
		</motion.div>
    )
}