"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const renderHighlightedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter sticky top-24">
              EXPERIENCE
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col">
            {experience.map((group, groupIndex) => (
              <article
                key={groupIndex}
                className="border-t border-[var(--border)] py-12 first:border-t-0 first:pt-0"
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-black tracking-tighter text-white uppercase">
                    {group.company}
                  </h3>
                </div>
                
                <div className="space-y-16">
                  {group.roles.map((role, roleIndex) => (
                    <motion.div
                      key={roleIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: roleIndex * 0.1 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-6 group/role relative"
                    >
                      {/* Timeline Line for nested roles */}
                      {group.roles.length > 1 && roleIndex !== group.roles.length - 1 && (
                        <div className="absolute left-[11px] top-8 bottom-[-4rem] w-px bg-[var(--border)] hidden md:block" />
                      )}

                      <div className="md:col-span-1 flex items-start gap-4">
                        {/* Dot indicator for desktop */}
                        <div className="hidden md:flex mt-1.5 w-6 h-6 items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                        </div>
                        <time className="font-mono text-sm tracking-widest text-[var(--muted-foreground)] uppercase">
                          {role.date}
                        </time>
                      </div>

                      <div className="md:col-span-2 space-y-6">
                        <div>
                          <h4 className="text-2xl font-bold tracking-tight text-white group-hover/role:text-[var(--accent)] transition-colors">
                            {role.title}
                          </h4>
                          <p className="text-[#888888] font-mono text-sm mt-1 uppercase tracking-wider">
                            {role.type}
                          </p>
                        </div>

                        <p className="text-lg text-[#cccccc] font-light leading-relaxed">
                          {role.summary}
                        </p>

                        {role.bullets && role.bullets.length > 0 && (
                          <ul className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                            {role.bullets.map((bullet, i) => (
                              <li key={i} className="flex gap-4 items-start">
                                <span className="text-[var(--accent)] mt-1.5 text-xs">▹</span>
                                <span>{renderHighlightedText(bullet)}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <div className="flex flex-wrap gap-2 pt-2">
                          {role.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-xs text-[#888888] bg-white/5 px-3 py-1.5 border border-[var(--border)] uppercase"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {role.links && role.links.length > 0 && (
                          <div className="flex flex-wrap gap-4 pt-2">
                            {role.links.map((link, i) => (
                              <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 font-mono text-xs text-white hover:text-[var(--accent)] transition-colors uppercase tracking-widest border-b border-transparent hover:border-[var(--accent)] pb-0.5"
                              >
                                {link.label}
                                <ArrowUpRight className="w-3 h-3" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
