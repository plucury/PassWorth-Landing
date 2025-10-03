/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,tsx,ts,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981', // emerald-500
          600: '#059669',
        },
        surface: {
          dark: '#1F2937', // slate-800
          light: '#E5E7EB', // gray-200
        },
      },
    },
  },
  plugins: [],
}

