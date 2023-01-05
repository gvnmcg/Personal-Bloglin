module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
       'blue-clouds':    "url('/assets/clouds/blue-clouds.jpg')",
       'sands-fractal':  "url('/assets/fractal/sands-fractal.jpg')",
       'evening-clouds': "url('/assets/clouds/evening-clouds.jpg')",
      })
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
