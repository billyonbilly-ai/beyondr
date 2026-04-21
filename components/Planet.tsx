"use client";

import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Planet(props: React.ComponentProps<"group">) {
  const group = React.useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/models/planet-transformed.glb");

  const customMaterial = useMemo(() => {
    const original = materials.Material as THREE.MeshStandardMaterial;
    const cloned = original.clone();

    cloned.color.set("#fe6847");
    cloned.emissive.set("#fe6847");
    cloned.emissiveIntensity = 0.4;

    return cloned;
  }, [materials]);

  const ceresNode = nodes.Ceres_0 as THREE.Mesh;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Root" rotation={[-Math.PI / 2, 0, 0]} scale={0.2}>
          <group name="Ceres" scale={9.385}>
            <mesh
              name="Ceres_0"
              geometry={ceresNode.geometry}
              material={customMaterial}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/planet-transformed.glb");
