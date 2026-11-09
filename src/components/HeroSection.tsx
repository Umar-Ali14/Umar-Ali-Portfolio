import { ArrowDown, ArrowUpRight, Cloud, Download, GitBranch, Server, ShieldCheck } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';
import { heroStack, profile } from '@/data/portfolio';

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pb-20 pt-28 md:px-8">
      <div className="container-wide grid w-full items-center gap-14 lg:grid-cols-[1.3fr_1fr]">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <span className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {profile.headline}
          </span>

          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[3.1rem] xl:text-[3.75rem]">
            I Build
            <br />
            <span className="text-primary">Secure &amp; Scalable</span>
            <br />
            Cloud Infrastructure.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Turning cloud concepts into practical solutions through infrastructure automation, secure architecture, and
            cost-aware engineering. Focused on automation, security, reliability, and cost optimization.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              Explore My Work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Download CV <Download className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Open to Remote Work and Internship
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {heroStack.map((t) => (
              <span key={t} className="chip px-3 py-1.5">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Portrait */}
        <div className="relative order-1 mx-auto w-full max-w-[420px] lg:order-2">
          <div className="relative aspect-square">
            <div className="absolute inset-[-6%] animate-spin-slow rounded-full border border-dashed border-primary/20" />
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative h-full w-full rounded-full border-2 border-primary/70 p-2 shadow-[0_0_60px_-10px_hsl(212_100%_56%/0.6)]">
              <img
                src={profilePhoto}
                alt={profile.name}
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            {/* Floating info cards */}
            <div className="card-surface animate-float-y absolute -left-4 top-6 hidden items-center gap-3 px-4 py-3 sm:flex">
              <span className="icon-box h-9 w-9">
                <Cloud className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] text-muted-foreground">Building</p>
                <p className="text-sm font-semibold text-foreground">AWS Infrastructure</p>
              </div>
            </div>

            <div
              className="card-surface animate-float-y absolute -right-6 top-1/3 hidden items-center gap-2 px-3 py-2 text-xs text-muted-foreground sm:flex"
              style={{ animationDelay: '1.5s' }}
            >
              <GitBranch className="h-3.5 w-3.5 text-primary" />
              IaC &amp; CI/CD
            </div>

            <div
              className="card-surface animate-float-y absolute -bottom-2 left-1/2 hidden -translate-x-1/2 items-center gap-2 whitespace-nowrap px-4 py-2 text-xs text-muted-foreground sm:flex"
              style={{ animationDelay: '3s' }}
            >
              <Server className="h-3.5 w-3.5 text-primary" />
              Cloud • DevOps • Automation
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70 md:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
