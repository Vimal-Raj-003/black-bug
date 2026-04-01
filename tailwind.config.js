/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
   content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        secondary: "#0284C7",
        accent: "#38BDF8",
        "background-light": "#F8FAFC",
        "background-dark": "#0F172A",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1E293B",
        "text-light": "#334155",
        "text-dark": "#E2E8F0",
      },
      fontFamily: {
        display: ["Lato", "sans-serif"],
        body: ["Lato", "sans-serif"],
        sans: ["Lato", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.5rem",
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        glow: "0 0 15px rgba(14, 165, 233, 0.3)",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2070&q=80')",
      },
    },
  },
  plugins: [],
};