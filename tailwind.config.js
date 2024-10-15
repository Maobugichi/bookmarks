/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.{html,js}",
    
  ],
  theme: {
    container: {
      center:true
    },
    colors: {
      softBlue: "hsl(231, 69%, 60%)",
      softRed: "hsl(0, 94%, 66%)",
      grayishBlue: "hsl(229, 8%, 60%)",
      darkBlue: "hsl(229, 31%, 21%)",
      white: "#fff"
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
      height: 'fit-content',
      paddingBottom:'10px', 
      opacity: 1, 
      fontSize: '15px', 
    },

        }
      },
      animation: {
        heightAnimation: 'heightAnimation 0.5s  ease-in-out forwards',
      },

    },
  },
  plugins: [],
}

