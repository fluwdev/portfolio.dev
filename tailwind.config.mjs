/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        primary: '#F9D423',
        secondary: {
          100: '#C380F7',
          200: '#B96BF6',
          300: '#9B2BF2',
        },
      },
    },
  },
  plugins: [],
}
