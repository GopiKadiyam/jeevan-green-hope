module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './public/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark"],
  },
}; 