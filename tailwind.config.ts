import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1a3300',
        accent: '#ffe95c',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui'],
        display: ['var(--font-bricolage)', 'system-ui'],
      },
    },
  },
  plugins: [],
} satisfies Config;
