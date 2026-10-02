import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin } from "@/components/icons";

export function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--border)] bg-black">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-sm tracking-widest text-[#666666] uppercase">
          &copy; {new Date().getFullYear()} {portfolioData.personal.name}.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-[#666666] hover:text-white transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[#666666] hover:text-white transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={portfolioData.personal.leetcode}
            target="_blank"
            rel="noreferrer"
            className="text-[#666666] hover:text-white transition-colors font-mono font-bold border border-current rounded px-2 py-0.5 text-xs"
          >
            LC
          </a>
        </div>
      </div>
    </footer>
  );
}
