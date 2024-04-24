/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 0 10px rgba(0,0,0,.1)",
      },

      animation: {
        enterHome: "enterHome 1s ease-in-out",
        navIn: "navIn 1s ease-in-out"
      },

      keyframes: {
        enterHome: {
          "0%": {
            opacity:0.10,
            top: "15%",
          },
          "50%": {
            top: "-5%",
          },
          "100%": {
            opacity:1,
            top: 0,
          }
        },

        navIn: {
          from: {
            right:"-15%",
          },
          to: {
            right:0,
          }
        },
      },

      backgroundImage: {
        bgImage1: "url('/src/img/bg-1.webp')",
        bgImage2: "url('/src/img/bg-2.webp')",
        bgImage3: "url('/src/img/bg-3.webp')",
        bgImageContact: "url('/src/img/bg-contact.webp')"
      },
    },
  },
  plugins: [],
}

