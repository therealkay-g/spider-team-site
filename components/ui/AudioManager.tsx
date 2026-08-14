"use client";

import React, { useEffect, useRef } from "react";
import { useMotionDirector } from "@/motion/MotionDirector";

export const AudioManager = () => {
  const { isMuted, scrollProgress } = useMotionDirector();
  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const transitionRef = useRef<HTMLAudioElement | null>(null);
  const lastThreshold = useRef<number | null>(null);

  useEffect(() => {
    // In a real production app, these would be high-quality seamless loops
    ambientRef.current = new Audio("/assets/audio/ambient-loop.mp3");
    ambientRef.current.loop = true;
    ambientRef.current.volume = 0.3;

    transitionRef.current = new Audio("/assets/audio/transition-whoosh.mp3");

    // Start playing only after user interaction or if not muted
    if (!isMuted) {
      ambientRef.current.play().catch(() => console.log("Audio playback blocked by browser"));
    }

    return () => {
      ambientRef.current?.pause();
      transitionRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (ambientRef.current) {
      if (isMuted) {
        ambientRef.current.pause();
      } else {
        ambientRef.current.play().catch(() => {});
      }
    }
  }, [isMuted]);

  // Play a "whoosh" sound when crossing certain scroll thresholds
  useEffect(() => {
    const thresholds = [0.15, 0.30, 0.45, 0.60, 0.75, 0.90];

    thresholds.forEach(t => {
      if (Math.abs(scrollProgress - t) < 0.005 && lastThreshold.current !== t) {
        if (!isMuted && transitionRef.current) {
          transitionRef.current.currentTime = 0;
          transitionRef.current.play().catch(() => {});
        }
        lastThreshold.current = t;
      }
    });
  }, [scrollProgress, isMuted]);

  return null; // Invisible manager
};
