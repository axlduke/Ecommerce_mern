/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'xs': '400px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        'xxl': '1360px',
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors:{
        gold: '#FFD700',
        silver: '#C0C0C0',
        bronze: '#CD7F32',
      },
    },
  },
  plugins: [],
}