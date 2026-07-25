/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        feathers: {
          green: '#1f7a3f',
          leaf: '#3fae5c',
          blue: '#1d4ed8',
        },
      },
    },
  },
  plugins: [],
}
