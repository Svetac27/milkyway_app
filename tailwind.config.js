/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f5f5f5',
        secondary: '#10b981',

        'darkest-grey': '#1D252D',
        'dark-grey': '#888E97',
        grey: '#B8BCC2',
        'light-grey': '#D9D9D9',
        'lightest-grey': '#F5F6F6',
        white: '#FFFFFF',

        red: '#E40046',
        blue: '#588AFF',
        green: '#5EA257',
        yellow: '#DC7F38',

        text: '#1D252D',
        'text-light': '#f5f5f5',
        backshade: '#00000080'
      },
      boxShadow: {
        custom: '0 12px 48px rgba(255, 255, 255, 0.18)',
        'custom-reverse': '0 -12px 48px rgba(255, 255, 255, 0.18)'
      },
      fontFamily: {
        cera: '"Cera", sans-serif',
        'cera-light': '"Cera Light", sans-serif',
        'cera-semibold': '"Cera Medium", sans-serif',
        'cera-bold': '"Cera Bold", sans-serif'
      },
      screens: {
        mobile: { max: '767px' },
        tablet: { min: '768px', max: '1023px' },
        desktop: { min: '1024px' }
      }
    }
  },
  plugins: []
};
