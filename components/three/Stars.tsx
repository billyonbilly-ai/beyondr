"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type StarsProps = {
  radius?: number;
  count?: number;
  size?: number;
  speed?: number;
  seed?: number;
};

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

export default function Stars({
  radius = 100,
  count = 1000,
  size = 0.1,
  speed = 0.00008,
  seed = 1,
}: StarsProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const data = useMemo(() => {
    const rand = seededRandom(seed);

    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const twinkleOffsets = new Float32Array(count);
    const twinkleSpeeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(rand() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);

      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);

      positions[i * 3 + 2] = radius * Math.cos(phi);

      sizes[i] = rand() * 1.8 + 0.7;

      twinkleOffsets[i] = rand() * Math.PI * 2;
      twinkleSpeeds[i] = 0.5 + rand() * 1.5;
    }

    return {
      positions,
      sizes,
      twinkleOffsets,
      twinkleSpeeds,
    };
  }, [count, radius, seed]);

  useFrame(() => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y += speed;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[data.positions, 3]}
        />
        <bufferAttribute attach="attributes-size" args={[data.sizes, 1]} />
      </bufferGeometry>

      <pointsMaterial
        size={size}
        color="#ffffff"
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
