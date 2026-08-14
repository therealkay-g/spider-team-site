"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { SceneOverlay } from "@/components/ui/SceneOverlay";
import { KineticText } from "@/components/ui/KineticText";
import { COMPANY_INFO } from "@/lib/content";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-transparent">
      <SceneOverlay scene="ABOUT">
        {/* Apple-style Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-spider-accent/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-spider-accent/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 1. The Big Statement - Ultra-Premium Typography */}
        <div className="text-center mb-40">
          <KineticText className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-12 leading-[1.1] block text-center">
            L'excellence technologique, <br />
            <span className="text-spider-accent">née au cœur du Congo.</span>
          </KineticText>
          <FadeIn className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-400 leading-relaxed font-light">
              Nous ne nous contentons pas de coder. Nous bâtissons l'infrastructure numérique de demain pour l'Afrique et le monde.
            </p>
          </FadeIn>
        </div>

        {/* 2. Storytelling Section - Editorial Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40 items-start">
          <div className="lg:col-span-7">
            <FadeIn>
              <GlassCard className="p-10 h-full border-l-4 border-spider-accent">
                <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-spider-accent mb-6 block">Notre Histoire</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {COMPANY_INFO.about.history}
                </p>
              </GlassCard>
            </FadeIn>
          </div>
          <div className="lg:col-span-5">
            <FadeIn delay={0.2}>
              <div className="glass p-10 rounded-[40px] border border-white/10 shadow-2xl relative overflow-hidden group transition-all duration-500 hover:border-spider-accent/30">
                <div className="absolute inset-0 bg-gradient-to-br from-spider-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h4 className="text-2xl font-bold text-white mb-6 relative z-10">L'ambition SPIDER TEAM</h4>
                <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                  Du Kivu vers le monde. Notre approche combine la rigueur technique internationale avec une compréhension profonde des besoins locaux.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* 3. Mission & Vision - Bold Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
          <FadeIn delay={0.1}>
            <div className="glass p-12 rounded-[50px] border border-white/10 hover:border-spider-accent/30 transition-all duration-500 group">
              <div className="w-16 h-16 bg-spider-accent rounded-full mb-8 flex items-center justify-center shadow-[0_0_30px_rgba(var(--spider-accent-rgb),0.6)]">
                <div className="w-4 h-4 bg-spider-black rounded-full animate-ping" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">Notre Mission</h3>
              <p className="text-gray-400 text-xl leading-relaxed">
                {COMPANY_INFO.about.mission}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="glass p-12 rounded-[50px] border border-white/10 hover:border-spider-accent/30 transition-all duration-500 group">
              <div className="w-16 h-16 bg-spider-accent rounded-full mb-8 flex items-center justify-center shadow-[0_0_30px_rgba(var(--spider-accent-rgb),0.6)]">
                <div className="w-4 h-4 bg-spider-black rounded-full animate-pulse" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">Notre Vision</h3>
              <p className="text-gray-400 text-xl leading-relaxed">
                {COMPANY_INFO.about.vision}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 4. Values Grid - Refined Typography */}
        <div className="text-center mb-20">
          <FadeIn>
            <h3 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Nos Valeurs Fondamentales</h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Le socle sur lequel nous bâtissons chaque projet, sans compromis sur la qualité.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_INFO.about.values.map((value, i) => (
            <FadeIn key={value.title} delay={i * 0.1}>
              <GlassCard className="h-full p-10 rounded-[30px] border border-white/5 hover:border-spider-accent/40 transition-all duration-500 group">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-spider-accent transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {value.description}
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
      </SceneOverlay>
    </section>
  );
};