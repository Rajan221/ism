/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        color1: "#09488c",
        color2: "#ec1c24",
        color3: "#1e96b3",
        color4: "#35789f",

        color5: "#1997b2",
        color6: "#327799",
        color7: "#1997b0",
        color8: "#23d2f5",
      },
      height: {
        110: "27rem",
        128: "32rem",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
