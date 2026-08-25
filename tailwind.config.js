/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#05070f',
          card: 'rgba(13, 17, 28, 0.7)',
          cardHover: 'rgba(22, 28, 45, 0.85)',
          border: 'rgba(255, 255, 255, 0.08)',
          borderGlow: 'rgba(168, 85, 247, 0.4)',
          purple: '#9333ea',
          neonPurple: '#a855f7',
          neonBlue: '#3b82f6',
          neonCyan: '#06b6d4',
          accent: '#c084fc',
          muted: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Syne', 'Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        'neon-purple': '0 0 25px -5px rgba(168, 85, 247, 0.4)',
        'neon-blue': '0 0 25px -5px rgba(59, 130, 246, 0.4)',
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-line': 'glowLine 3s ease-in-out infinite',
        'scan': 'scan 8s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowLine: {
          '0%, 100%': { opacity: '0.4', transform: 'translateY(0%)' },
          '50%': { opacity: '1', transform: 'translateY(50%)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
