/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensures Tailwind scans all relevant files
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Default for body text
        serif: ["Bodoni Moda", "serif"], // Premium serif for headlines
        heading: ["Playfair Display", "serif"], // Elegant hero font
        creative: ["Spectral", "serif"], // Unique artistic font for intros
        branding: ["Aghsing", "cursive"], // Signature branding only
        accent: ["Raleway", "sans-serif"], // Modern uppercase buttons
      },
      letterSpacing: {
        wide: "0.05em",
        wider: "0.1em",
        ultra: "0.25em",
      },
      lineHeight: {
        tight: "1.1",
        relaxed: "1.75",
      },
      colors: {
        purple: {
          DEFAULT: "#9333ea",
          500: "#9333ea",
          600: "#7e22ce",
          700: "#6b21a8",
        },
      },
    },
  },
  plugins: [tailwindScrollbar],
};
