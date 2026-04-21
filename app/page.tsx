"use client";

import { Canvas } from "@react-three/fiber";
import Planet from "@/components/Planet";

function Welcome() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center">
      <div className="h-[60vh] w-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Planet />
        </Canvas>
      </div>
      <a href="/home" className="text-3xl font-extrabold tracking-widest">
        EXPLORE
      </a>
    </div>
  );
}

export default Welcome;
