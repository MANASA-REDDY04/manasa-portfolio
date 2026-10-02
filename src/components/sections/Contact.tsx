"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import { Github, Linkedin } from "@/components/icons";
import meImg from "@/lib/me.jpg";

export function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-32 bg-[var(--surface)] border-t border-[var(--border)]">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
                LET&apos;S<br />TALK.
              </h2>
              <p className="text-2xl text-[#888888] font-light max-w-md">
                Always open to discussing high-impact backend engineering or product design roles.
              </p>
            </div>
            
            <div className="space-y-6 font-mono text-lg">
              <a href={`mailto:${personal.email}`} className="block hover:text-white transition-colors text-[var(--accent)]">
                {personal.email}
              </a>
              <a href={`tel:${personal.phone}`} className="block hover:text-white transition-colors text-[#888888]">
                {personal.phone}
              </a>
            </div>

            <div className="pt-4 flex gap-6">
              <a href={personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#666666] hover:text-white transition-colors group">
                <Github className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-sm uppercase tracking-widest hidden md:inline-block">GitHub</span>
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#666666] hover:text-[var(--accent)] transition-colors group">
                <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-sm uppercase tracking-widest hidden md:inline-block">LinkedIn</span>
              </a>
              <a href={personal.leetcode} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#666666] hover:text-[#FFA116] transition-colors group">
                <div className="w-8 h-8 flex items-center justify-center border-2 border-current rounded font-mono font-bold text-xs group-hover:scale-110 transition-transform">
                  LC
                </div>
                <span className="font-mono text-sm uppercase tracking-widest hidden md:inline-block">LeetCode</span>
              </a>
            </div>
          </div>

          <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto group">
            <div className="absolute inset-0 bg-[var(--accent)] opacity-20 group-hover:opacity-0 transition-opacity duration-700 mix-blend-overlay z-10 rounded-2xl"></div>
            <div className="absolute -inset-4 bg-white/5 blur-2xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <Image 
              src={meImg} 
              alt={personal.name} 
              fill
              className="object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 border border-[var(--border)]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
