/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                notoKr: ['var(--font-noto-kr)', 'sans-serif'],
                ptSerif: ['var(--font-pt-serif)', 'Georgia'],
            },
            colors: {
                bg: '#f0f0f0',
                'reg-white': '#fbfcf8',
                'reg-black': '#020403',
                primary: {
                    1: '#e3dbd3',
                    2: '#9cb2a5',
                    3: '#8ba4b3',
                    4: '#c8b7c9',
                    5: '#9d7982',
                    6: '#733236',
                },
                secondary: '',
            },
        },
    },
    plugins: [],
};
