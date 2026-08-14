"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SceneOverlay } from "@/components/ui/SceneOverlay";
import { KineticText } from "@/components/ui/KineticText";
import { PROJECTS, COMPANY_INFO } from "@/lib/content";
import { X, ArrowUpRight } from "lucide-react";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden bg-transparent">
      <SceneOverlay scene="PROJECTS">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-spider-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-spider-accent/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <KineticText className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 block text-center">
              Nos <span className="text-spider-accent">Réalisations</span>
            </KineticText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              Une sélection de nos projets les plus ambitieux, où la technique rencontre l'impact.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative"
              >
                <div
                  className="relative overflow-hidden rounded-[40px] bg-spider-black border border-white/10 cursor-pointer transition-all duration-500 group-hover:border-spider-accent/40 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=Project+Image";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-spider-black via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <span className="text-spider-accent text-[10px] font-mono uppercase tracking-[0.2em] mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-spider-accent transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-spider-accent group-hover:text-spider-black transition-all duration-500">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                    <p className="text-gray-400 mb-8 line-clamp-2 font-light text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SceneOverlay>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl glass rounded-[40px] overflow-hidden border border-white/20 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10 p-2 rounded-full hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-video w-full overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-spider-accent text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-spider-accent/10 border border-spider-accent/20">
                    {selectedProject.category}
                  </span>
                  <span className="text-gray-500 text-sm font-medium">{selectedProject.year}</span>
                </div>

                <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">{selectedProject.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
                  {selectedProject.description}
                </p>

                <div className="mb-10">
                  <h4 className="text-white font-bold mb-6 flex items-center gap-3 text-sm uppercase tracking-widest opacity-60">
                    <span className="w-1.5 h-1.5 bg-spider-accent rounded-full" />
                    Stack Technologique
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="text-xs px-4 py-2 rounded-xl bg-white/5 text-gray-300 border border-white/10 hover:border-spider-accent/30 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="primary"
                  className="w-full py-5 text-lg font-bold rounded-2xl shadow-[0_0_30px_rgba(var(--spider-accent-rgb),0.3)]"
                  onClick={() => {
                    const message = `Bonjour SPIDER TEAM, je souhaiterais obtenir une démonstration du projet: ${selectedProject.title}`;
                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;

                    window.open(whatsappUrl, "_blank");
                    setSelectedProject(null);
                  }}
                >
                  Demander une démonstration
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
