"use client";

import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Preload, BakeShadows } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { useMotionDirector } from '@/motion/MotionDirector';
import { CinematicCamera } from '@/components/3d/Camera/CinematicCamera';
import { MorphObject } from '@/components/3d/Objects/MorphObject';
import { ParticleField } from '@/components/3d/particles/ParticleField';
import { Lighting } from '@/components/3d/Lighting';

export const Experience = () => {
  const { quality } = useMotionDirector();

  const dpr = quality === 'low' ? 1 : quality === 'medium' ? 1.5 : 2;
  const bloomIntensity = quality === 'low' ? 0.5 : quality === 'medium' ? 1 : 1.5;

  return (
    <Canvas
      shadows
      dpr={[1, dpr]}
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{
        antialias: quality !== 'low',
        powerPreference: 'high-performance'
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -10,
      }}
    >
      <Suspense fallback={null}>
        <Lighting />
        <CinematicCamera />
        <MorphObject />
        <ParticleField />

        <EffectComposer disableNormalPass>
          <Bloom
            intensity={bloomIntensity}
            luminanceThreshold={0.9}
            luminanceSmoothing={0.1}
          />
          <ChromaticAberration
            offset={new THREE.Vector2(0.002, 0.002)}
          />
        </EffectComposer>

        <BakeShadows />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};
