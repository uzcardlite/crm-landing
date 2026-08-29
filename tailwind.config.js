/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A0E1A",
          900: "#12182B",
          800: "#1B2340",
          700: "#262F52",
          600: "#3A4570",
          text: "#C7C9D6",
        },
        background: "#F8F9FB",
        accent: {
          DEFAULT: "#F5A623",
          light: "#FAC775",
          dark: "#854F0B",
        },
        success: {
          DEFAULT: "#0F6E56",
          bg: "#E1F5EE",
        },
        danger: {
          DEFAULT: "#A32D2D",
          bg: "#FCEBEB",
        },
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        glow: "0 0 80px -20px rgba(245, 166, 35, 0.35)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        blobfloat: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, -16px) scale(1.06)" },
          "66%": { transform: "translate(-14px, 12px) scale(0.95)" },
        },
        chatbob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulsering: {
          "0%": { transform: "scale(0.6)", opacity: "0.5" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        tabprogress: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
      animation: {
        blobfloat: "blobfloat 16s ease-in-out infinite",
        chatbob: "chatbob 5s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        pulsering: "pulsering 1.8s infinite",
        tabprogress: "tabprogress 6s linear forwards",
      },
    },
  },
  plugins: [],
};
