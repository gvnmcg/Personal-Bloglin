module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
       'blue-clouds': "url('/assets/blue-clouds.jpg')",
       'sands-fractal': "url('/assets/sands-fractal.jpg')",
      })
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
