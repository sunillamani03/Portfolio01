import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { student, tapAcademyLogo } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-line py-16 px-6 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan/5 rounded-full blur-[80px]" />
      </div>
      <div className="max-w-page mx-auto flex flex-col items-center gap-6">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hover:opacity-80 transition-opacity"
        >
          <img src={tapAcademyLogo} alt="TAP Academy" className="h-9 w-auto" />
        </a>

        <div className="flex items-center gap-3">
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
          <a
            href={`mailto:${student.email}`}
            className="w-10 h-10 rounded-full flex items-center justify-center text-muted-2 glass glass-hover"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-muted text-sm font-mono">
          {student.name} — {student.title}
        </p>

        <button
          onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 text-muted-2 text-sm font-mono hover:text-cyan-3 transition-colors"
        >
          <ArrowUp className="w-4 h-4" />
          Back to top
        </button>
      </div>
    </footer>
  );
}
