"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMotionDirector } from '@/motion/MotionDirector';
import { SCENE_CONFIG, SceneState } from '@/config/sceneConfig';

export const CinematicCamera = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const { scrollProgress } = useMotionDirector();

  useFrame((state, delta) => {
    if (!cameraRef.current) return;

    // 1. Determine current scene and interpolation factor
    let currentScene: SceneState = 'HERO';
    let t = 0; // Local interpolation factor (0-1)

    for (const [scene, config] of Object.entries(SCENE_CONFIG)) {
      if (scrollProgress >= config.startProgress && scrollProgress <= config.endProgress) {
        currentScene = scene as SceneState;
        const range = config.endProgress - config.startProgress;
        t = (scrollProgress - config.startProgress) / range;
        break;
      }
    }

    // 2. Get targets for current and next scene
    const currentConfig = SCENE_CONFIG[currentScene];
    const nextScene = (Object.keys(SCENE_CONFIG) as SceneState[])[
      Object.keys(SCENE_CONFIG).indexOf(currentScene) + 1
    ] || currentScene;
    const nextConfig = SCENE_CONFIG[nextScene];

    // 3. Interpolate Position
    const targetPos = new THREE.Vector3().lerpVectors(
      currentConfig.cameraPos,
      nextConfig.cameraPos,
      t
    );

    // 4. Interpolate Rotation (Slerp)
    const targetRot = new THREE.Quaternion().setFromEuler(currentConfig.cameraRot)
      .slerp(new THREE.Quaternion().setFromEuler(nextConfig.cameraRot), t);

    // 5. Apply with damping for cinematic feel
    cameraRef.current.position.lerp(targetPos, 0.1);
    cameraRef.current.quaternion.slerp(targetRot, 0.1);
  });

  return (
    <perspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 0, 5]}
      fov={75}
    />
  );
};
