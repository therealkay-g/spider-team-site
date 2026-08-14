"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { useMotionDirector } from '@/motion/MotionDirector';
import { SCENE_CONFIG, SceneState } from '@/config/sceneConfig';
import { extend } from '@react-three/fiber';

const MorphMaterial = shaderMaterial(
  {
    uTime: 0,
    uMorphProgress: 0,
    uIntensity: 0.3,
    uFrequency: 1.0,
    uSpeed: 0.5,
    uColor: new THREE.Color('#00f2ff'),
  },
  // Vertex Shader
  `
  varying vec2 vUv;
  varying float vDistortion;
  uniform float uTime;
  uniform float uMorphProgress;
  uniform float uIntensity;
  uniform float uFrequency;
  uniform float uSpeed;

  void main() {
    vUv = uv;

    // Organic displacement using a combination of sines for a "liquid" feel
    float distortion = sin(position.x * uFrequency + uTime * uSpeed) *
                       cos(position.y * uFrequency + uTime * uSpeed) *
                       uIntensity;

    distortion += sin(position.z * 2.0 + uTime * uSpeed * 0.5) * 0.2 * uMorphProgress;

    vDistortion = distortion;

    vec3 newPosition = position + normal * distortion;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
  `,
  // Fragment Shader
  `
  varying vec2 vUv;
  varying float vDistortion;
  uniform vec3 uColor;
  uniform float uTime;

  void main() {
    float intensity = vDistortion * 0.5 + 0.5;
    vec3 color = mix(uColor, vec3(1.0), intensity * 0.3);

    // Add a subtle rim light (Fresnel effect)
    float rim = 1.0 - max(0.0, dot(vec3(0.0, 0.0, 1.0), vec3(0.0, 0.0, 1.0)));

    gl_FragColor = vec4(color + rim * 0.1, 0.8);
  }
  `
);

extend({ MorphMaterial });

export const MorphObject = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { scrollProgress } = useMotionDirector();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const material = meshRef.current.material as any;

    // 1. Determine current scene and interpolation factor
    let currentScene: SceneState = 'HERO';
    let t = 0;

    for (const [scene, config] of Object.entries(SCENE_CONFIG)) {
      if (scrollProgress >= config.startProgress && scrollProgress <= config.endProgress) {
        currentScene = scene as SceneState;
        const range = config.endProgress - config.startProgress;
        t = (scrollProgress - config.startProgress) / range;
        break;
      }
    }

    const currentConfig = SCENE_CONFIG[currentScene];
    const nextScene = (Object.keys(SCENE_CONFIG) as SceneState[])[
      Object.keys(SCENE_CONFIG).indexOf(currentScene) + 1
    ] || currentScene;
    const nextConfig = SCENE_CONFIG[nextScene];

    // 2. Interpolate morph parameters for cinematic transitions
    const targetIntensity = THREE.MathUtils.lerp(currentConfig.morphIntensity, nextConfig.morphIntensity, t);
    const targetFrequency = THREE.MathUtils.lerp(currentConfig.morphFrequency, nextConfig.morphFrequency, t);
    const targetSpeed = THREE.MathUtils.lerp(currentConfig.morphSpeed, nextConfig.morphSpeed, t);

    // 3. Apply with damping
    material.uTime = state.clock.getElapsedTime();
    material.uMorphProgress = scrollProgress;
    material.uIntensity = THREE.MathUtils.lerp(material.uIntensity, targetIntensity, 0.1);
    material.uFrequency = THREE.MathUtils.lerp(material.uFrequency, targetFrequency, 0.1);
    material.uSpeed = THREE.MathUtils.lerp(material.uSpeed, targetSpeed, 0.1);

    // Rotate slowly
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.z += 0.002;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 128, 128]} />
      <morphMaterial
        uColor={new THREE.Color('#00f2ff')}
        uIntensity={0.4}
        transparent
      />
    </mesh>
  );
};
