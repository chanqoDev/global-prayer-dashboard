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
      500: "#273c75",   // main blue
      600: "#FEFEFE",   // darker hover
      700: "#0097e6",
    },
    secondary: {
      100: "#fef9c3",
      200: "#fefae0",
      500: "#1d4ed8",
      600: "#3b82f6",
    },
    neutral: {
      100: "#e5e5e5",
      500: "#6b7280",
      900: "#111827",
      950: "#0f172a", 
    },
  },
  fontFamily: {
    sans: ["'Inter'","Bebas Neue", "sans-serif"],
    display: ["'Merriweather'", "serif"],
  },
}, 
  },
  plugins: [],
};
