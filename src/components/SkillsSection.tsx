import { Cloud, Cpu, GitBranch, Layers, Sparkles, Terminal } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { skillGroups } from '@/data/portfolio';

const groupIcons = [Cloud, Layers, GitBranch, Terminal];

const SkillsSection = () => {
  return (
    <section id="skills" className="section">
      <div className="container-wide">
        <SectionHeader
          icon={Cpu}
          eyebrow="My toolkit"
          title="The Stack Behind"
          highlight="My Work"
          subtitle="The AWS services, automation tools and languages I use to build reliable infrastructure."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => {
            const Icon = groupIcons[gi % groupIcons.length];
            return (
              <Reveal key={group.title} className="card-surface card-hover p-7" delay={(gi % 2) * 100}>
                <div className="mb-6 flex items-start gap-4">
                  <span className="icon-box h-12 w-12">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{group.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{group.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="card-inner flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 text-center text-sm text-muted-foreground">
          <Sparkles className="mr-2 inline h-4 w-4 text-primary" />
          10+ hands-on AWS labs across compute, networking, storage, databases and IAM.{' '}
          <span className="text-foreground">Always learning, always automating.</span>
        </Reveal>
      </div>
    </section>
  );
};

export default SkillsSection;
