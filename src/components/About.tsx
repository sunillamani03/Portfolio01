import { GraduationCap, Briefcase, MapPin, Code2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { about, student } from '@/data/portfolio';

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const stats = [
    { icon: GraduationCap, label: 'Degree', value: 'B.E AI & ML' },
    { icon: Briefcase, label: 'Experience', value: student.experience },
    { icon: MapPin, label: 'Location', value: student.location },
    { icon: Code2, label: 'Domain', value: student.primaryDomain },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-page mx-auto">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-cyan-2 text-sm">01.</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-fg">About</h2>
          <div className="flex-1 h-px bg-line" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div ref={ref} className={`lg:col-span-7 space-y-5 reveal ${visible ? 'visible' : ''}`}>
            <p className="text-fg text-lg leading-relaxed">{about.short}</p>
            <p className="text-muted-2 text-base leading-relaxed">{about.detailed}</p>
          </div>

          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="p-5 rounded-2xl glass glass-hover">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center mb-3">
                  <stat.icon className="w-5 h-5 text-cyan-2" />
                </div>
                <p className="text-label text-muted font-mono uppercase tracking-wide mb-1">
                  {stat.label}
                </p>
                <p className="text-fg text-sm font-medium">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
