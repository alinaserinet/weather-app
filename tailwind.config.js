/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                secondaru: '#C4C4C4',
                dark: '#363B64',
                purple: '#CF68FF',
                pink: '#FF54B0',
                orange: '#FF7F6F',
                softOrange: '#FF9F5A',
                gradasi: {
                    light: '#294F97',
                    dark: '#0C386C',
                },
                blue: {
                    dark: '#3C6FD1',
                    light: '#7CA9FF',
                },
            },
            fontSize: {
                vs: '.65rem',
            },
            animation: {
                'bounce-fast': 'bounce 700ms linear infinite',
            },
        },
    },
    plugins: [],
}
