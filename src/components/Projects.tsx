import { useState } from 'react';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { projects } from '@/data/portfolio';

const filters = ['All', 'Web app'];

export default function Projects() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-page mx-auto">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-cyan-2 text-sm">03.</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-fg">Projects</h2>
          <div className="flex-1 h-px bg-line" />
        </div>

        <div className="flex gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === f
                  ? 'bg-gradient-to-r from-cyan to-cyan-2 text-base shadow-glow-cyan'
                  : 'glass text-muted-2 hover:text-fg'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div ref={ref} className={`grid lg:grid-cols-2 gap-5 reveal ${visible ? 'visible' : ''}`}>
          {filtered.map((project) => (
            <div key={project.title} className="group p-6 rounded-2xl glass glass-hover flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-fg text-lg font-semibold tracking-tight group-hover:text-cyan-3 transition-colors">
                  {project.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-label text-cyan-2 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {project.status}
                </span>
              </div>

              <span className="text-label text-muted font-mono uppercase tracking-wide mb-4">
                {project.category}
              </span>

              <p className="text-muted-2 text-sm leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full text-label text-muted-2 bg-base-3 border border-line font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-cyan to-cyan-2 text-base hover:shadow-glow-cyan transition-all duration-300"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-fg glass hover:border-cyan/40 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
