"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 cyber-grid opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills & Tools"
          subtitle="The arsenal I use to ship production-grade AI and web apps."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-2 h-2 rounded-full bg-pink animate-pulse" />
                <h3 className="font-display font-bold text-lg uppercase tracking-wider">
                  <span className="gradient-text">{cat.category}</span>
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-lg bg-pink/5 border border-pink/20 text-foreground/80 hover:bg-pink/15 hover:border-pink/50 hover:text-pink transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
