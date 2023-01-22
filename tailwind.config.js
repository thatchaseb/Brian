/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
          colors: {
            prim:'#EFE2D9',
            navy:'#0b003d',
            deep: {
              100: '#222b1b',
              200: '#302c16',
            },
            kack: {
              100: '#d9d3af',
              200: '#cdc697',
              300: '#c2b87e',
              400: '#b7ab66',
              500: '#a99d50',
              600: '#918644',
              700: '#797039',
              800: '#61592d',
              900: '#484322',
            },
            olive:{
              100: '#c1d1b7',
              200: '#afc3a1',
              300: '#9cb58b',
              400: '#8aa775',
              500: '#779860',
              600: '#668353',
              700: '#556d45',
              800: '#445737',
              900: '#334129',
            }
          }

          
        }
  },
  plugins: [],
}
