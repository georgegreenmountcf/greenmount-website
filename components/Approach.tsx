"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Gavel, Target, Users, MessageCircle } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Big 4 Trained Dealmakers",
    desc: "Our team brings Big 4 corporate finance pedigree with hands-on experience across both buy-side and sell-side M&A transactions.",
  },
  {
    icon: Target,
    title: "The £1\u201310m Sweet Spot",
    desc: "Between £1m and £10m enterprise value, M&A boutiques won\u2019t engage and generalist brokers lack the expertise. We bridge that gap with institutional-quality advice at this underserved end of the market.",
  },
  {
    icon: Shield,
    title: "Qualified Accountants, Not Brokers",
    desc: "Unlike generalist business brokers, we are qualified chartered accountants. That technical rigour protects value through due diligence and prevents hundreds of thousands being left on the table.",
  },
  {
    icon: Gavel,
    title: "50+ Acquisitions Completed",
    desc: "Proven private equity buy-and-build experience, having completed over 50 acquisitions. We understand what buyers scrutinise because we\u2019ve sat on that side of the table.",
  },
  {
    icon: TrendingUp,
    title: "Success-Based Fees",
    desc: "Our fees are fully contingent on a successful outcome. We only succeed when you do.",
  },
  {
    icon: MessageCircle,
    title: "Straight Talking",
    desc: "Transparent on value, process and expectations. No jargon, no hidden agendas.",
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
