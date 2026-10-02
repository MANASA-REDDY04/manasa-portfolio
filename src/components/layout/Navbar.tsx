"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60">
      <div className="container mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-mono font-bold tracking-tighter">
          M<span className="text-[var(--accent)]">.</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/#projects" className="transition-colors hover:text-[var(--accent)]">
            Projects
          </Link>
          <Link href="/#experience" className="transition-colors hover:text-[var(--accent)]">
            Experience
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-[var(--accent)]">
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
