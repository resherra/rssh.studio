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
          'mainColor': '#121212',
          'textColor': '#f1f1f1',
          'gridsColor': '#282828',
          'gradientFrom': '#ff9966',
          'gradientTo': '#ff5e62',
          // 'gradientFrom': '#A435FF',
          // 'gradientTo': '#6358EE',
        },
      },
    },

    plugins: [
      require('tailwind-clip-path'),
    ],
}