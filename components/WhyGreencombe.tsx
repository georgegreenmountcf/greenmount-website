"use client";

import { motion } from "framer-motion";
import { X, Minus, Check } from "lucide-react";

const columns = [
  {
    label: "Introducer Broker",
    highlight: false,
    points: [
      { text: "Introduces you to a buyer", icon: "check" },
      { text: "Steps back after the introduction", icon: "x" },
      { text: "Limited negotiation involvement", icon: "x" },
      { text: "No technical deal expertise", icon: "x" },
      { text: "No buy-side experience", icon: "x" },
      { text: "Upfront fees common", icon: "x" },
    ],
  },
  {
    label: "Traditional CF House",
    highlight: false,
    points: [
      { text: "Manages the sale process", icon: "check" },
      { text: "Sell-side experience only", icon: "minus" },
      { text: "Negotiates on your behalf", icon: "check" },
      { text: "May lack technical depth", icon: "minus" },
      { text: "No buy-side experience", icon: "x" },
      { text: "Upfront retainers typical", icon: "minus" },
    ],
  },
  {
    label: "Greencombe",
    highlight: true,
    points: [
      { text: "Full process from valuation to completion", icon: "check" },
      { text: "Buy-side and sell-side experience", icon: "check" },
      { text: "Tenacious, informed negotiation", icon: "check" },
      { text: "Chartered Accountants with technical depth", icon: "check" },
      { text: "50+ acquisitions as a buyer", icon: "check" },
      { text: "100% success-based fees", icon: "check" },
    ],
  },
];

function StatusIcon({ type }: { type: string }) {
  if (type === "check")
    return (
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center">
        <Check className="w-3 h-3 text-brand-primary" />
      </span>
    );
  if (type === "minus")
    return (
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
        <Minus className="w-3 h-3 text-amber-600" />
      </span>
    );
  return (
    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
      <X className="w-3 h-3 text-red-400" />
    </span>
  );
}

function HighlightIcon() {
  return (
    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/25 flex items-center justify-center">
      <Check className="w-3 h-3 text-white" />
    </span>
  );
}

export default function WhyGreencombe() {
  return (
    <section className="bg-brand-cream py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-brand-dark mb-3">
            Why Greencombe
          </h2>
          <div className="w-10 h-0.5 bg-brand-primary mx-auto mb-6" />
          <p className="font-dm text-brand-muted max-w-2xl mx-auto">
            Not all advisers are the same. Most have only ever sat on one side
            of the table. We&apos;ve sat on both.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {columns.map((col, i) => (
            <motion.div
              key={col.label}
              className={`rounded-xl p-8 ${
                col.highlight
                  ? "bg-brand-primary text-white shadow-xl ring-2 ring-brand-primary lg:scale-105"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <h3
                className={`font-dm font-bold text-lg mb-6 text-center ${
                  col.highlight ? "text-white" : "text-brand-dark"
                }`}
              >
                {col.label}
              </h3>

              <ul className="space-y-4">
                {col.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    {col.highlight ? (
                      <HighlightIcon />
                    ) : (
                      <StatusIcon type={point.icon} />
                    )}
                    <span
                      className={`font-dm text-sm leading-snug ${
                        col.highlight ? "text-white/90" : "text-brand-muted"
                      }`}
                    >
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
