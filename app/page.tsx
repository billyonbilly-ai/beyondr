"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { Canvas } from "@react-three/fiber";
import Planet from "@/components/three/Planet";
import Stars from "@/components/three/Stars";
import Sunlight from "@/components/three/Sunlight";
import CameraFloat from "@/components/three/CameraFloat";
import SceneEffects from "@/components/three/SceneEffects";

function Welcome() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-dvh w-full touch-none overflow-hidden">
      <div
        className={`bg-brand-black absolute inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
          isLoaded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <p className="text-brand-white text-xl">Loading...</p>
      </div>

      <Canvas
        camera={{ position: [0, 0, 8], fov: 48 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <CameraFloat />

        <Stars radius={160} size={0.08} speed={0.00003} count={600} />

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
