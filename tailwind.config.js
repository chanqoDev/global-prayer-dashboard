/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts, css}"],
  theme: {
    extend: {
  colors: {
    background: "#ffffff",   // or hsl(var(--background)) if using CSS variables
    foreground: "#111827",   // dark text
    primary: {
      50:  "#eef2ff",
      100: "#e0e7ff",
      500: "#3b82f6",   // main blue
      600: "#14213d",   // darker hover
      700: "#1d4ed8",
    },
    secondary: {
      100: "#fef9c3",
      200: "#fefae0",
      500: "#fca311",
      600: "#eab308",
    },
    neutral: {
      100: "#e5e5e5",
      500: "#6b7280",
      900: "#111827",
      950: "#0f172a", 
    },
  },
  fontFamily: {
    sans: ["'Inter'", "sans-serif"],
    display: ["'Merriweather'", "serif"],
  },
}, 
  },
  plugins: [],
};
