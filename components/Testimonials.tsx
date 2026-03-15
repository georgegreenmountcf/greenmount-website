"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Greencombe team delivered an exceptional result. Their process was meticulous and their negotiation skills were outstanding.",
    name: "Managing Director",
    role: "Technology Company",
  },
  {
    quote:
      "From start to finish, Greencombe provided expert guidance. They created genuine competitive tension and maximised our valuation.",
    name: "Founder & CEO",
    role: "Industrial Services Business",
  },
  {
    quote:
      "I sold a business through a broker years ago and thought I knew what to expect. Greencombe brought ideas around deal structure that had never even been considered, ultimately increasing my proceeds by hundreds of thousands of pounds. I wish I had found them sooner.",
    name: "Exiting Shareholder",
    role: "Professional Services Business",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="bg-brand-cream py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-brand-dark">
            Don&apos;t Take Our Word For It
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="text-center px-8 md:px-16"
            >
              <span className="font-playfair text-6xl text-brand-primary/30 leading-none block mb-4">
                &ldquo;
              </span>
              <p className="font-cormorant italic text-xl md:text-2xl text-brand-dark leading-relaxed mb-8">
                {testimonials[current].quote}
              </p>
              <p className="font-dm font-bold text-brand-dark">
                {testimonials[current].name}
              </p>
              <p className="font-dm text-sm text-brand-muted">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-brand-primary hover:text-brand-secondary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-brand-primary hover:text-brand-secondary transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-brand-primary w-6" : "bg-brand-primary/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
