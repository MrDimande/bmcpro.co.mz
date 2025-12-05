/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fff9e6',
          100: '#ffedb3',
          200: '#ffe180',
          300: '#ffd54d',
          400: '#ffc91a',
          500: '#ffb800',
          600: '#cc9300',
          700: '#996e00',
          800: '#664900',
          900: '#332400',
        },
        dark: {
          50: '#1a1a1a',
          100: '#0f0f0f',
          200: '#000000',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-diagonal': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(255, 184, 0, 0.3), 0 0 40px rgba(255, 184, 0, 0.2)',
        'glow-gold-lg': '0 0 30px rgba(255, 184, 0, 0.4), 0 0 60px rgba(255, 184, 0, 0.3)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.2)',
        'glow-blue-lg': '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

