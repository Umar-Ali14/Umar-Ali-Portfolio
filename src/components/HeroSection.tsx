import { ArrowDown, ArrowUpRight, Cloud, Download, GitBranch, Server, ShieldCheck } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.webp';
import { heroStack, profile } from '@/data/portfolio';
import HeroParticles from './HeroParticles';

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pb-16 pt-24 md:px-8">
      <HeroParticles />

      <div className="container-wide relative grid w-full items-center gap-10 lg:gap-12 lg:grid-cols-[1.3fr_1fr]">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <span className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {profile.headline}
          </span>

          <h1 className="mt-5 text-[2.25rem] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-[3.25rem] lg:text-[2.75rem] xl:text-[3.25rem]">
            I Build
            <br />
            <span className="text-primary">Secure &amp; Scalable</span>
            <br />
            Cloud Infrastructure.
          </h1>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground md:text-base">
            Turning cloud concepts into practical solutions through infrastructure automation, secure architecture, and
            cost-aware engineering. Focused on automation, security, reliability, and cost optimization.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary px-5 py-2.5">
              Explore My Work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-outline px-5 py-2.5">
              Download CV <Download className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-6 flex items-center gap-2 text-[13px] text-muted-foreground">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Open to Remote Work and Internship
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {heroStack.map((t) => (
              <span key={t} className="chip px-2.5 py-1">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Portrait */}
        <div className="relative order-1 mx-auto w-full max-w-[280px] sm:max-w-[350px] lg:order-2">
          <div className="relative aspect-square">
            <div className="absolute inset-[-6%] animate-spin-slow rounded-full border border-dashed border-primary/20" />
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative h-full w-full rounded-full border-2 border-primary/70 p-1.5 shadow-[0_0_60px_-10px_hsl(212_100%_56%/0.6)]">
              <img
                src={profilePhoto}
                alt={profile.name}
                className="h-full w-full rounded-full object-cover"
              />
              {/* Soft navy fade: blends the photo's grey backdrop into the page, keeps the face untouched */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-1.5 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 50% 44%, transparent 0%, transparent 46%, hsl(224 71% 4% / 0.35) 62%, hsl(224 71% 4% / 0.7) 80%, hsl(224 71% 4% / 0.9) 100%)',
                }}
              />
            </div>

            {/* Floating info cards */}
            <div className="card-surface animate-float-y absolute -left-6 top-4 hidden items-center gap-2.5 px-3 py-2 sm:flex">
              <span className="icon-box h-8 w-8">
                <Cloud className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] text-muted-foreground">Building</p>
                <p className="text-[13px] font-semibold text-foreground">AWS Infrastructure</p>
              </div>
            </div>

            <div
              className="card-surface animate-float-y absolute -right-6 top-1/3 hidden items-center gap-1.5 px-2.5 py-1.5 text-[11px] text-muted-foreground sm:flex"
              style={{ animationDelay: '1.5s' }}
            >
              <GitBranch className="h-3.5 w-3.5 text-primary" />
              IaC &amp; CI/CD
            </div>

            <div
              className="card-surface animate-float-y absolute -bottom-2 left-1/2 hidden -translate-x-1/2 items-center gap-2 whitespace-nowrap px-3 py-1.5 text-[11px] text-muted-foreground sm:flex"
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
