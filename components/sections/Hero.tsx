"use client";

import React from "react";
import { motion } from "framer-motion";
import { SceneOverlay } from "@/components/ui/SceneOverlay";
import { KineticText } from "@/components/ui/KineticText";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { COMPANY_INFO } from "@/lib/content";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
      <SceneOverlay scene="HERO" className="relative z-10 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-spider-accent font-mono text-xs tracking-[0.4em] uppercase mb-6 block"
          >
            Bienvenue chez {COMPANY_INFO.name}
          </motion.span>
          <KineticText className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.9] block">
            {COMPANY_INFO.tagline.split(". ").map((text, i) => (
              <span key={i} className="block">
                {text}
                {i < 2 && <span className="text-spider-accent">.</span>}
              </span>
            ))}
          </KineticText>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            {COMPANY_INFO.description}
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton>
              <Button variant="primary" className="text-lg px-10 py-5 rounded-full shadow-[0_0_30px_rgba(var(--spider-accent-rgb),0.3)]">
                Découvrir l'agence
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="secondary" className="text-lg px-10 py-5 rounded-full border-white/10 hover:border-spider-accent/50 transition-all duration-500">
                Nos services
              </Button>
            </MagneticButton>
          </div>
        </motion.div>
      </SceneOverlay>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-spider-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};
