"use client";

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { useMotionDirector } from '@/motion/MotionDirector';

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Synchronize Lenis scroll with MotionDirector
    lenis.on('scroll', (e) => {
      const progress = e.progress; // 0 to 1
      useMotionDirector.getState().setScrollProgress(progress);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
