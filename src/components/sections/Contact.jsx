import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";
import MagButton from "../MagButton";
import { PROFILE } from "../../data";

/**
 * Contact form that opens the user's mail client.  User inputs are encoded
 * to prevent injection into the mailto URI.
 */
export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let’s build something great."
    >
      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          const name = fd.get("name");
          const email = fd.get("email");
          const message = fd.get("message");
          const subject = encodeURIComponent(`Portfolio contact from ${name}`);
          const body = encodeURIComponent(
            `${message}\n\nFrom: ${name} <${email}>`
          );
          window.location.href = `${PROFILE.links.email}?subject=${subject}&body=${body}`;
        }}
        className="grid grid-cols-1 gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 dark:border-white/10 dark:bg-white/5"
      >
        <div>
          <label
            htmlFor="name"
            className="text-sm text-slate-700 dark:text-slate-300"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:border-white/10 dark:bg-[#0b0d15] dark:text-white dark:placeholder:text-slate-500"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-sm text-slate-700 dark:text-slate-300"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:border-white/10 dark:bg-[#0b0d15] dark:text-white dark:placeholder:text-slate-500"
            placeholder="you@domain.com"
          />
        </div>
        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="text-sm text-slate-700 dark:text-slate-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:border-white/10 dark:bg-[#0b0d15] dark:text-white dark:placeholder:text-slate-500"
            placeholder="Tell me about your project, timelines, and goals."
          />
        </div>
        <div className="md:col-span-2 flex items-center justify-between gap-3">
          <a
            href={PROFILE.links.email}
            className="text-sm text-slate-700 underline underline-offset-4 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Or email me directly
          </a>
          <MagButton>Send Message</MagButton>
        </div>
      </motion.form>
    </Section>
  );
}
