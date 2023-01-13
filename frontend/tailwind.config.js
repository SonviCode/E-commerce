/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(100px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(100px, 1fr))",
        "footer": "repeat(auto-fit, minmax(200px, 1fr))",
      },
      fontSize: {
        xlTitle: "clamp(36px, 7vw, 78px)",
        lgTitle: "clamp(36px, 7vw, 52px)",
        mdTitle: "clamp(25px, 7vw, 45px)",
        smTitle: "clamp(12px, 4vw, 30px)",
      },
      colors: {
        main: "#ea580c"
      }
    },
  },
  plugins: [],
};
