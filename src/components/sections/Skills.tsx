"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section className="py-32 bg-[var(--surface-hover)] border-y border-[var(--border)] overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-5xl md:text-6xl font-black tracking-tighter sticky top-24"
            >
              ARSENAL
            </motion.h2>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col gap-12">
              {skills.map((skillGroup, i) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="space-y-6"
                >
                  <h3 className="font-mono text-sm tracking-widest text-[var(--accent)] uppercase border-b border-[var(--border)] pb-2">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-4">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:scale-105 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
