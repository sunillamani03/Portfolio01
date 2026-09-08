import { Code2, Server, Database, Wrench, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { skillGroups } from '@/data/portfolio';

const icons = [Code2, Server, Database, Wrench, Sparkles];

export default function Skills() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-page mx-auto">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-cyan-2 text-sm">02.</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-fg">Skills</h2>
          <div className="flex-1 h-px bg-line" />
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal ${visible ? 'visible' : ''}`}
        >
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={group.category} className="p-6 rounded-2xl glass glass-hover">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-2" />
                  </div>
                  <h3 className="text-fg text-base font-medium">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-label text-muted-2 bg-base-3 border border-line hover:border-cyan/40 hover:text-cyan-3 transition-colors font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
