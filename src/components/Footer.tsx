import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, MapPin, Rocket } from 'lucide-react';
import Reveal from './Reveal';
import { profile } from '@/data/portfolio';
import { WhatsAppIcon } from './BrandIcons';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const focusAreas = ['AWS Infrastructure', 'Terraform (IaC)', 'CI/CD with GitHub Actions', 'Serverless (Lambda)', 'Cloud Cost Optimization', 'IAM & Security'];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative px-4 pt-12 md:px-8">
      {/* CTA */}
      <Reveal className="container-wide">
        <div className="card-surface relative overflow-hidden px-6 py-16 text-center md:py-20">
          <div className="absolute left-1/2 top-0 h-60 w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Rocket className="h-3.5 w-3.5" /> Let's build something
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Have a project?
              <br />
              Let's <span className="gradient-text">deploy it to the cloud.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Whether it's a new AWS environment, an automated pipeline or infrastructure that needs to scale, let's make it
              reliable together.
            </p>
            <a href="#contact" className="btn-primary mt-8">
              Let's Work Together <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>

      {/* Links */}
      <div className="container-wide grid gap-10 border-b border-border/70 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white"
              style={{ background: 'var(--gradient-primary)' }}
            >
              {profile.initials}
            </span>
            <div>
              <p className="font-bold text-foreground">{profile.name}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{profile.role}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            I build secure, automated and cost-aware infrastructure on AWS with Terraform, GitHub Actions and Lambda.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Available for opportunities
          </span>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Navigation</p>
          <ul className="mt-5 space-y-3">
            {navigation.map((n) => (
              <li key={n.name}>
                <a href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {n.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">What I Do</p>
          <ul className="mt-5 space-y-3">
            {focusAreas.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-primary" /> {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Connect</p>
          <div className="mt-5 space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm">
              <span className="icon-box h-9 w-9">
                <Mail className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] text-muted-foreground">Email</span>
                <span className="block truncate text-foreground">{profile.email}</span>
              </span>
            </a>
            <a
              href={`https://wa.me/${profile.whatsapp.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm"
            >
              <span className="icon-box h-9 w-9">
                <WhatsAppIcon className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] text-muted-foreground">Business WhatsApp</span>
                <span className="block truncate text-foreground">{profile.whatsapp.display}</span>
              </span>
            </a>
            <div className="flex items-center gap-3 text-sm">
              <span className="icon-box h-9 w-9">
                <MapPin className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-[11px] text-muted-foreground">Location</span>
                <span className="block text-foreground">{profile.location}</span>
              </span>
            </div>
            <div className="flex gap-2 pt-1">
              {[
                { label: 'GitHub', href: profile.github, icon: Github },
                { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
                { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="icon-box h-9 w-9 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {year} {profile.name}. All rights reserved.</p>
        <a href={profile.siteRepo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary">
          <Github className="h-3.5 w-3.5" /> Built with React &amp; Tailwind · View source
        </a>
        <a href="#home" className="inline-flex items-center gap-1 hover:text-primary">
          Back to top <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
