"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bot, Code2, Zap, Globe } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/data";

const highlights = [
  {
    icon: Bot,
    title: "Agentic AI",
    desc: "LLM orchestration, tool-use, multi-agent systems",
  },
  {
    icon: Code2,
    title: "Fullstack",
    desc: "Next.js + FastAPI, end-to-end production apps",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Fast, optimized, accessible — no compromises",
  },
  {
    icon: Globe,
    title: "Remote",
    desc: "Working with teams worldwide, async-first",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="Who I Am"
          subtitle="A builder obsessed with shipping AI products that work in the real world."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl glass overflow-hidden relative group max-w-md mx-auto">
              <Image
                src="/avatar.jpg"
                alt={siteConfig.name}
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: "center 15%" }}
              />
              <div className="absolute inset-0 cyber-grid-dense opacity-20 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-pink/15 via-transparent to-cyan/10 pointer-events-none" />
              {/* Corner brackets */}
              <Corner className="top-3 left-3" rotate="0" />
              <Corner className="top-3 right-3" rotate="90" />
              <Corner className="bottom-3 right-3" rotate="180" />
              <Corner className="bottom-3 left-3" rotate="270" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-3xl font-display font-bold mb-4">
              Building the <span className="gradient-text">future</span> of AI,
              one agent at a time.
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-6">
              {siteConfig.bio}
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              I love the intersection where polished UX meets serious AI
              engineering. If you have a hard problem, I want to hear it.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="glass glass-hover rounded-xl p-4"
                >
                  <h.icon size={22} className="text-pink mb-2" />
                  <div className="font-display font-semibold text-sm mb-1">
                    {h.title}
                  </div>
                  <div className="text-xs text-foreground/60">{h.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Corner({ className, rotate }: { className: string; rotate: string }) {
  return (
    <div
      className={`absolute w-6 h-6 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-pink" />
      <div className="absolute top-0 left-0 w-px h-full bg-pink" />
    </div>
  );
}
