import { GithubIcon, LinkedinIcon, XIconBrand } from "@/components/icons";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-pink/10 py-10 mt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-foreground/50">
            © {new Date().getFullYear()}{" "}
            <span className="gradient-text font-semibold">
              {siteConfig.name}
            </span>
            . Crafted with Next.js & ☕
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-foreground/60 hover:text-pink transition-colors"
            >
              <GithubIcon width={18} height={18} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/60 hover:text-pink transition-colors"
            >
              <LinkedinIcon width={18} height={18} />
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-foreground/60 hover:text-pink transition-colors"
            >
              <XIconBrand width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
