/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Cascadia Code',
          'SFMono-Regular',
          'Consolas',
          'monospace',
        ],
      },
      colors: {
        ink: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#070b12',
        },
        canvas: {
          dark: '#070b12',
          light: '#ffffff',
        },
        surface: {
          dark: '#0f1520',
          light: '#f5f5f5',
        },
        // override tailwind's black so bg-black picks up the midnight tint
        black: '#070b12',
      },
      maxWidth: {
        section: '72rem',
      },
      spacing: {
        section: '6rem',
        'section-lg': '8rem',
      },
    },
  },
  plugins: [],
};
