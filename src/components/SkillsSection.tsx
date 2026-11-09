import { Cloud, GitBranch, Layers, Sparkles, Terminal } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { skillGroups } from '@/data/portfolio';

const groupIcons = [Cloud, Layers, GitBranch, Terminal];

const SkillsSection = () => {
  return (
    <section id="skills" className="section">
      <div className="container-wide">
        <SectionHeader
          eyebrow="My toolkit"
          title="The Stack Behind"
          highlight="My Work"
          subtitle="The AWS services, automation tools, and technologies I use to build secure, reliable, and cost-efficient cloud infrastructure."
        />

        <div className="grid gap-7 md:grid-cols-2">
          {skillGroups.map((group, gi) => {
            const Icon = groupIcons[gi % groupIcons.length];
            return (
              <Reveal
                key={group.title}
                className="skill-card glow-card rounded-3xl border border-border/80 bg-card/60 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40"
                delay={(gi % 2) * 120}
              >
                {/* Card header */}
                <div className="mb-7 flex items-start gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary shadow-[inset_0_0_18px_hsl(212_100%_56%/0.15)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold uppercase tracking-[0.28em] text-primary">{group.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{group.description}</p>
                  </div>
                </div>

                {/* Skill chips */}
                <ul className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 rounded-xl border border-border/80 bg-secondary/50 px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_hsl(212_100%_56%/0.8)]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 text-center text-sm text-muted-foreground">
          <Sparkles className="mr-2 inline h-4 w-4 text-primary" />
          10+ Hands-on AWS Labs across compute, networking, storage, databases, and IAM.{' '}
          <span className="text-foreground">Always learning. Always building. Always automating.</span>
        </Reveal>
      </div>
    </section>
  );
};

export default SkillsSection;
