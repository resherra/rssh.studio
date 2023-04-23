/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
<<<<<<< HEAD
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,ts,jsx,tsx}",
=======
    "./src/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
>>>>>>> e1ed34d (/src)
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
