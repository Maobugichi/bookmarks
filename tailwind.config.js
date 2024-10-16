/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    
  ],
  theme: {
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
    container: {
      center:true
    },
    colors: {
      softBlue: "hsl(231, 69%, 60%)",
      softRed: "hsl(0, 94%, 66%)",
      grayishBlue: "hsl(229, 8%, 60%)",
      darkBlue: "hsl(229, 31%, 21%)",
      white: "#fff",
      transparentBlue: 'hsla(229, 31%, 21%,0.9)'
    },
    extend: {
      keyframes: {
        'heightAnimation': {
          '0%': { 
          height: '0', 
          opacity: 0, 
          fontSize: '5px', 
    },
    '100%': { 
      height: '180px',
      padding:'10px',
      opacity: 1, 
      fontSize: '15px', 
    },

        },
        'down': {
          '0%': {
            transform: 'translateY(-1200px)'
          }, 
          '100%': {
            transform: 'translateY(0)'
          }
        },
        'up': {
          '0%': {
            transform: 'translateY(0)'
          }, 
          '100%': {
            transform: 'translateY(-1200px)'
          }
        }
      },
      animation: {
        heightAnimation: 'heightAnimation 0.5s  ease-in-out forwards',
        down: 'down 1s ease-in-out forwards',
        up: 'up 1s ease-in-out forwards'
      },

    },
  },
  plugins: [],
}

