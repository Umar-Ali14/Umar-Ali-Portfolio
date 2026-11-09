import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Award,
  Briefcase,
  FolderKanban,
  Github,
  Home,
  Linkedin,
  Mail,
  Menu,
  User,
  X,
  Zap,
} from 'lucide-react';
import { profile } from '@/data/portfolio';

const navLinks = [
  { name: 'Home', id: 'home', icon: Home },
  { name: 'About', id: 'about', icon: User },
  { name: 'Skills', id: 'skills', icon: Zap },
  { name: 'Projects', id: 'projects', icon: FolderKanban },
  { name: 'Journey', id: 'experience', icon: Briefcase },
  { name: 'Certifications', id: 'certifications', icon: Award },
  { name: 'Contact', id: 'contact', icon: Mail },
];

const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = 'home';
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= marker) current = link.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'border-b border-border/70 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between px-4 md:h-[72px] md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white"
            style={{ background: 'var(--gradient-primary)' }}
          >
            {profile.initials}
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">{profile.name}</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map(({ name, id, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors ${
                active === id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="h-4 w-4" />
              {name}
              {active === id && (
                <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-primary" />
              )}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="icon-box h-10 w-10 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a href="#contact" className="btn-gradient ml-2">
            Hire Me <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setIsOpen((o) => !o)}
          className="icon-box h-10 w-10 text-foreground xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border/70 px-4 pb-6 pt-2 xl:hidden">
          <div className="flex flex-col">
            {navLinks.map(({ name, id, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium ${
                  active === id ? 'bg-primary/10 text-primary' : 'text-muted-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                {name}
              </a>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="icon-box h-10 w-10 text-muted-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="btn-gradient flex-1">
              Hire Me <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
