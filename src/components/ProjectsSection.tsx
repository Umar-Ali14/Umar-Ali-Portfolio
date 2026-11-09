import { ArrowRight, ArrowUpRight, Check, Cloud, ExternalLink, FolderKanban, GitBranch, Github, Globe, Layers, Maximize2, TrendingUp, Workflow } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { profile, projects } from '@/data/portfolio';

const categoryIcons: Record<string, typeof Cloud> = {
  'Infrastructure as Code': Layers,
  'CI/CD': GitBranch,
  Serverless: Cloud,
  'Content Delivery': Globe,
};

/** Small architecture diagram drawn on the card header in place of a screenshot. */
const FlowDiagram = ({ flow }: { flow: string[] }) => (
  <div className="flex items-center justify-center gap-1.5 px-3 sm:gap-2 sm:px-4">
    {flow.map((node, i) => (
      <div key={node} className="flex items-center gap-1.5 sm:gap-2">
        <div className="whitespace-nowrap rounded-lg border border-primary/30 bg-background/80 px-2 py-2 text-center text-[10px] font-medium sm:px-3 sm:text-[11px] text-foreground shadow-[0_0_20px_-8px_hsl(212_100%_56%/0.8)]">
          {node}
        </div>
        {i < flow.length - 1 && <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary/70" />}
      </div>
    ))}
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container-wide">
        <SectionHeader
          icon={FolderKanban}
          eyebrow="My work"
          title="Selected"
          highlight="Projects"
          subtitle="Hands-on AWS projects covering Infrastructure as Code, CI/CD, serverless automation and content delivery."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = categoryIcons[project.category] ?? Cloud;
            const codeHref = project.repo ?? profile.github;
            return (
              <Reveal key={project.title} as="article" className="card-surface card-hover group flex flex-col overflow-hidden" delay={(index % 2) * 100}>
                {/* Header visual */}
                <div className="relative h-48 overflow-hidden border-b border-border/70 bg-secondary/30">
                  <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage:
                        'linear-gradient(hsl(212 100% 70%) 1px, transparent 1px), linear-gradient(90deg, hsl(212 100% 70%) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl transition-colors group-hover:bg-primary/30" />

                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {project.category}
                  </span>
                  {project.status && (
                    <span className="absolute right-4 top-4 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-400">
                      {project.status}
                    </span>
                  )}

                  <div className="relative flex h-full items-center justify-center pt-4">
                    <FlowDiagram flow={project.flow} />
                  </div>

                  <span className="icon-box absolute bottom-4 left-4 h-9 w-9 bg-background/80">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background/80 text-xs font-bold text-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                  <ul className="mt-4 space-y-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {project.impact && (
                    <div className="mt-5 rounded-r-lg border-l-2 border-emerald-400/70 bg-emerald-400/[0.06] py-3 pl-4 pr-3">
                      <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                        <TrendingUp className="h-3.5 w-3.5" /> Business Impact
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">{project.impact}</p>
                    </div>
                  )}

                  <div className="mb-6 mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-border/70 pt-5">
                    <a
                      href={codeHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
                    >
                      <Github className="h-4 w-4" /> View Code <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                    </a>
                    {project.architecture && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
                            <Workflow className="h-4 w-4" /> View Architecture
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-6xl overflow-y-auto border-border bg-card p-4 sm:p-6">
                          <DialogTitle className="pr-8 text-base font-semibold text-foreground sm:text-lg">
                            {project.title} — Architecture
                          </DialogTitle>
                          <DialogDescription className="sr-only">
                            Architecture diagram for {project.title}
                          </DialogDescription>
                          <img
                            src={project.architecture}
                            alt={`${project.title} architecture diagram`}
                            className="h-auto w-full rounded-lg bg-white"
                            loading="lazy"
                          />
                          <a
                            href={project.architecture}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary hover:underline"
                          >
                            <Maximize2 className="h-3.5 w-3.5" /> Open full size
                          </a>
                        </DialogContent>
                      </Dialog>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-2 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <Github className="h-4 w-4" /> View All on GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
