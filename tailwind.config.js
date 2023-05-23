module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primaryWhite': '#e5e5e5',
        'secondaryWhite': '#b3b3b3',
        'primaryGray': '#333333',
        'secondaryGray': '#454545',
        'tertiaryGray': '#2a2a2a',
        'backgroundGray': '#141414'
      },
      textShadow: {
        md: '2px 2px 4px rgb(0 0 0 / 45%);',
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
        'test-gradient': 'linear-gradient(0deg,#181818,transparent 50%)'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    require('tailwindcss-textshadow'),
  ],
}
