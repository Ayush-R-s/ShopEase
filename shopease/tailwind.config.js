/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',
                secondary: '#ec4899',
                dark: '#0f172a',
            },
            backgroundImage: {
                'gradient-premium': 'radial-gradient(circle at top left, #1e1b4b, #0f172a)',
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
