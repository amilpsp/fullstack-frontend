/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1020px',
            xl: '1440px'
        },
        extend: {
            colors: {
                white: '#ffffff',
                bordercol: '#303030',
                txtbright: '#CFCFCF',
                txtdark: '#8E8E8E',
                bgcol: '#060606'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },
            spacing: {
                180: '32rem'
            }
        }
    },
    plugins: [
        // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
        require('tailwindcss/plugin')(({ addVariant }) => {
            addVariant('search-cancel', '&::-webkit-search-cancel-button')
        })
    ]
}
