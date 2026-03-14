"use client";

import { motion } from "framer-motion";
import { BarChart3, Users, Clock, Target } from "lucide-react";

const bullets = [
  { icon: BarChart3, text: "Indicative valuation range" },
  { icon: Users, text: "Buyer appetite in your sector" },
  { icon: Clock, text: "Timing considerations" },
  { icon: Target, text: "Preparation strategy" },
];

export default function ExitCTA() {
  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-primary/80" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">
          Considering an Exit?
        </h2>
        <p className="font-dm text-white/80 text-lg mb-10">
          The strongest outcomes are planned. Schedule a confidential discussion
          to understand your options.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {bullets.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-2">
                <Icon className="w-6 h-6 text-brand-accent" />
                <span className="font-dm text-sm text-white/90">{b.text}</span>
              </div>
            );
          })}
        </div>

        <a
          href="#contact"
          className="inline-block font-dm font-medium text-sm bg-white text-brand-primary px-8 py-3.5 rounded-full hover:bg-brand-primary hover:text-white hover:ring-2 hover:ring-white transition-all duration-300"
        >
          Start a Conversation
        </a>
      </motion.div>
    </section>
  );
}
