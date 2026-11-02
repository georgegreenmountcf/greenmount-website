"use client";

import { motion } from "framer-motion";

export default function Team() {
  return (
    <section id="team" className="bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-brand-dark mb-3">
            Our Team
          </h2>
          <div className="w-10 h-0.5 bg-brand-primary mx-auto mb-6" />
          <p className="font-dm text-brand-muted max-w-2xl mx-auto">
            Coming soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
