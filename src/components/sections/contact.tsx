"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIconBrand } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/data";
import { sendMessage } from "@/app/actions";

export function Contact() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await sendMessage(formData);
      setStatus(result.ok ? "success" : "error");
      setTimeout(() => setStatus("idle"), 4000);
    });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's Build Something"
          subtitle="Have a project in mind? Drop a message — I usually reply within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass rounded-2xl p-6">
              <Mail size={22} className="text-pink mb-3" />
              <div className="font-display font-semibold mb-1">Email</div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-foreground/70 hover:text-pink transition-colors text-sm"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="glass rounded-2xl p-6">
              <MapPin size={22} className="text-pink mb-3" />
              <div className="font-display font-semibold mb-1">Location</div>
              <div className="text-foreground/70 text-sm">
                {siteConfig.location}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="font-display font-semibold mb-3">
                Find me online
              </div>
              <div className="flex gap-2">
                <SocialBtn
                  href={siteConfig.social.github}
                  icon={GithubIcon}
                  label="GitHub"
                />
                <SocialBtn
                  href={siteConfig.social.linkedin}
                  icon={LinkedinIcon}
                  label="LinkedIn"
                />
                <SocialBtn
                  href={siteConfig.social.twitter}
                  icon={XIconBrand}
                  label="X (Twitter)"
                />
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              action={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field name="name" label="Name" required />
                <Field name="email" type="email" label="Email" required />
              </div>
              <Field name="subject" label="Subject" />
              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-pink/80 mb-2 block">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-pink/5 border border-pink/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-pink focus:bg-pink/10 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gradient-pink text-black font-semibold glow-pink transition-all duration-300 hover:glow-pink-strong hover:-translate-y-0.5 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:opacity-50 disabled:hover:transform-none disabled:hover:glow-pink"
              >
                {isPending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
              {status === "success" && (
                <div className="text-sm text-pink text-center">
                  ✓ Message sent! I&apos;ll be in touch soon.
                </div>
              )}
              {status === "error" && (
                <div className="text-sm text-red-400 text-center">
                  Something went wrong. Try email instead.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-wider text-pink/80 mb-2 block">
        {label} {required && "*"}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-pink/5 border border-pink/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-pink focus:bg-pink/10 transition-all"
      />
    </div>
  );
}

function SocialBtn({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 rounded-lg bg-pink/5 border border-pink/20 flex items-center justify-center hover:bg-pink hover:text-black hover:border-pink transition-all"
    >
      <Icon width={18} height={18} />
    </a>
  );
}
