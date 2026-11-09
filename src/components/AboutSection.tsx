import {
  BookOpen,
  Cloud,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  User,
  Wrench,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { education, learning, profile, services } from '@/data/portfolio';

const serviceIcons = [Cloud, Terminal, GitBranch];

const ColumnHeader = ({ icon: Icon, title, subtitle }: { icon: typeof User; title: string; subtitle: string }) => (
  <div className="mb-6 flex items-center gap-4">
    <span className="icon-box h-12 w-12">
      <Icon className="h-5 w-5" />
    </span>
    <div>
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  </div>
);

const StatusFooter = ({ text }: { text: string }) => (
  <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
    {text}
  </p>
);

const AboutSection = () => {
  const info = [
    { label: 'Name', value: profile.name, icon: User },
    { label: 'Location', value: profile.location, icon: MapPin },
    { label: 'Email', value: profile.email, icon: Mail, href: `mailto:${profile.email}` },
    { label: 'Looking for', value: 'Remote Cloud / DevOps internship', icon: Wrench },
  ];

  return (
    <section id="about" className="section">
      <div className="container-wide">
        <SectionHeader
          icon={Sparkles}
          eyebrow="Get to know me"
          title="About"
          highlight="Me"
          subtitle="I'm a BBIT student focused on AWS cloud engineering and DevOps. I build hands-on projects with Terraform, GitHub Actions (IAM OIDC) and event-driven AWS automation."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Personal info */}
          <Reveal className="card-surface flex flex-col p-6">
            <ColumnHeader icon={User} title="Personal Information" subtitle="A few details about me" />
            <div className="space-y-3">
              {info.map(({ label, value, icon: Icon, href }) => (
                <div key={label} className="card-inner flex items-center gap-4 p-4">
                  <span className="icon-box h-10 w-10">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} className="block truncate text-sm font-medium text-foreground hover:text-primary">
                        {value}
                      </a>
                    ) : (
                      <p className="truncate text-sm font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <StatusFooter text="Open to opportunities" />
            </div>
          </Reveal>

          {/* Education */}
          <Reveal className="card-surface flex flex-col p-6" delay={100}>
            <ColumnHeader icon={GraduationCap} title="Education" subtitle="My academic background" />
            <div className="space-y-3">
              {education.map((e) => (
                <div key={e.degree} className="card-inner p-5">
                  <div className="flex items-start justify-between gap-3">
                    <span className="icon-box h-10 w-10">
                      <GraduationCap className="h-4 w-4" />
                    </span>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                      {e.period}
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-foreground">{e.degree}</h4>
                  <p className="text-sm text-muted-foreground">{e.full}</p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" /> {e.institution}
                  </p>
                </div>
              ))}

              <div className="card-inner p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Sparkles className="h-4 w-4" /> Currently Learning
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {learning.map((l) => (
                    <span key={l} className="chip">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Services */}
          <Reveal className="card-surface flex flex-col p-6" delay={200}>
            <ColumnHeader icon={Wrench} title="What I Do" subtitle="How I can help" />
            <div className="space-y-3">
              {services.map((s, i) => {
                const Icon = serviceIcons[i % serviceIcons.length];
                return (
                  <div key={s.title} className="card-inner p-5">
                    <p className="flex items-center gap-3 font-semibold text-foreground">
                      <Icon className="h-4 w-4 text-primary" /> {s.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-auto">
              <StatusFooter text="Available for cloud projects" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
