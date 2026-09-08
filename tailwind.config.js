/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#070b14',
        'base-2': '#0d1320',
        'base-3': '#131b2e',
        'base-4': '#1a2440',
        line: '#1e293b',
        'line-2': '#334155',
        muted: '#64748b',
        'muted-2': '#94a3b8',
        fg: '#f1f5f9',
        cyan: '#06b6d4',
        'cyan-2': '#22d3ee',
        'cyan-3': '#67e8f9',
        amber: '#f59e0b',
        'amber-2': '#fbbf24',
        'amber-3': '#fcd34d',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'label': ['12px', { lineHeight: '1.4' }],
      },
      maxWidth: {
        page: '1200px',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.3)',
        'glow-cyan-lg': '0 0 50px -5px rgba(6, 182, 212, 0.4)',
        'glow-amber': '0 0 30px -5px rgba(245, 158, 11, 0.3)',
        'glow-amber-lg': '0 0 50px -5px rgba(245, 158, 11, 0.4)',
        'glass': '0 8px 32px -8px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease forwards',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
