/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#F7CED7",
        secColor: "#000000",
        textColor: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-domaine)"],
        mono: ["var(--font-mark)"],
      },
    },
  },
}
