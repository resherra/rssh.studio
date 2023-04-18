/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#F7CED7",
        secColor: "#000000",
        textColor: "#ffffff",
        mainGray: "#D4D4D8",
      },
      fontFamily: {
        sans: ["var(--font-domaine)"],
        mono: ["var(--font-mark)"],
      },
    },
  },
}
