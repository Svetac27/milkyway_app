/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-background': '#1d252d',
        primary: '#3b82f6',
        secondary: '#10b981',
        'text-dark': '#1f2937',
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
      }
    }
  },
  plugins: []
};
