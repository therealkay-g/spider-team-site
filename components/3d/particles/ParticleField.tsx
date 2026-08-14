"use client";

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMotionDirector } from '@/motion/MotionDirector';

export const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const { smoothMouse, scrollProgress, quality } = useMotionDirector();

  const particles = useMemo(() => {
    const count = quality === 'low' ? 1000 : quality === 'medium' ? 2000 : 3000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [quality]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      // 1. Gentle drifting motion
      positions[i] += Math.sin(time * 0.1 + y) * 0.002;
      positions[i + 1] += Math.cos(time * 0.1 + x) * 0.002;
      positions[i + 2] += Math.sin(time * 0.1 + z) * 0.002;

      // 2. Reaction to Mouse (Repulsion)
      const dx = x - smoothMouse.x * 5;
      const dy = y - smoothMouse.y * 5;
      const dz = z - smoothMouse.z || 0;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist < 2) {
        const force = (2 - dist) * 0.01;
        positions[i] += dx * force;
        positions[i + 1] += dy * force;
        positions[i + 2] += dz * force;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};
