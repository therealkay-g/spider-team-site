"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const Vision = () => {
  return (
    <section id="vision" className="py-40 px-6 relative overflow-hidden bg-spider-dark">
      {/* Ultra-Premium Ambient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-spider-accent/10 rounded-full blur-[160px] opacity-50" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-10 leading-none"
        >
          Façonner le <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-spider-accent to-cyan-400">
            Futur.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-400 text-2xl md:text-3xl mb-16 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Nous ne nous contentons pas de suivre le progrès, nous le définissons. Chaque solution que nous bâtissons est un pilier vers une Afrique numérique, intelligente et souveraine.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button variant="primary" className="text-lg px-12 py-5 rounded-full shadow-[0_0_40px_rgba(var(--spider-accent-rgb),0.4)] hover:shadow-[0_0_60px_rgba(var(--spider-accent-rgb),0.6)] transition-all duration-500">
            Rejoindre l'aventure
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
