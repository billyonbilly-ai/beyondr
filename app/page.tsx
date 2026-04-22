"use client";

import { Canvas } from "@react-three/fiber";
import Planet from "@/components/Planet";
import Stars from "@/components/Stars";

function Welcome() {
  return (
    <div className="relative h-dvh w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Stars />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Planet position={[0, 0, 0]} />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end pb-10">
        <a
          href="/home"
          className="pointer-events-auto text-3xl font-extrabold tracking-widest select-none"
        >
          EXPLORE
        </a>
      </div>
    </div>
  );
}

export default Welcome;
