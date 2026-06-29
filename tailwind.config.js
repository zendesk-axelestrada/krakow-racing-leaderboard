/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'racing-red': '#e10600',
        'racing-dark': '#15151e',
        'racing-darker': '#0d0d0f',
        'racing-gray': '#38383f',
        'racing-light-gray': '#949498',
      },
      fontFamily: {
        'formula': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
