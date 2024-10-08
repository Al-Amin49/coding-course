/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B0C4D',
        secondary: '#EAE34A',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #241457 2.27%, #4F2BBD 102.95%)',
      },
    },
  },
  plugins: [],
}