import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lilac: {
          50: "#f5f0ff",
          100: "#e6dfff",
          200: "#d1bfff",
          300: "#b998ff",
          400: "#822b80",
          500: "#8256ff",
          600: "#6e01a6",
          700: "#171717",
          800: "#983ab8",
          900: "#27156a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
