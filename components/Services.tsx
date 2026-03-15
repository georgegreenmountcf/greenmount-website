"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Initial Discussion & Valuation",
    desc: "We begin with a confidential, no-obligation conversation to understand your business and objectives. We then prepare a detailed valuation so you can make informed decisions.",
  },
  {
    num: "02",
    title: "Selective Buyer Mapping",
    desc: "We identify and approach a carefully selected pool of strategic and financial buyers — no mass mailshots. Every approach is targeted, relevant, and protected by NDAs to maintain full confidentiality.",
  },
  {
    num: "03",
    title: "Negotiation & Value Creation",
    desc: "We manage competing offers, negotiate deal structure and terms, and create competitive tension to drive the best possible outcome for shareholders.",
  },
  {
    num: "04",
    title: "Due Diligence Management",
    desc: "We guide you through the diligence process, managing information flow, responding to buyer queries, and protecting value at every stage.",
  },
  {
    num: "05",
    title: "Completion & Transition",
    desc: "We support you through to legal completion and beyond, ensuring a smooth transition and alignment on any post-transaction arrangements.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-brand-dark mb-3">
            What We Do
          </h2>
          <div className="w-10 h-0.5 bg-brand-primary mx-auto mb-6" />
          <p className="font-dm text-brand-muted max-w-2xl mx-auto">
            From initial conversation through to completion, we manage every
            stage of the process to maximise value and protect your interests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              className="group border border-gray-100 rounded-lg p-6 hover:shadow-lg hover:border-t-2 hover:border-t-brand-primary transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-full border-2 border-brand-primary flex items-center justify-center mb-4">
                <span className="font-dm text-sm font-bold text-brand-primary">
                  {s.num}
                </span>
              </div>
              <h3 className="font-dm font-bold text-brand-dark text-base mb-2">
                {s.title}
              </h3>
              <p className="font-dm text-sm text-brand-muted leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
