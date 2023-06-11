/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "system-navy": "#1F2B37",
        "system-blue": "#4F76F6",
        "system-green": "#77F2A1",
        "system-white": "#F9F9F9",
      },
      screens: {
        "2xs": "350px",
        xs: "480px",
      },
    },
  },
  plugins: [],
};
