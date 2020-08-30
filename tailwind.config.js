module.exports = {
    theme: { // defaults to these values
    textIndent: (theme, { negative }) => ({
        sm: '2rem',
      })},
  variants: { // all the following default to ['responsive']
    textIndent: ['responsive'],
  },
 
  plugins: [
    require('tailwindcss-text-indent')(), // no options to configure
  ],
}
