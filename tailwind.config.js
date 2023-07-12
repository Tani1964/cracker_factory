/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary1": "rgba(242, 95, 58, 1)",
        "primary2": "rgba(35, 44, 81, 1)",
        "primary3": "rgba(143, 148, 167, 1)",
        "dark-bg": "rgba(29, 30, 37, 1)",
        "grey-bg": "rgba(249, 249, 249, 1)",
      },
      boxShadow: {
        '3xl': '0 0.75em 0.5em -0.37em hsla(12, 88%, 59%, 0.5)',
      },
      width:{
        'tests': '520.594px',
      },
    }
  },
  plugins: [],
}