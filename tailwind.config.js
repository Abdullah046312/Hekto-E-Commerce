/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      fontFamily:{
        Lato:['Lato', 'sans-serif']
       
        
      },

      fontFamily:{
        Josefin_Sans:['Josefin Sans', 'sans-serif']
       
        
      },



      // backgroundImage:{
      //   'banner_pic': "url('./assets/banner.png')",
      // },
    },
  },
  plugins: [],
}