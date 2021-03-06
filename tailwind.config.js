/* eslint-env node */
module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: '#ff9e3b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
