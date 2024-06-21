import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height:{
        "128":"32rem",
        "196":"48rem",
        "256":"64rem",
        "512":"128rem"
      },
      width:{
        "128":"32rem",
        "196":"48rem",
        "256":"64rem",
        "512":"128rem"
      }
    },
  },
  plugins: [],
};
export default config;
