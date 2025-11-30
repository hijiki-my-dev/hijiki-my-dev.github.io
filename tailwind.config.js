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
        primary: {
          DEFAULT: '#10b981', // emerald-500
          hover: '#059669',   // emerald-600
        },
        secondary: {
          DEFAULT: '#3b82f6', // blue-500
          hover: '#2563eb',   // blue-600
        },
        accent: {
          DEFAULT: '#ec4899', // pink-500
          hover: '#db2777',   // pink-600
        },
        dark: {
          DEFAULT: '#0f172a', // slate-900
          lighter: '#1e293b', // slate-800
          card: 'rgba(30, 41, 59, 0.7)',
        },
        light: {
          DEFAULT: '#f8fafc', // slate-50
          lighter: '#ffffff', // white
          card: 'rgba(255, 255, 255, 0.7)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(147, 51, 234, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(147, 51, 234, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
