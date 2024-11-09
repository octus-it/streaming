/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      },
      screens: {
        'xs': '300px',     // Très petits écrans (téléphones de petite taille)
        'sm': '640px',     // Petits écrans (téléphones de taille standard)
        'md': '768px',     // Moyens écrans (tablettes en orientation paysage)
        'lg': '1024px',    // Grands écrans (ordinateurs portables - "laptop")
        'xl': '1280px',    // Très grands écrans (moniteurs de bureau - "desktop")
        '2xl': '1536px',   // Écrans extra larges (grands moniteurs ou écrans 4K)
      },

      darkMode: 'class',
      colors:{
        redCustom:{
          'red-45': '#E50000',
          'red-50': '#FF0000',
          'red-55': '#FF1919',
          'red-60': '#FF3333',
          'red-80': '#FF9999',
          'red-90': '#FFCCCC',
          'red-95': '#FFE5E5',
          'red-99': '#FFFAFA'
        },
        darkCustom:{
          'dark-06': '#0F0F0F',
          'dark-08': '#141414',
          'dark-10': '#1A1A1A',
          'dark-12': '#1F1F1F',
          'dark-15': '#262626',
          'dark-20': '#333333',
          'dark-25': '#404040',
          'dark-30': '#4C4C4C'
        },
        greyCustom:{
          'grey-60': '#999999',
          'grey-65': '#A6A6A6',
          'grey-70': '#B3B3B3',
          'grey-75': '#BFBFBF',
          'grey-90': '#E4E4E7',
          'grey-95': '#F1F1F3',
          'grey-97': '#F7F7F8',
          'grey-99': '#FCFCFD'
        }
      }
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}
