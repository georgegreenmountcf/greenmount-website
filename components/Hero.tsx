"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(45,90,61,0.85) 0%, rgba(45,90,61,0.4) 50%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-dm text-sm uppercase tracking-[0.2em] text-white/80 mb-4">
              Experts in Selling Businesses
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Maximizing value for business owners
            </h1>
            <p className="font-dm text-lg text-white/90 mb-8 leading-relaxed">
              For many business owners, selling your business is a
              once-in-a-lifetime event. Greencombe Corporate Finance recognises
              that your lifetime&apos;s work should be fully valued. We have completed
              dozens of transactions both on the buy and sell side and therefore
              understand the value areas that others miss.
            </p>
            <a
              href="#contact"
              className="inline-block font-dm font-medium text-sm bg-white text-brand-primary px-8 py-3.5 rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
