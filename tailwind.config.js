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
          red: {
            500: 'hsl(0, 100%, 74%)',
          },
          green: {
            100: 'hsl(154, 59%, 61%)',
            500: 'hsl(154, 59%, 51%)',
            900: 'hsl(154, 59%, 31%)',
          },
        },
        accent: {
          blue: {
            500: 'hsl(248, 32%, 49%)',
          },
        },
        neutral: {
          100: 'hsl(246, 25%, 77%)',
          900: 'hsl(249, 10%, 26%)',
        },
      },
      dropShadow: {
        base: '0px 8px 0px rgb(0,0,0,0.15)',
      },
      backgroundImage: {
        intro: "url('../src/assets/images/bg-intro-desktop.png')",
      },
    },
  },
  plugins: [],
};
