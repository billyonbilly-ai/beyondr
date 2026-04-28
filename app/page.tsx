"use client";

import Link from "next/link";

import { Canvas } from "@react-three/fiber";
import Planet from "@/components/three/Planet";
import Stars from "@/components/three/Stars";
import Sunlight from "@/components/three/Sunlight";
import CameraFloat from "@/components/three/CameraFloat";
import SceneEffects from "@/components/three/SceneEffects";

function Welcome() {
  return (
    <div className="relative h-dvh w-full touch-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 48 }}>
        <CameraFloat />

        <Stars radius={160} size={0.08} speed={0.00003} count={1200} />

        <Sunlight />

        <ambientLight intensity={0.18} />

        <Planet position={[0, 0, 0]} />
        <SceneEffects />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end pb-10">
        <Link href="/home" className="nav-link pointer-events-auto">
          EXPLORE
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
