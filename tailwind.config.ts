import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@headlessui/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "var(--text)",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
        "right-in": {
          "0%": {
            transform: "translateX(50%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 1.5s ease-in",
        "fade-right": "fade-right 1.5s ease-in",
        "fade-left": "fade-left 1.5s ease-in",
        "right-in": "right-in 0.5s ease-in",
      },
      fontFamily: {
        "great-vibes": ["Great Vibes", ...fontFamily.sans],
        coiny: ["Coiny", ...fontFamily.sans],
        roboto: ["Roboto", ...fontFamily.sans],
        jura: ["Jura", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
