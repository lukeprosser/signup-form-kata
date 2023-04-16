/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          red: 'hsl(0, 100%, 74%)',
          green: 'hsl(154, 59%, 51%)',
        },
        accent: {
          blue: 'hsl(248, 32%, 49%)',
        },
        neutral: {
          100: 'hsl(246, 25%, 77%)',
          900: 'hsl(249, 10%, 26%)',
        },
      },
      dropShadow: {
        custom: '0px 8px 0px rgb(0,0,0,0.15)',
      },
      backgroundImage: {
        intro: "url('../src/assets/images/bg-intro-desktop.png')",
      },
    },
  },
  plugins: [],
};
