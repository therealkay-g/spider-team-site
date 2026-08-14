"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SceneOverlay } from "@/components/ui/SceneOverlay";
import { KineticText } from "@/components/ui/KineticText";
import { SERVICES } from "@/lib/content";
import * as LucideIcons from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden bg-transparent">
      <SceneOverlay scene="SERVICES">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <KineticText className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 block text-center">
              Nos <span className="text-spider-accent">Expertises</span>
            </KineticText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              Nous fusionnons l'ingénierie de précision et le design intuitif pour créer des outils qui redéfinissent les standards de votre industrie.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {SERVICES.map((service, i) => {
              const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Cpu;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="h-full"
                >
                  <GlassCard className="h-full group relative overflow-hidden transition-all duration-500 border-white/5 hover:border-spider-accent/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-spider-accent/0 via-transparent to-spider-accent/0 group-hover:from-spider-accent/5 transition-all duration-500" />

                    {/* Service Image Header */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=Service+Image";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-spider-dark via-transparent to-transparent" />
                    </div>

                    <div className="relative z-10 p-6 -mt-12">
                      <div className="w-14 h-14 bg-spider-dark border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-spider-accent transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(var(--spider-accent-rgb),0.5)] relative z-20">
                        <Icon className="w-7 h-7 text-spider-accent group-hover:text-spider-black transition-colors" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-base font-light">
                        {service.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SceneOverlay>
    </section>
  );
};
