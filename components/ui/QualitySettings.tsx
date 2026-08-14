"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMotionDirector } from "@/motion/MotionDirector";
import { Settings, X, Volume2 } from "lucide-react";

export const QualitySettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { quality, setQuality } = useMotionDirector();

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:border-spider-accent transition-all duration-300 hover:scale-110 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />

            {/* Settings Panel */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              className="fixed bottom-24 right-8 z-[70] w-80 glass rounded-[32px] border border-white/10 p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-white tracking-tight">Paramètres</h3>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4 block">Qualité Graphique</label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['low', 'medium', 'high'] as const).map((q) => (
                      <button
                        key={q}
                        onClick={() => setQuality(q)}
                        className={`py-3 rounded-2xl text-xs font-bold transition-all duration-300 border ${
                          quality === q
                            ? "bg-spider-accent text-spider-black border-spider-accent shadow-[0_0_20px_rgba(var(--spider-accent-rgb),0.4)]"
                            : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30"
                        }`}
                      >
                        {q === 'low' ? 'Eco' : q === 'medium' ? 'Standard' : 'Ultra'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-300 font-medium">Audio Ambiant</span>
                    </div>
                    <button className="w-12 h-6 rounded-full bg-white/10 relative transition-colors hover:bg-white/20">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-spider-accent rounded-full shadow-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
