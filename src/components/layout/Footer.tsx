import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 mt-16">
      <div className="container mx-auto max-w-5xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted-foreground)]">
          &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-[var(--muted-foreground)]">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-5 w-5" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={portfolioData.personal.leetcode}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--foreground)] transition-colors font-mono text-xs border border-current rounded px-1"
          >
            LC
          </a>
        </div>
      </div>
    </footer>
  );
}
