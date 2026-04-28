"use client";

import * as THREE from "three";

export default function Atmosphere() {
  return (
    <meshBasicMaterial
      color="#8ecaff"
      transparent
      opacity={0.03}
      side={THREE.BackSide}
      blending={THREE.AdditiveBlending}
    />
  );
}
