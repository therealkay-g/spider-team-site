"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { SceneOverlay } from "@/components/ui/SceneOverlay";
import { KineticText } from "@/components/ui/KineticText";
import { TEAM } from "@/lib/content";
import { Link, Send } from "lucide-react";

export const Team = () => {
  return (
    <section id="team" className="py-32 px-6 relative overflow-hidden bg-transparent">
      <SceneOverlay scene="TEAM">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-spider-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-spider-accent/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle
            title="L'Équipe"
            subtitle="Des esprits brillants unis par une passion pour l'excellence technologique."
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="relative group overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
              <img
                src="/assets/team/group.jpg"
                alt="Spider Team Group"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8 text-left">
                <h3 className="text-3xl font-bold text-white mb-2">Le Collectif SPIDER TEAM</h3>
                <p className="text-gray-300 text-lg font-light">L'union de la stratégie, du design et du code.</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="text-center group overflow-hidden border-white/5 hover:border-spider-accent/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative w-32 h-32 mx-auto mb-8">
                    <div className="absolute inset-0 bg-spider-accent rounded-full animate-pulse-slow opacity-20 group-hover:opacity-40 transition-opacity blur-md" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-white/10 group-hover:border-spider-accent"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/150";
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-spider-accent text-xs mb-6 font-mono uppercase tracking-widest">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed px-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-5">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="text-gray-500 hover:text-white transition-colors">
                        <Link className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} className="text-gray-500 hover:text-white transition-colors">
                        <Send className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SceneOverlay>
    </section>
  );
};
