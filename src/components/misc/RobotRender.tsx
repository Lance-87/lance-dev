import { useEffect } from "react";
import { useRef } from "react";
import * as THREE from "three";

export default function RobotRender() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize(400, 400);
			containerRef.current?.appendChild(renderer.domElement);
		}
	}, []);

	return <div ref={containerRef} />;
}
