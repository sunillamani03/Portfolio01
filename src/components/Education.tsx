import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { education } from '@/data/portfolio';

export default function Education() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-cyan-2 text-sm">04.</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-fg">Education</h2>
          <div className="flex-1 h-px bg-line" />
        </div>

        <div ref={ref} className={`space-y-4 reveal ${visible ? 'visible' : ''}`}>
          {education.map((edu, i) => (
            <div key={i} className="p-6 rounded-2xl glass glass-hover">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-cyan-2" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-fg text-base font-semibold tracking-tight mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-cyan-3 text-sm font-medium mb-3">{edu.institute}</p>
                  <div className="flex flex-wrap gap-4 text-label text-muted font-mono mb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.status}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="text-muted-2 text-sm leading-relaxed">{edu.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
