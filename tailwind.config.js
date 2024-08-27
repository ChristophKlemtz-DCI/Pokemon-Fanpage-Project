/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Beispiel für eine benutzerdefinierte Farbpalette
        pokered: {
          light: '#ed4545',
          DEFAULT: '#cc0000',
          dark: '#610303',
        },
        pokeblue: {
          light: '#599df0',
          DEFAULT: '#3d7dca',
          dark: '#003153',
        },
        // Weitere Farben hinzufügen
        pokeyellow: {
          light: '#ffde61',
          DEFAULT: '#ffcb05',
          dark: '#b3a125',
        },
      },
    },
  },
  plugins: [],
}
