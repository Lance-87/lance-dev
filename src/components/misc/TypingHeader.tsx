"use client";

import { animate, stagger } from "framer-motion";
import { ReactNode, useEffect } from "react";

export default function TypingHeader({ loaded, text }: { loaded: boolean; text: String }): ReactNode {
	const splicedText = text.split("");

	return (
		<>
			{splicedText.map((str) => (
				<span className="animString" key={str}>
					{str}
				</span>
			))}
		</>
	);
}
