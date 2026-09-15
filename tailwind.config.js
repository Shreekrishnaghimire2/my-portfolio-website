/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#070809',
          subtle: '#0D0F12',
          card: '#12151A',
          hover: '#181C23',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(255, 255, 255, 0.14)',
          'border-gold': 'rgba(197, 168, 128, 0.25)',
        },
        bronze: {
          50: '#FAF6EF',
          100: '#F3EADB',
          200: '#E6D3B6',
          300: '#D7BC8E',
          400: '#C8A568',
          500: '#B88F47',
          600: '#997334',
          700: '#7A5925',
          800: '#5C4119',
          900: '#3D2A0F',
          DEFAULT: '#C8A568',
        },
        gold: {
          light: '#DFBD89',
          DEFAULT: '#C5A880',
          dark: '#9E8056',
        },
        text: {
          primary: '#F3F4F6',
          secondary: '#9CA3AF',
          muted: '#6B7280',
          accent: '#DFBD89',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Cinzel"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'luxury-gradient': 'radial-gradient(circle at 50% 0%, rgba(197, 168, 128, 0.08), transparent 70%)',
        'subtle-glow': 'radial-gradient(circle at 50% 50%, rgba(200, 165, 104, 0.06), transparent 60%)',
        'card-glow': 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.005) 100%)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
