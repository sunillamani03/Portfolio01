import { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { student, cta } from '@/data/portfolio';

export default function Contact() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${student.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan/5 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-cyan-2 text-sm">06.</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-fg">Contact</h2>
          <div className="flex-1 h-px bg-line" />
        </div>

        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-cyan/30 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-2 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-2" />
            </span>
            <span className="text-label text-cyan-3 font-mono">{cta.availability}</span>
          </div>

          <h3 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">{cta.message}</h3>
          <p className="text-muted-2 text-base max-w-xl mb-10">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 mb-8">
            <a
              href={`mailto:${student.email}`}
              className="flex items-center gap-3 p-4 rounded-xl glass glass-hover"
            >
              <div className="w-9 h-9 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-cyan-2" />
              </div>
              <div className="min-w-0">
                <p className="text-label text-muted font-mono uppercase">Email</p>
                <p className="text-fg text-xs truncate">{student.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-xl glass">
              <div className="w-9 h-9 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-cyan-2" />
              </div>
              <div>
                <p className="text-label text-muted font-mono uppercase">Location</p>
                <p className="text-fg text-xs">{student.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-4 rounded-xl glass">
              <a
                href={student.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-base-3 flex items-center justify-center text-muted-2 hover:text-cyan-3 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={student.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-base-3 flex items-center justify-center text-muted-2 hover:text-cyan-3 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-muted text-sm font-mono mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-base-3/60 border border-line text-fg placeholder-muted/50 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-muted text-sm font-mono mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-base-3/60 border border-line text-fg placeholder-muted/50 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-muted text-sm font-mono mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-base-3/60 border border-line text-fg placeholder-muted/50 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all resize-none"
                placeholder="Tell me about your project or just say hi..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan to-cyan-2 text-base text-sm font-medium rounded-xl px-6 py-3.5 hover:shadow-glow-cyan-lg transition-all duration-300"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Opening your email app...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
