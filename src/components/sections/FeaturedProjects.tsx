"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
  const { featuredProjects } = portfolioData;

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
                SELECTED WORK
              </h2>
              <p className="text-xl text-[var(--muted-foreground)] font-light">
                Engineering deep backends and designing intuitive product interfaces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex ${i === 2 ? 'lg:col-span-2' : ''}`}
              >
                <Card className="flex flex-col h-full w-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div className="h-12 w-12 rounded-full bg-[var(--surface-hover)] flex items-center justify-center border border-[var(--border)]">
                        <span className="font-mono font-bold text-lg">{project.title.charAt(0)}</span>
                      </div>
                      <Button asChild variant="ghost" size="icon" className="rounded-full shrink-0">
                        <Link href={`/projects/${project.slug}`}>
                          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                      </Button>
                    </div>
                    <CardTitle className="text-3xl md:text-4xl">{project.title}</CardTitle>
                    <CardDescription className="mt-4">{project.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 mt-6">
                    <div className="space-y-2">
                      <span className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase">Scope</span>
                      <p className="text-[#cccccc] text-lg leading-relaxed">
                        {project.role}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex-wrap gap-2 pt-8 border-t border-white/5 mt-auto">
                    {project.stack.map((tech) => (
                      <span key={tech} className="font-mono text-xs text-[#888888] bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
