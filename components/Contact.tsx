"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl text-brand-dark mb-6">
              Get in Touch
            </h2>
            <p className="font-dm text-brand-muted mb-8 leading-relaxed">
              To arrange a confidential discussion about your business, please
              contact us.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:info@greencombecf.co.uk"
                className="flex items-center gap-3 font-dm text-brand-dark hover:text-brand-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-brand-primary" />
                info@greencombecf.co.uk
              </a>

            </div>
          </motion.div>

          {/* Right column — Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form action="#" className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-dm text-sm font-medium text-brand-dark mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 font-dm text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-dm text-sm font-medium text-brand-dark mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 font-dm text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block font-dm text-sm font-medium text-brand-dark mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 font-dm text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition"
                  placeholder="+44 ..."
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-dm text-sm font-medium text-brand-dark mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 font-dm text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition resize-none"
                  placeholder="Tell us about your business..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-primary text-white font-dm font-medium text-sm py-3.5 rounded-lg hover:bg-brand-secondary transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
