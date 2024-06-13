"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrthographicCamera,
} from "@react-three/drei";
import Model from "./Model";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function MainCanvas({ progress, lastStage, firstStage }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 0] }}
      gl={{
        powerPreference: "high-performance",
        alpha: true,
        antialias: true,
      }}
      style={{
        height: "100vh",
        position: "fixed",
        width: "100vw",
        zIndex: 1,
        top: 0,
        left: 0,
      }}
    >
      <Model progress={progress} lastStage={lastStage} firstStage={firstStage} />
      <Environment preset="sunset" />
      <OrthographicCamera makeDefault zoom={100} position={[0, 0, 0]} />
      <EffectComposer multisampling={0} disableNormalPass={true} >

        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={200}
          opacity={.01}
        />

      </EffectComposer>
    </Canvas>
  );
}
