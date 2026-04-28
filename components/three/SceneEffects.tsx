"use client";

import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function SceneEffects() {
  return (
    <EffectComposer>
      <Bloom
        intensity={0.65}
        luminanceThreshold={0.25}
        luminanceSmoothing={0.9}
      />
    </EffectComposer>
  );
}
