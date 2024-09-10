/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', 
  content: [
    './src/app/*.{html,ts}'
  ],
  purge: [
    './src/app/*.{html,ts}',  // Asegúrate de incluir todos los archivos relevantes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

