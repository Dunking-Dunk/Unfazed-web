module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {

    extend: {
      color: {
        "primary-color": "var(--primary-color)",
        "black-color": "var(--black-color)",
        "white-color": "var(--white-color)",
      },
        fontFamily: {
      'mano': ['var(--font-mano)']
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
