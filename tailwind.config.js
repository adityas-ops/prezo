/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontFamily:{
      "GeneralSans":['GeneralSans','sans-serif'],
      "Inter":['Inter', 'sans-serif']
     },
     colors:{
      "brand-purple":"#ab66ff"
     }
    },
  },
  plugins: [],
}
