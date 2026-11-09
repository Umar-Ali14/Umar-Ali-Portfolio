import { Sparkles } from 'lucide-react';
import Reveal from './Reveal';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  /** One paragraph, or several as an array. */
  subtitle?: string | string[];
};

/** Shared section heading: ✦ EYEBROW ✦, title with highlighted word, intro text and a glowing underline. */
const SectionHeader = ({ eyebrow, title, highlight, subtitle }: SectionHeaderProps) => {
  const paragraphs = subtitle === undefined ? [] : Array.isArray(subtitle) ? subtitle : [subtitle];

  return (
    <Reveal className="mx-auto mb-16 max-w-3xl text-center">
      <span className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.4em] text-primary">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
        <Sparkles className="h-4 w-4" />
      </span>
      <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {title}{' '}
        <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      {paragraphs.map((p) => (
        <p key={p} className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {p}
        </p>
      ))}
      <div className="mx-auto mt-8 h-[3px] w-28 rounded-full bg-primary shadow-[0_0_14px_2px_hsl(212_100%_56%/0.55)]" />
    </Reveal>
  );
};

export default SectionHeader;
