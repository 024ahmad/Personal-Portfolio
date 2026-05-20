"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          subtitle="A glimpse into what I've been building lately."
        />

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featured.map((p, idx) => (
            <ProjectCard key={p.title} {...p} idx={idx} />
          ))}
        </div>

        {/* Others */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.live}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group glass glass-hover rounded-xl p-5 flex items-center justify-between"
            >
              <div className="flex-1 min-w-0">
                <h4 className="font-display font-semibold text-sm mb-1 group-hover:text-pink transition-colors">
                  {p.title}
                </h4>
                <p className="text-xs text-foreground/60 truncate">
                  {p.tags.join(" · ")}
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-foreground/40 group-hover:text-pink group-hover:rotate-45 transition-all flex-shrink-0 ml-3"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  live,
  code,
  idx,
}: {
  title: string;
  description: string;
  tags: string[];
  live: string;
  code: string;
  idx: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group glass rounded-2xl overflow-hidden flex flex-col hover:border-pink/50 transition-all"
    >
      {/* Cover */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-pink/20 via-pink/5 to-cyan/10">
        <div className="absolute inset-0 cyber-grid-dense opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-display text-5xl font-black text-pink/30 group-hover:text-pink/60 group-hover:scale-110 transition-all">
            {title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <a
            href={live}
            className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-pink hover:text-black transition-colors"
            aria-label="Live"
          >
            <ArrowUpRight size={16} />
          </a>
          <a
            href={code}
            className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-pink hover:text-black transition-colors"
            aria-label="Code"
          >
            <GithubIcon width={16} height={16} />
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-display font-bold text-lg mb-2 group-hover:text-pink transition-colors">
          {title}
        </h3>
        <p className="text-sm text-foreground/60 mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs rounded font-mono bg-pink/10 text-pink/80 border border-pink/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
