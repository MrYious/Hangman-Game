/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-desktop': "url('/background-desktop.svg')",
        'bg-mobile': "url('/background-mobile.svg')"
      }
    },
    fontFamily: {
      sans: ['Mouse Memoirs', 'sans-serif']
    }
  },
  plugins: [],
}

