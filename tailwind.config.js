/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'mainColor': '#121212',
        'textColor': '#f1f1f1',
        'gridsColor': '#282828'

      },
      clipPath: {
        mypolygon: "polygon(0% 7%, 100% 0%, 100% 100%, 0% 100%)",
    },
      fontFamily: {
        'sans': ['montserrat', 'Segoe UI', 'Roboto']
          },
      extend: {},
    },

    plugins: [
      require('tailwind-clip-path'),
    ],
}