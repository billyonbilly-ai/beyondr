"use client";

import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Planet(props: React.ComponentProps<"group">) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/models/planet-transformed.glb");
  const { gl } = useThree();

  const baseRotationSpeed = 0.008;
  const rotationSpeed = useRef(baseRotationSpeed);
  const targetSpeed = useRef(baseRotationSpeed);
  const isDragging = useRef(false);
  const previousMouseX = useRef(0);

  const customMaterial = useMemo(() => {
    const original = materials.Material as THREE.MeshStandardMaterial;
    const cloned = original.clone();

    cloned.color.set("#fe6847");
    cloned.emissive.set("#fe6847");
    cloned.emissiveIntensity = 0.38;

    return cloned;
  }, [materials]);

  const ceresNode = nodes.Ceres_0 as THREE.Mesh;

  React.useEffect(() => {
    const canvas = gl.domElement;

    const handleStart = (clientX: number) => {
      isDragging.current = true;
      previousMouseX.current = clientX;
    };

    const handleMove = (clientX: number) => {
      if (!isDragging.current) return;

      const deltaX = clientX - previousMouseX.current;

      if (deltaX > 0) {
        const dragSpeed = deltaX * 0.02;
        targetSpeed.current = baseRotationSpeed + dragSpeed;
      }

      previousMouseX.current = clientX;
    };

    const handleEnd = () => {
      isDragging.current = false;
      targetSpeed.current = baseRotationSpeed;
    };

    const onMouseDown = (e: MouseEvent) => handleStart(e.clientX);
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onMouseUp = () => handleEnd();

    const onTouchStart = (e: TouchEvent) => handleStart(e.touches[0].clientX);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const onTouchEnd = () => handleEnd();

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseUp);

    canvas.addEventListener("touchstart", onTouchStart);
    canvas.addEventListener("touchmove", onTouchMove);
    canvas.addEventListener("touchend", onTouchEnd);

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseUp);

      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, [gl]);

  useFrame(() => {
    if (group.current) {
      rotationSpeed.current +=
        (targetSpeed.current - rotationSpeed.current) * 0.05;

      group.current.rotation.y += rotationSpeed.current;
    }
  });

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
