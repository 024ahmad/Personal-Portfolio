"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { siteConfig, stats } from "@/lib/data";
import { Typewriter, TypewriterSequence } from "@/components/typewriter";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 cyber-grid" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pink/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink/40 bg-pink/5 mb-6"
            >
              <Sparkles size={14} className="text-pink" />
              <span className="font-mono text-xs uppercase tracking-widest text-pink">
                Available for new projectsss
              </span>
            </motion.div>

            <h1 className="text-mega font-display font-black mb-6 min-h-[2.4em]">
              <TypewriterSequence
                startDelay={400}
                gap={300}
                speed={70}
                lines={[
                  {
                    text: "Hi, I'm",
                    className: "block text-foreground",
                  },
                  {
                    text: siteConfig.name,
                    className:
                      "block gradient-text text-glow cursor-default",
                    speed: 110,
                  },
                ]}
              />
            </h1>

            <h2 className="text-xl sm:text-2xl text-foreground/80 mb-4 font-display min-h-[1.6em]">
              <Typewriter
                text={siteConfig.role}
                delay={2400}
                speed={35}
                showCursor={false}
              />
            </h2>

            <p className="text-foreground/60 text-lg max-w-xl mx-auto lg:mx-0 mb-8 min-h-[3em]">
              <Typewriter
                text={siteConfig.tagline}
                delay={4200}
                speed={20}
                showCursor={false}
              />
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-pink text-black font-semibold glow-pink transition-all duration-300 hover:glow-pink-strong hover:-translate-y-0.5 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-pink/40 bg-pink/5 text-pink font-semibold transition-all duration-300 hover:bg-pink/15 hover:border-pink hover:-translate-y-0.5 hover:scale-[1.03] hover:glow-pink focus:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95"
              >
                <Download size={18} />
                Get in Touch
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto">
              {/* Glow ring */}
              <div className="absolute -inset-2 rounded-3xl border-2 border-pink/30 pulse-glow" />
              <div
                className="absolute -inset-4 rounded-3xl border border-pink/15"
                style={{ animation: "spin 30s linear infinite" }}
              />
              {/* Avatar */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden glass">
                <Image
                  src="/avatar.jpg"
                  alt={siteConfig.name}
                  fill
                  sizes="(max-width: 1024px) 80vw, 400px"
                  className="object-cover"
                  style={{ objectPosition: "center 15%" }}
                  priority
                />
                <div className="absolute inset-0 cyber-grid-dense opacity-20 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-pink/10 via-transparent to-cyan/10 pointer-events-none" />
              </div>
              {/* Floating tags */}
              <FloatingTag
                text="Next.js"
                className="top-2 right-0"
                delay={0}
              />
              <FloatingTag
                text="FastAPI"
                className="top-1/2 -right-4"
                delay={0.5}
              />
              <FloatingTag
                text="LangGraph"
                className="bottom-4 right-4"
                delay={1}
              />
              <FloatingTag
                text="Claude"
                className="bottom-0 left-1/4"
                delay={1.5}
              />
              <FloatingTag
                text="RAG"
                className="top-1/3 -left-4"
                delay={2}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass glass-hover rounded-xl p-4 text-center"
            >
              <div className="font-display text-3xl font-bold gradient-text">
                {s.value}
              </div>
              <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FloatingTag({
  text,
  className,
  delay,
}: {
  text: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute glass rounded-lg px-3 py-1.5 text-xs font-mono text-pink ${className}`}
    >
      {text}
    </motion.div>
  );
}
