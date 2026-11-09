import { Calendar, Cloud, HeartHandshake, Trophy, Users } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { journey } from '@/data/portfolio';

const icons = [Cloud, Users, Trophy, HeartHandshake];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section">
      <div className="container-wide">
        <SectionHeader
          eyebrow="My journey"
          title="My"
          highlight="Journey"
          subtitle="Projects, community work and leadership alongside my degree."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {journey.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} className="card-surface card-hover flex flex-col p-7" delay={(i % 2) * 100}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-extrabold text-secondary">{String(i + 1).padStart(2, '0')}</span>
                    <span className="h-6 w-px bg-primary/40" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">{item.label}</span>
                  </div>
                  <span className="icon-box h-10 w-10 text-muted-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                </div>

                <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                  <Calendar className="h-4 w-4" /> {item.period}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <div className="h-px w-full bg-gradient-to-r from-primary/50 via-border to-transparent" />
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="card-surface mt-8 px-6 py-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">The journey continues</p>
          <p className="mt-3 text-2xl font-bold text-foreground">
            Learn. Build. <span className="gradient-text">Automate.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default ExperienceSection;
