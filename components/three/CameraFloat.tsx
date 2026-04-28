"use client";

import { useFrame } from "@react-three/fiber";

export default function CameraFloat() {
  useFrame(({ camera, clock }) => {
    const t = clock.elapsedTime;

    camera.position.x = Math.sin(t * 0.15) * 0.14;
    camera.position.y = Math.cos(t * 0.12) * 0.08;

    camera.lookAt(0, 0, 0);
  });

  return null;
}
