/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        weather: '#CBEAE7',
        'weather-darker': 'hsl(174, 42%, 76%)',
      },
    },
  },
  plugins: [],
};
