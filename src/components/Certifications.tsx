import { Award, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-cyan-2 text-sm">05.</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-fg">Certifications</h2>
          <div className="flex-1 h-px bg-line" />
        </div>

        <div ref={ref} className={`grid sm:grid-cols-2 gap-5 reveal ${visible ? 'visible' : ''}`}>
          {certifications.map((cert, i) => (
            <div key={i} className="group p-6 rounded-2xl glass glass-hover">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-amber-2" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-fg text-base font-semibold tracking-tight">{cert.name}</h3>
                  <p className="inline-flex items-center gap-1.5 text-amber-3 text-sm font-medium mt-1">
                    <Building2 className="w-3.5 h-3.5" />
                    {cert.platform}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-label text-muted font-mono mb-4">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {cert.date}
                </span>
              </div>

              {cert.skills && (
                <p className="text-muted-2 text-sm leading-relaxed mb-5">
                  <span className="text-muted font-mono">Skills: </span>
                  {cert.skills}
                </p>
              )}

              <a
                href={cert.verification}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-fg text-sm font-medium hover:text-cyan-3 transition-colors group/link"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View Certificate
                <span className="inline-block w-0 h-px bg-cyan-2 group-hover/link:w-4 transition-all duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
