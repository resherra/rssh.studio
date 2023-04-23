/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        mainColor: "#F7CED7",
        secColor: "#000000",
        textColor: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-domaine)"],
        mono: ["var(--font-mark)"],
=======
<<<<<<< HEAD
        textColor: "#f1f1f1",
      },
      fontFamily: {
        sans: ["var(--font-major)"],
=======
        mainColor: "#F7CED7",
        secColor: "#000000",
        textColor: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-domaine)"],
        mono: ["var(--font-mark)"],
>>>>>>> e1ed34d (/src)
>>>>>>> main
      },
    },
  },
}
