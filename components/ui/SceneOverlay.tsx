"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMotionDirector } from "@/motion/MotionDirector";
import { SCENE_CONFIG, SceneState } from "@/config/sceneConfig";

interface SceneOverlayProps {
  scene: SceneState;
  children: React.ReactNode;
  className?: string;
}

export const SceneOverlay = ({ scene, children, className = "" }: SceneOverlayProps) => {
  const { scrollProgress } = useMotionDirector();
  const config = SCENE_CONFIG[scene];

  // Calculate opacity based on progress range
  // We want it to be 1 when in the middle of the range, and fade out at edges
  const center = (config.startProgress + config.endProgress) / 2;
  const halfWidth = (config.endProgress - config.startProgress) / 2;

  // Temporarily force opacity to 1 for debugging to see if content is rendered
  const opacity = 1;

  return (
    <motion.div
      style={{ opacity }}
      className={`transition-opacity duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
};
