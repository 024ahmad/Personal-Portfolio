"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Sparkles, Layout } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { services, experience } from "@/lib/data";

const iconMap = { Bot, Code2, Sparkles, Layout };

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What I Do"
          title="Services & Experience"
          subtitle="From idea to production — agentic systems, web apps, and everything in between."
        />

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-20">
          {services.map((s, idx) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group glass glass-hover rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-pink/10 rounded-full blur-2xl group-hover:bg-pink/20 transition-colors" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-pink/10 border border-pink/30 flex items-center justify-center mb-4 group-hover:glow-pink transition-all">
                    <Icon size={22} className="text-pink" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-foreground/60">{s.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Experience timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-center mb-10">
            <span className="gradient-text">Experience</span>
          </h3>
          <div className="relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-pink via-pink/40 to-transparent" />
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <motion.div
                  key={exp.role + idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-background border-2 border-pink flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-pink animate-pulse" />
                  </div>
                  <div className="glass rounded-xl p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h4 className="font-display font-bold text-lg">
                        {exp.role}
                      </h4>
                      <span className="font-mono text-xs text-pink">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-sm text-pink/70 mb-2">
                      {exp.company}
                    </div>
                    <p className="text-sm text-foreground/60">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
