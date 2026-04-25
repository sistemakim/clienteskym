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
      colors: {
        'primary': '#c3d6e5',
        'action': '#01b5c1',
        'ink': '#1a1a1a',
        'ink2': '#2b2b2b',
        'paper': '#fafaf7',
        'paper2': '#f3f1ea',
        'gold': '#b8893a',
        'goldSoft': '#e8d9b6',
      },
      boxShadow: {
        'gold': '4px 4px 0 0 #b8893a',
      },
    },
  },
  plugins: [],
};
export default config;
