"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="py-24 md:py-32 flex flex-col justify-center min-h-[90vh] relative overflow-hidden">
      {/* Abstract structural grid element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          <div className="space-y-2">
            <h2 className="font-mono text-sm tracking-[0.3em] text-[var(--muted-foreground)] uppercase ml-1">
              {personal.role}
            </h2>
            <h1 className="text-[12vw] sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.9]">
              ARCHITECTING
              <br />
              <span className="text-outline">SCALABLE</span>
              <br />
              SYSTEMS.
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end pt-8 border-t border-[var(--border)]">
            <p className="text-xl md:text-2xl text-[var(--muted-foreground)] font-light max-w-lg leading-relaxed">
              {personal.valueStatement}
            </p>

            <div className="flex flex-wrap gap-4 md:justify-end">
              <Button asChild size="lg" className="gap-2">
                <Link href="/#projects" className="flex items-center gap-2 whitespace-nowrap">
                  View Work 
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 whitespace-nowrap">
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
