/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight:{
        'displayMobile': 'calc(100dvh - 82px)',
        'displayTablet&Desktop': 'calc(100vh - 92px)',
      }
    },
  },
  plugins: [],
}