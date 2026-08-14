"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/content";
import * as Lucide from "lucide-react";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  linkedin: Lucide.Link,
  twitter: Lucide.Send,
  instagram: Lucide.Camera,
  github: Lucide.GitFork,
};

const FOOTER_LINKS = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projets", href: "/projects" },
  { name: "Équipe", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-spider-dark border-t border-white/5 pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-spider-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-black text-white tracking-tighter mb-6">
              {COMPANY_INFO.name}<span className="text-spider-accent">.</span>
            </h2>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-10 text-lg font-light">
              {COMPANY_INFO.description}
            </p>
            <div className="flex gap-5">
              {Object.entries(COMPANY_INFO.contact.socials).map(([platform, url]) => {
                const Icon = SOCIAL_ICONS[platform] || Lucide.GitFork;
                return (
                  <a
                    key={platform}
                    href={url}
                    className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:border-spider-accent/50 transition-all duration-300 hover:-translate-y-1"
                    aria-label={platform}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest opacity-60">Navigation</h4>
              <ul className="space-y-5">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-spider-accent transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden sm:block">
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest opacity-60">Légal</h4>
              <ul className="space-y-5">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-spider-accent transition-colors text-sm font-medium">
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-spider-accent transition-colors text-sm font-medium">
                    Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest opacity-60">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">
              Rejoignez notre cercle d'innovation et recevez nos dernières mises à jour.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-spider-accent/50 transition-all duration-300 pl-6 pr-24"
              />
              <Button
                variant="primary"
                className="absolute right-2 top-2 bottom-2 px-4 text-xs rounded-xl"
              >
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs font-medium tracking-wide">
          <p>© 2026 {COMPANY_INFO.name}. Conçu pour l'excellence.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Disponible pour nouveaux projets
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
