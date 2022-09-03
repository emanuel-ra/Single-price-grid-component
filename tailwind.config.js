/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:theme => ({
        'cyan':'var(--cyan)' ,
        'bright-yellow':'var(--bright-yellow)' ,
        'light-gray':'var(--light-gray)' ,
        'grayish-blue':'var(--grayish-blue)' ,
        
      }),
      fontFamily:theme => ({
        'Karla' : ['Karla', 'sans-serif']
      }),
      textColor:theme => ({
        'cyan':'var(--cyan)' ,
        'bright-yellow':'var(--bright-yellow)' ,
        'light-gray':'var(--light-gray)' ,
        'grayish-blue':'var(--grayish-blue)' ,
      }),
    },
  },
  plugins: [],
}
