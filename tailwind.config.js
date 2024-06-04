/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        white: '#ffffff',
        bordercol: '#ffffff0f',
        txtbright: '#ffffffc0',
        txtdark: '#ffffff66',
        bgcol: '#060606',
        borderfocus: '#ffffff20',
        odark: '#000000CC',
        sec: '#E21847',
        ig1: '#0043E6',
        ig2: '#E70DB2',
        ig3: '#FFC33D',
        yt1: '#FF2E2E',
        yt2: '#A90000',
        x1: '#101010',
        x2: '#404040',
        fb1: '#4267B2',
        fb2: '#1847A7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans'],
      },
      spacing: {
        180: '32rem',
      },
      dropShadow: {
        test: '0 0px 25px rgba(170, 200, 255, 0.25)',
        red: '0 0px 15px rgba(237, 228, 236, 0.25)',
        blue: '0 0px 12px rgba(200, 200, 255, 0.25)',
      },
      boxShadow: {
        test: '0 0px 10px 0 rgba(237, 228, 236, 0.05)',
        test2: '0 0 25px 0px rgba(255, 255, 255, 0.05)',
        test3: '0 0 8px 0px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
    require('tailwindcss/plugin')(({ addVariant }) => {
      addVariant('search-cancel', '&::-webkit-search-cancel-button');
    }),
  ],
};
