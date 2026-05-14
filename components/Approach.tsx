"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Gavel, Target, Users, MessageCircle } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "No Obligation Free Valuation",
    desc: "Thinking about an exit but unsure what your business is worth? We prepare a detailed valuation for shareholders at no cost and with no obligation — giving you the clarity to make informed decisions about your future.",
  },
  {
    icon: Users,
    title: "Big 4 & Private Equity Experience",
    desc: "Our team combines Big 4 corporate finance experience, where we assisted dozens of business owners through successful exits, alongside a private equity buy-and-build model where we acquired businesses directly from owners. Hands-on experience across the complete deal lifecycle on both the buy side and the sell side.",
  },
  {
    icon: Shield,
    title: "Qualified Chartered Accountants",
    desc: "While working for private equity as a buyer of businesses, we came up against brokers all the time and first hand saw them leave millions of pounds worth of value behind. We have the technical expertise to ensure that we maximise the value of your business.",
  },
  {
    icon: Gavel,
    title: "50+ Acquisitions Completed",
    desc: "Proven private equity buy-and-build experience, having completed over 50 acquisitions. We understand what buyers scrutinise because we\u2019ve sat on that side of the table.",
  },
  {
    icon: TrendingUp,
    title: "Success-Based Fees",
    desc: "Many brokers charge thousands of pounds up front before any work begins. We are so confident in our service and outcomes that 100% of our fees are contingent on successful completion. We only succeed when you do.",
  },
  {
    icon: MessageCircle,
    title: "Straight Talking",
    desc: "Transparent on value, process and expectations. We simplify the technical details and present them in a clear, concise way. No jargon, no hidden agendas.",
  },
];

export default function Approach() {
  return (
    <section id="our-approach" className="bg-brand-primary py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-3">
            Our Approach
          </h2>
          <div className="w-10 h-0.5 bg-brand-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Icon className="w-8 h-8 text-brand-accent mb-4" />
                <h3 className="font-dm font-bold text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="font-dm text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
