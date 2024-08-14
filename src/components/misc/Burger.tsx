"use client";

import { useContext, useEffect } from "react";
import MenuContext from "../providers/MenuContext";
import { animate, DOMKeyframesDefinition, DynamicAnimationOptions, motion as mt } from "framer-motion";
import ModalPortal from "../templates/ModalPortal";

export default function MenuBurger() {
	const { toggled, setToggled } = useContext(MenuContext);

	useEffect(() => {
		const b1Toggle: DOMKeyframesDefinition = toggled
			? { rotate: 45, width: 30, y: 8 }
			: { rotate: 0, width: 35, y: 0 };
		const b2Toggle: DOMKeyframesDefinition = toggled ? { opacity: 0, width: 0 } : { opacity: 1, width: 15 };
		const b3Toggle: DOMKeyframesDefinition = toggled
			? { rotate: -45, y: -8, width: 30 }
			: { rotate: 0, y: 0, width: 25 };

		const duration: DynamicAnimationOptions = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };
		const b2Duration: DynamicAnimationOptions = { duration: 0.25, ease: [0.16, 1, 0.3, 1] };

		animate(".b1", b1Toggle, duration);
		animate(".b2", b2Toggle, b2Duration);
		animate(".b3", b3Toggle, duration);

		if (toggled) {
			document.getElementById("main-body")?.classList.add("no-scroll");
		} else {
			document.getElementById("main-body")?.classList.remove("no-scroll");
		}
	}, [toggled]);

	return (
		<>
			<button
				title="burger"
				className="block md:hidden"
				onClick={() => {
					setToggled();
				}}
			>
				<div className="flex flex-col gap-1 w-max h-max p-2">
					<div className="b1 block h-1 rounded-full bg-white"></div>
					<div className="b2 block h-1 rounded-full bg-white"></div>
					<div className="b3 block h-1 rounded-full bg-white"></div>
				</div>
			</button>

			{toggled && (
				<ModalPortal>
					<Menu />
				</ModalPortal>
			)}
		</>
	);
}

function Menu() {
	return (
		<div className="fixed left-0 top-0 z-50 w-[50%] h-screen bg-white">
			<p className="text-white">Menu opened</p>
		</div>
	);
}
