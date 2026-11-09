import { Award, BadgeCheck, Eye, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { certifications } from '@/data/portfolio';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications &"
          highlight="Courses"
          subtitle="AWS training, Linux and cloud computing courses I've completed."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            return (
              <Reveal key={cert.name} className="card-surface card-hover flex flex-col p-6" delay={(i % 3) * 80}>
                <div className="flex items-start justify-between">
                  <span className="icon-box h-11 w-11">
                    <Award className="h-5 w-5" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-400">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    {cert.date ?? 'Completed'}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold leading-snug text-foreground">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>

                <div className="mt-auto pt-6">
                  {cert.image ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                          <Eye className="h-4 w-4" /> View certificate
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl border-border bg-card">
                        <DialogTitle className="text-foreground">{cert.name}</DialogTitle>
                        <img src={cert.image} alt={`${cert.name} certificate`} className="h-auto w-full rounded-lg" />
                      </DialogContent>
                    </Dialog>
                  ) : cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" /> View credential
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">Listed on my CV</span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
