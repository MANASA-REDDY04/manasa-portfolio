"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";

export function AIProjects() {
  const { aiProjects } = portfolioData;

  return (
    <section className="py-32 bg-[var(--surface)]">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
              ADDITIONAL PROJECTS
            </h2>
            <p className="text-xl text-[var(--muted-foreground)] font-light max-w-2xl">
              Other applications, tools, and integrations I&apos;ve built to solve complex problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col p-2">
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex gap-3">
                        {project.githubUrl && project.githubUrl !== "#" && (
                          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">
                            <Github className="w-6 h-6" />
                          </a>
                        )}
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">
                            <ExternalLink className="w-6 h-6" />
                          </a>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base leading-snug">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="font-mono text-[10px] tracking-widest text-[#888888] uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
