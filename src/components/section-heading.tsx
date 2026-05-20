"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink/30 bg-pink/5 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-pink animate-pulse" />
        <span className="font-mono text-xs uppercase tracking-widest text-pink">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-huge font-display font-bold mb-3">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-foreground/60 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
