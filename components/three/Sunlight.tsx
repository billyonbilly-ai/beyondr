"use client";

import { Environment, Lightformer } from "@react-three/drei";

export default function Sunlight() {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={13}
            position={[-15, 8, 0]}
            scale={[10, 15, 1]}
            rotation-y={Math.PI / 2}
            color="#fff5e6"
          />

          <Lightformer
            form="circle"
            intensity={8}
            position={[-8, 10, 5]}
            scale={8}
            color="#ffd4a3"
          />

          <Lightformer
            form="rect"
            intensity={3}
            position={[12, 3, 2]}
            scale={[8, 12, 1]}
            rotation-y={-Math.PI / 2}
            color="#6b7280"
          />

          <Lightformer
            form="rect"
            intensity={2}
            position={[0, -10, -5]}
            scale={[20, 5, 1]}
            color="#1a1a2e"
          />
        </group>
      </Environment>

      <spotLight
        position={[-10, 12, 8]}
        angle={0.3}
        penumbra={0.5}
        decay={0}
        intensity={Math.PI * 0.55}
        color="#fff9f0"
      />

      <spotLight
        position={[8, -5, 5]}
        angle={0.25}
        penumbra={0.7}
        decay={0}
        intensity={Math.PI * 0.4}
        color="#4a5568"
      />

      <spotLight
        position={[0, 0, -15]}
        angle={0.4}
        penumbra={0.8}
        decay={0.1}
        intensity={Math.PI * 0.6}
        color="#2d1810"
      />
    </group>
  );
}
