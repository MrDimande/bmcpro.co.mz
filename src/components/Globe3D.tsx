import { Sphere } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function ConceptualGlobe() {
	const groupRef = useRef<THREE.Group>(null);
	const orbitNodeRef = useRef<THREE.Mesh>(null);
	const ringRefs = useRef<THREE.Mesh[]>([]);

	// Stylized continents texture in project colors (dark ocean, golden land)
	const continentsTexture = useMemo(() => {
		if (typeof document === 'undefined') return null;
		const canvas = document.createElement('canvas');
		canvas.width = 1024;
		canvas.height = 512;
		const ctx = canvas.getContext('2d');
		if (!ctx) return null;

		// Base ocean
		ctx.fillStyle = '#050308';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Helper to draw soft golden continent blobs
		const drawContinent = (cx: number, cy: number, rx: number, ry: number, rotation = 0) => {
			ctx.save();
			ctx.translate(cx, cy);
			ctx.rotate(rotation);
			const grd = ctx.createRadialGradient(0, 0, Math.min(rx, ry) * 0.1, 0, 0, rx);
			grd.addColorStop(0, '#fff8d1');
			grd.addColorStop(0.4, '#ffd877');
			grd.addColorStop(1, '#dca53a');
			ctx.fillStyle = grd;
			ctx.beginPath();
			ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
		};

		// Rough stylized landmasses (not geospatially perfect, only conceptual)
		drawContinent(340, 260, 120, 190, -0.4); // África / Europa
		drawContinent(170, 230, 150, 180, 0.2);  // América do Sul
		drawContinent(800, 220, 180, 160, 0.5);  // Ásia
		drawContinent(760, 120, 90, 60, -0.2);   // Europa Norte
		drawContinent(640, 340, 140, 90, 0.4);   // Austrália / Índico

		// Soft atmospheric overlay
		const atm = ctx.createRadialGradient(512, 256, 50, 512, 256, 360);
		atm.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
		atm.addColorStop(1, 'rgba(255, 255, 255, 0)');
		ctx.fillStyle = atm;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		const texture = new THREE.CanvasTexture(canvas);
		texture.colorSpace = THREE.SRGBColorSpace;
		texture.needsUpdate = true;
		return texture;
	}, []);

	useFrame(({ clock }) => {
		if (!groupRef.current) return;
		const t = clock.getElapsedTime();
		groupRef.current.rotation.y = t * 0.2;
		groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.08;

		if (orbitNodeRef.current) {
			const radius = 1.7;
			const speed = 0.35;
			const phi = t * speed;
			orbitNodeRef.current.position.set(
				Math.cos(phi) * radius,
				0.35,
				Math.sin(phi) * radius
			);
		}

		ringRefs.current.forEach((ring, idx) => {
			if (!ring) return;
			const mat = ring.material as THREE.MeshBasicMaterial;
			const base = 0.14 + idx * 0.03;
			const amp = 0.04;
			mat.opacity = base + Math.sin(t * 0.8 + idx * 1.1) * amp;
		});
	});

	const nodePositions: [number, number, number][] = [
		[1.1, 0.25, 0.65],
		[-1.0, -0.2, 0.8],
		[0.25, 0.9, -1.0],
		[-0.35, -1.0, -0.9],
		[0.9, -0.55, -0.7],
	];

	return (
		<group ref={groupRef}>
			{/* Lighting */}
			<ambientLight intensity={0.35} />
			<directionalLight position={[4, 6, 8]} intensity={1.1} color="#ffb800" />
			<pointLight position={[-6, -4, -6]} intensity={0.5} color="#ffb800" />

			{/* Core sphere with stylized continents texture */}
			<Sphere args={[1.55, 64, 64]}>
				<meshStandardMaterial
					color="#ffe8b0"
					metalness={0.8}
					roughness={0.22}
					map={continentsTexture ?? undefined}
					emissive="#ffb800"
					emissiveIntensity={0.18}
				/>
			</Sphere>

			{/* Latitude/longitude wireframe */}
			<Sphere args={[1.65, 40, 40]}>
				<meshBasicMaterial
					color="#ffb800"
					transparent
					opacity={0.11}
					wireframe
				/>
			</Sphere>

			{/* Glowing equator band */}
			<mesh rotation={[Math.PI / 2.1, 0, 0]}>
				<torusGeometry args={[1.85, 0.05, 24, 170]} />
				<torusGeometry args={[1.75, 0.045, 24, 170]} />
				<meshBasicMaterial color="#ffb800" transparent opacity={0.23} />
			</mesh>

			{/* Orbital rings */}
			{[0, 1, 2].map((i) => (
				<mesh
					key={i}
					ref={(el) => {
						if (el) ringRefs.current[i] = el;
					}}
					rotation={[Math.PI / 4, (Math.PI / 3) * i, 0]}
				>
					<torusGeometry args={[1.9, 0.024, 20, 190]} />
					<meshBasicMaterial color="#ffb800" transparent opacity={0.2} />
				</mesh>
			))}

			{/* Network nodes */}
			{nodePositions.map((pos, index) => (
				<mesh key={index} position={pos}>
					<sphereGeometry args={[0.09, 18, 18]} />
					<meshStandardMaterial
						color="#ffde8a"
						emissive="#ffb800"
						emissiveIntensity={0.85}
					/>
				</mesh>
			))}

			{/* Orbiting highlight node */}
			<mesh ref={orbitNodeRef}>
				<sphereGeometry args={[0.12, 20, 20]} />
				<meshStandardMaterial
					color="#fff4c4"
					emissive="#ffcc4d"
					emissiveIntensity={1}
				/>
			</mesh>
		</group>
	);
}

export default function Globe3D() {
	return (
		<div className="w-full h-full">
			<Canvas camera={{ position: [0, 0, 6], fov: 38 }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
				<ConceptualGlobe />
			</Canvas>
		</div>
	);
}

