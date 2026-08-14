"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { SceneOverlay } from "@/components/ui/SceneOverlay";
import { KineticText } from "@/components/ui/KineticText";
import { COMPANY_INFO } from "@/lib/content";
import * as Lucide from "lucide-react";
import emailjs from "@emailjs/browser";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  linkedin: Lucide.Link,
  twitter: Lucide.Send,
  instagram: Lucide.Camera,
  github: Lucide.GitFork,
};

export const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent, method: "whatsapp" | "email") => {
    e.preventDefault();

    if (method === "whatsapp") {
      const body = `Bonjour SPIDER TEAM,\n\n*Nom:* ${formState.name}\n*Email:* ${formState.email}\n*Sujet:* ${formState.subject}\n*Message:* ${formState.message}`;
      const encodedMessage = encodeURIComponent(body);
      const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
      setIsSubmitted(true);
    } else {
      setIsSending(true);
      try {
        // EMAILJS INTEGRATION
        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_428g2hw";
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ogon4po";
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "4OipWw-3Cd-IDCS6s";

        const templateParams = {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
          to_email: COMPANY_INFO.contact.email,
        };

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        setIsSubmitted(true);
      } catch (error) {
        console.error("EmailJS Error:", error);
        alert("Une erreur est survenue lors de l'envoi de l'email. Veuillez essayer via WhatsApp.");
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-transparent">
      <SceneOverlay scene="CONTACT">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-spider-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-spider-accent/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle
            title="Contactez-Nous"
            subtitle="Prêt à lancer votre prochain projet ? Parlons-en."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-20">
            {/* Left Column: Contact Info & Socials */}
            <div className="lg:col-span-5 space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    label: "Email",
                    value: COMPANY_INFO.contact.email,
                    icon: Lucide.Mail,
                    isLink: true,
                    href: `mailto:${COMPANY_INFO.contact.email}`
                  },
                  { label: "Téléphone", value: COMPANY_INFO.contact.phone, icon: Lucide.Phone },
                  {
                    label: "WhatsApp",
                    value: COMPANY_INFO.contact.whatsapp,
                    icon: Lucide.MessageSquare,
                    isLink: true,
                    href: `https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, "")}`
                  },
                  { label: "Adresse", value: COMPANY_INFO.contact.address, icon: Lucide.MapPin },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass p-6 rounded-3xl flex items-start gap-4 border border-white/5 hover:border-spider-accent/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-spider-accent group-hover:bg-spider-accent group-hover:text-spider-black transition-all duration-500">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.label}</h4>
                      {item.isLink ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-spider-accent transition-colors break-all">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-sm break-all">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass p-8 rounded-[40px] border-l-4 border-spider-accent relative overflow-hidden"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Suivez l'innovation</h3>
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
              </motion.div>
            </div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <GlassCard className="p-10 h-full border-white/10">
                {!isSubmitted ? (
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs uppercase tracking-widest text-gray-500 ml-1 font-bold">Nom Complet</label>
                        <input
                          required
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-spider-accent transition-all duration-300 placeholder:text-gray-600"
                          placeholder="Jean Dupont"
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs uppercase tracking-widest text-gray-500 ml-1 font-bold">Email Professionnel</label>
                        <input
                          required
                          type="email"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 sm:px-6 text-white focus:outline-none focus:border-spider-accent transition-all duration-300 placeholder:text-gray-600"
                          placeholder="jean@entreprise.com"
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-gray-500 ml-1 font-bold">Sujet</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-spider-accent transition-all duration-300 placeholder:text-gray-600"
                        placeholder="Quel est votre projet ?"
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-gray-500 ml-1 font-bold">Message</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-spider-accent transition-all duration-300 resize-none placeholder:text-gray-600"
                        placeholder="Décrivez-nous vos ambitions..."
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Button
                        type="button"
                        variant="primary"
                        className="w-full py-5 text-lg font-bold rounded-2xl shadow-[0_0_30px_rgba(var(--spider-accent-rgb),0.3)]"
                        onClick={(e) => handleSubmit(e, "whatsapp")}
                      >
                        Envoyer via WhatsApp
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        className="w-full py-5 text-lg font-bold rounded-2xl border-white/10 hover:border-spider-accent/50 transition-all duration-500 disabled:opacity-50"
                        onClick={(e) => handleSubmit(e, "email")}
                        disabled={isSending}
                      >
                        {isSending ? "Envoi en cours..." : "Envoyer par Email"}
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-spider-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 text-spider-accent animate-bounce">
                      <Lucide.Mail className="w-10 h-10" />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">Message Envoyé !</h3>
                    <p className="text-gray-400 text-xl font-light max-w-md mx-auto">
                      Votre demande a été transmise. Notre équipe vous contactera très rapidement.
                    </p>
                    <Button variant="secondary" className="mt-12 px-10 py-4 rounded-2xl" onClick={() => setIsSubmitted(false)}>
                      Envoyer un autre message
                    </Button>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </SceneOverlay>
    </section>
  );
};
