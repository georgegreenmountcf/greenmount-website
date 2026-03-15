"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xvzwbwbe", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

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
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle className="w-12 h-12 text-brand-primary mb-4" />
                <h3 className="font-playfair text-2xl text-brand-dark mb-2">
                  Thank You
                </h3>
                <p className="font-dm text-brand-muted">
                  We&apos;ve received your message and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-dm text-sm font-medium text-brand-dark mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
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
                    name="email"
                    type="email"
                    required
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
                    name="phone"
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
                    name="message"
                    rows={4}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 font-dm text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition resize-none"
                    placeholder="Tell us about your business..."
                  />
                </div>

                {error && (
                  <p className="font-dm text-sm text-red-600">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-brand-primary text-white font-dm font-medium text-sm py-3.5 rounded-lg hover:bg-brand-secondary transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
