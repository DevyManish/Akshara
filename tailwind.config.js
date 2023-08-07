/** @type {import('tailwindcss').Config} */


export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: ['flowbite/plugin'],
}

module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [ require('flowbite/plugin')],
  
};


