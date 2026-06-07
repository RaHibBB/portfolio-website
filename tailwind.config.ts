import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050607",
        panel: "#0b1012",
        line: "rgba(255,255,255,0.12)",
        accent: "#21f6d4"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(33, 246, 212, 0.18)",
        soft: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" }
        },
        grain: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "25%": { transform: "translate3d(-1%, 1%, 0)" },
          "50%": { transform: "translate3d(1%, -1%, 0)" },
          "75%": { transform: "translate3d(1%, 1%, 0)" }
        }
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        grain: "grain 8s steps(6) infinite"
      }
    }
  },
  plugins: []
};

export default config;

