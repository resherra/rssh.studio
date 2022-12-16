/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      clipPath: {
        mypolygon: "polygon(0% 7%, 100% 0%, 100% 100%, 0% 100%)",
    },
      fontFamily: {
        'sans': ['montserrat', 'Segoe UI', 'Roboto']
          },
      extend: {
        colors: {
          'mainColor': '#000000',
          'textColor': '#f1f1f1',
          'gridsColor': '#131313',
          'gradientTo': '#65379B',
          'gradientFrom': '#6457C6',
        },
      },
    },

    plugins: [
      require('tailwind-clip-path'),
    ],
}