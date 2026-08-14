"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMotionDirector } from "@/motion/MotionDirector";
import { SCENE_CONFIG, SceneState } from "@/config/sceneConfig";

const ROUTE_TO_SCENE: Record<string, SceneState> = {
  "/": "HERO",
  "/about": "ABOUT",
  "/services": "SERVICES",
  "/projects": "PROJECTS",
  "/team": "TEAM",
  "/contact": "CONTACT",
};

export const RouteScrollSync = () => {
  const pathname = usePathname();
  const { setScrollProgress } = useMotionDirector();

  useEffect(() => {
    const scene = ROUTE_TO_SCENE[pathname];
    if (scene) {
      const config = SCENE_CONFIG[scene];
      const center = (config.startProgress + config.endProgress) / 2;
      setScrollProgress(center);
    }
  }, [pathname, setScrollProgress]);

  return null; // Invisible sync component
};
