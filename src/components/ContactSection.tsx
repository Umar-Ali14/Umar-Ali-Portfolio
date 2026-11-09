import { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { profile } from '@/data/portfolio';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject must be less than 200 characters'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

const emptyForm = { name: '', email: '', subject: '', message: '' };

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      toast({ title: 'Validation Error', description: validation.error.errors[0].message, variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.from('contact_submissions').insert({
      name: validation.data.name,
      email: validation.data.email,
      subject: validation.data.subject,
      message: validation.data.message,
    });
    setIsSubmitting(false);

    if (error) {
      toast({ title: 'Error', description: 'Failed to send message. Please try again.', variant: 'destructive' });
      return;
    }
    toast({ title: 'Message sent!', description: "Thanks for reaching out — I'll get back to you soon." });
    setFormData(emptyForm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const contactRows = [
    { label: 'Email', value: profile.email, icon: Mail, href: `mailto:${profile.email}` },
    { label: 'Location', value: profile.location, icon: MapPin },
  ];

  const socials = [
    { label: 'GitHub', note: 'See my code', href: profile.github, icon: Github },
    { label: 'LinkedIn', note: "Let's connect", href: profile.linkedin, icon: Linkedin },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Get in touch"
          title="Let's Build"
          highlight="Together"
          subtitle="Have a cloud project, an internship opportunity or an infrastructure challenge? I'd love to hear about it."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* Info */}
          <Reveal className="card-surface p-7">
            <span className="icon-box h-12 w-12">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-foreground">Let's talk.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I'm always happy to discuss AWS architecture, DevOps automation, or roles where I can learn and contribute.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Available for opportunities
            </span>

            <div className="mt-6 space-y-3">
              {contactRows.map(({ label, value, icon: Icon, href }) => {
                const inner = (
                  <>
                    <span className="icon-box h-10 w-10">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
                      <p className="truncate text-sm font-medium text-foreground">{value}</p>
                    </div>
                    {href && <ArrowUpRight className="h-4 w-4 text-muted-foreground" />}
                  </>
                );
                return href ? (
                  <a key={label} href={href} className="card-inner flex items-center gap-4 p-4 transition-colors hover:border-primary/40">
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="card-inner flex items-center gap-4 p-4">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 border-t border-border/70 pt-6">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Connect with me
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {socials.map(({ label, note, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-inner flex items-center gap-3 p-3 transition-colors hover:border-primary/40"
                  >
                    <Icon className="h-5 w-5 text-foreground" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                      <p className="truncate text-[11px] text-muted-foreground">{note}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="card-surface p-7" delay={100}>
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Send a message
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">Start a conversation</h3>
            <p className="mt-1 text-sm text-muted-foreground">Tell me about your project and I'll get back to you.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted-foreground">
                    Your Name
                  </label>
                  <input id="name" name="name" value={formData.name} onChange={handleChange} required className="form-field" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted-foreground">
                    Email Address
                  </label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="form-field" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-muted-foreground">
                  Subject
                </label>
                <input id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="form-field" placeholder="Cloud infrastructure project" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-field resize-none"
                  placeholder="Tell me a little about what you need..."
                />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-60">
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5" /> Your message goes straight to my inbox.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
