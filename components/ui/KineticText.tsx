"use client";

import React from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useMotionDirector } from "@/motion/MotionDirector";

interface KineticTextProps {
  children: React.ReactNode;
  className?: string;
  baseScale?: number;
  intensity?: number;
}

export const KineticText = ({ children, className = "", baseScale = 1, intensity = 0.1 }: KineticTextProps) => {
  const { scrollProgress } = useMotionDirector();

  // Use a motion value to track scroll progress for smooth transforms
  const scrollX = useMotionValue(0);

  // Sync Zustand store with motion value
  React.useEffect(() => {
    scrollX.set(scrollProgress);
  }, [scrollProgress, scrollX]);

  // Transform scroll progress into cinematic effects
  // 1. Subtle scale shift
  const scale = useTransform(scrollX, [0, 1], [baseScale, baseScale * 1.1]);

  // 2. Slight skew based on scroll progress to create "stretching" effect
  const skewX = useTransform(scrollX, [0, 1], [-intensity * 10, intensity * 10]);

  // 3. Y offset for a floating effect
  const yOffset = useTransform(scrollX, [0, 1], [0, -20]);

  // Use a spring for organic, fluid motion
  const springScale = useSpring(scale, { stiffness: 100, damping: 20 });
  const springSkew = useSpring(skewX, { stiffness: 100, damping: 20 });
  const springY = useSpring(yOffset, { stiffness: 100, damping: 20 });

  return (
    <motion.span
      style={{
        scale: springScale,
        skewX: springSkew,
        y: springY,
        display: 'inline-block'
      }}
      className={className}
    >
      {children}
    </motion.span>
  );
};
