/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#000000",
        textColor: "#f1f1f1",
        gridsColor: "#131313",
        gradientFrom: "#6457C6",
      },
      fontFamily: {
        sans: ["var(--font-major)"],
      },
    },
  },
  plugins: [],
}
