"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMotionDirector } from "@/motion/MotionDirector";

export const LoadingScreen = () => {
  const { isLoading, setLoading } = useMotionDirector();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 40);

    // Fail-safe: force loading to false after 5 seconds
    const failSafe = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(failSafe);
    };
  }, [setLoading]);

  useEffect(() => {
    if (progress === 100) {
      // Give it a moment to breathe at 100%
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, setLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[100] bg-spider-dark flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Ambient Animation */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-spider-accent/10 rounded-full blur-[120px] animate-pulse" />
          </div>

          {/* Logo / Brand Section */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                SPIDER <span className="text-spider-accent">TEAM</span>
              </h1>
              <div className="h-1 w-24 bg-spider-accent mx-auto mt-2 rounded-full" />
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative mx-auto">
              <motion.div
                className="absolute inset-y-0 left-0 bg-spider-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <motion.span
              className="block mt-4 text-xs font-mono uppercase tracking-[0.3em] text-gray-500"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Initializing Experience {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
