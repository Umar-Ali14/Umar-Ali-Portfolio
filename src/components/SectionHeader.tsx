import type { LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

type SectionHeaderProps = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle?: string;
};

const SectionHeader = ({ icon: Icon, eyebrow, title, highlight, subtitle }: SectionHeaderProps) => (
  <Reveal className="mx-auto mb-16 max-w-2xl text-center">
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      <Icon className="h-3.5 w-3.5" />
      {eyebrow}
    </span>
    <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
      {title} <span className="gradient-text">{highlight}</span>
    </h2>
    {subtitle && (
      <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>
    )}
    <div className="mx-auto mt-6 h-0.5 w-16 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
  </Reveal>
);

export default SectionHeader;
