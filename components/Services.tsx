"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Strategic Positioning",
    desc: "Refine the equity story, identify value drivers, and prepare materials that withstand scrutiny.",
  },
  {
    num: "02",
    title: "Buyer Universe Mapping",
    desc: "Identify and prioritise global strategic and financial buyers aligned with your growth profile.",
  },
  {
    num: "03",
    title: "Controlled Market Engagement",
    desc: "Launch a confidential, phased approach designed to create competitive tension.",
  },
  {
    num: "04",
    title: "Negotiation & Value Protection",
    desc: "Manage offers, structure terms, and defend valuation through diligence and negotiation.",
  },
  {
    num: "05",
    title: "Completion & Transition",
    desc: "Support through completion, future value creation and post-transaction alignment.",
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
            Greenmount advises founders and shareholders on strategic business
            sales. We run disciplined, competitive sell-side processes that
            maximise valuation.
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
