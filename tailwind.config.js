 /** @type {import('tailwindcss').Config} */

export default {
     darkMode:"class",
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
       
        colors:{
            primary:"#1E293B",
             secondary: '#F59E42',
        accent: '#38BDF8',
        neutral: '#F3F4F6',
        }
     },
   },
   plugins: [],
 }