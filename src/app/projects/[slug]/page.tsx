import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";
import Link from "next/link";
import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: ProjectPageProps
): Promise<Metadata> {
  const resolvedParams = await params;
  const project = portfolioData.featuredProjects.find(
    (p) => p.slug === resolvedParams.slug
  );

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
  };
}

export async function generateStaticParams() {
  return portfolioData.featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = portfolioData.featuredProjects.find(
    (p) => p.slug === resolvedParams.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-32 min-h-screen">
      <Button asChild variant="link" className="mb-12 gap-2 -ml-4">
        <Link href="/#projects">
          <ArrowLeft className="w-5 h-5" /> BACK TO PORTFOLIO
        </Link>
      </Button>

      <div className="space-y-24">
        <header className="space-y-8 border-b border-[var(--border)] pb-12">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
            {project.title}
          </h1>
          <p className="text-2xl md:text-3xl text-[#888888] font-light leading-relaxed max-w-3xl">
            {project.summary}
          </p>
          
          <div className="flex flex-wrap gap-6 pt-8">
            {project.liveUrl && project.liveUrl !== "#" && (
              <Button asChild size="lg" className="gap-2">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 whitespace-nowrap">
                  VIEW LIVE <ExternalLink className="w-5 h-5 shrink-0" />
                </a>
              </Button>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 whitespace-nowrap">
                  <Github className="w-5 h-5 shrink-0" /> SOURCE CODE
                </a>
              </Button>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-12">
            <section className="space-y-6">
              <h2 className="font-mono text-sm tracking-widest text-[var(--accent)] uppercase border-b border-[var(--border)] pb-2">
                Scope & Role
              </h2>
              <p className="text-xl text-[#cccccc] leading-relaxed">
                {project.role}
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-mono text-sm tracking-widest text-[var(--accent)] uppercase border-b border-[var(--border)] pb-2">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="font-mono text-sm text-[#888888] bg-white/5 px-4 py-2 border border-white/10 rounded-none">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-8 space-y-20">
            <section className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight uppercase">Key Design Decisions</h2>
              <ul className="space-y-6">
                {project.architectureDecisions.map((decision, i) => (
                  <li key={i} className="flex gap-6 items-start">
                    <span className="font-mono text-[var(--accent)] mt-1">0{i + 1}</span>
                    <p className="text-xl text-[#cccccc] leading-relaxed">{decision}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight uppercase">Architecture & Data Flow</h2>
              <div className="glass-panel p-2">
                {project.diagram && <ArchitectureDiagram chart={project.diagram} />}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
