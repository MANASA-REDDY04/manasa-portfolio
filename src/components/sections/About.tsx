"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function About() {
  const { personal, education, achievements } = portfolioData;

  return (
    <section className="py-32 border-t border-[var(--border)] relative overflow-hidden">
      {/* Background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
              THE MANIFESTO
            </h2>
            <div className="space-y-6">
              <p className="text-2xl text-[#cccccc] leading-relaxed font-light">
                {personal.about}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 space-y-16">
            <div className="space-y-8">
              <h3 className="font-mono text-sm tracking-widest text-[var(--accent)] uppercase border-b border-[var(--border)] pb-4">
                Education
              </h3>
              {education.map((edu, i) => (
                <div key={i} className="group">
                  <h4 className="text-2xl font-bold tracking-tight">{edu.institution}</h4>
                  <p className="text-xl text-[#888888] mt-2">{edu.degree}</p>
                  <div className="flex justify-between items-center mt-4 font-mono text-sm">
                    <span className="text-[var(--accent)]">{edu.date}</span>
                    <span className="text-white/50">{edu.details}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <h3 className="font-mono text-sm tracking-widest text-[var(--accent)] uppercase border-b border-[var(--border)] pb-4">
                Milestones
              </h3>
              <ul className="space-y-4">
                {achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-4 items-start group">
                    <span className="font-mono text-[var(--accent)] mt-1">0{i + 1}</span>
                    <p className="text-lg text-[#cccccc] group-hover:text-white transition-colors">{achievement}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
