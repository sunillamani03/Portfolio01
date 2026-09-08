import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, student, tapAcademyLogo } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'glass shadow-glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-page mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <img src={tapAcademyLogo} alt="TAP Academy" className="h-9 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="px-3 py-2 text-sm text-muted-2 hover:text-fg transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-3 w-0 h-px bg-gradient-to-r from-cyan to-amber group-hover:w-[calc(100%-24px)] transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={student.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-cyan to-cyan-2 text-base text-sm font-medium rounded-full px-4 py-2 hover:shadow-glow-cyan transition-all duration-300"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-fg p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-line px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="px-2 py-3 text-muted-2 hover:text-fg text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={student.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan to-cyan-2 text-base text-sm font-medium rounded-full px-4 py-3"
          >
            <Download className="w-3.5 h-3.5" />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
