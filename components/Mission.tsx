"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="bg-brand-cream py-24 px-6 lg:px-8">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        {/* Decorative line */}
        <div className="w-12 h-0.5 bg-brand-primary mx-auto mb-8" />

        <p className="font-cormorant italic text-2xl md:text-3xl text-brand-primary leading-relaxed">
          &ldquo;We are dedicated to creating additional value for business
          owners. Having sat on both sides of the table as buyers and sellers,
          our tenacious dealmaking approach, proven track record, and expert
          negotiation skills combine to deliver exceptional outcomes.&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
