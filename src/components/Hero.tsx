import { ArrowDown, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { student } from '@/data/portfolio';

export default function Hero() {
  const typed = useTypingEffect(student.typingRoles, {
    typeSpeed: 80,
    deleteSpeed: 35,
    pauseTime: 1800,
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 aurora" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan/8 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-amber/6 blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-page mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-2" />
              <span className="text-label font-mono text-muted-2 tracking-wide">
                {student.experience} · {student.primaryDomain}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-fg">Hi, I'm </span>
              <span className="gradient-text">Sunil Lamani</span>
            </h1>

            <div className="mt-5 flex items-center gap-2 font-mono text-base">
              <span className="text-cyan-2">{'>'}</span>
              <span className="text-fg">{typed}</span>
              <span className="w-1.5 h-5 bg-cyan-2 cursor-blink" />
            </div>

            <p className="mt-6 text-muted-2 text-base sm:text-lg max-w-xl leading-relaxed">
              {student.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan to-cyan-2 text-base text-sm font-medium rounded-full px-6 py-3 hover:shadow-glow-cyan-lg transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 glass glass-hover text-fg text-sm font-medium rounded-full px-6 py-3"
              >
                View Projects
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={student.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-muted-2 glass glass-hover"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={student.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-muted-2 glass glass-hover"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <span className="inline-flex items-center gap-1.5 text-muted text-sm font-mono">
                <MapPin className="w-3.5 h-3.5 text-cyan-2" />
                {student.location}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan/20 to-amber/15 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full p-1.5 bg-gradient-to-br from-cyan/40 via-line-2 to-amber/30 animate-float">
                <div className="w-full h-full rounded-full overflow-hidden bg-base-2">
                  <img
                    src={student.profilePicture}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 px-4 py-2 rounded-full glass text-sm text-cyan-3 font-mono shadow-glass">
                {student.title}
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-cyan-2 transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
}
