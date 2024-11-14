import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#06020f",
        font: "#b3b1ad",
        title: "#c2d94c",
        anchor: "#39bae6",
        td:"#626A73",
        border: "#626A73",
        hoverTable: '#101C2E',
        hoverContentTable:'#c2d94c'
      },
      fontSize: {
        base: "14px",
        "h1-size": "32px",
      },
      padding: {
        "body-top": "4rem",
        "body-right": "3rem",
        "body-bottom": "3rem",
        "body-left": "3rem",
      },
    },
  },
  plugins: [],
};

export default config;
