"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const starCount = 2000;
const positions = new Float32Array(starCount * 3);
const sizes = new Float32Array(starCount);
const twinkleOffsets = new Float32Array(starCount);
const twinkleSpeeds = new Float32Array(starCount);

for (let i = 0; i < starCount; i++) {
  const radius = 50;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(Math.random() * 2 - 1);

  positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
  positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
  positions[i * 3 + 2] = radius * Math.cos(phi);

  sizes[i] = Math.random() * 1.5 + 0.5;

  twinkleOffsets[i] = Math.random() * Math.PI * 2;

  twinkleSpeeds[i] = 0.5 + Math.random() * 1.5;
}

export default function Stars() {
  const starsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (starsRef.current) {
      const geometry = starsRef.current.geometry;
      const sizeAttribute = geometry.attributes.size as THREE.BufferAttribute;

      for (let i = 0; i < sizes.length; i++) {
        const baseSize = sizes[i];
        const offset = twinkleOffsets[i];
        const speed = twinkleSpeeds[i];

        const twinkle =
          Math.sin(clock.getElapsedTime() * speed + offset) * 0.3 + 0.7;
        sizeAttribute.array[i] = baseSize * twinkle;
      }

      sizeAttribute.needsUpdate = true;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}
