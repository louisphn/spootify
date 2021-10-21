module.exports = {
  purge: {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    safelist: [
      'gray-300',
      'red-300',
      'yellow-300',
      'green-300',
      'blue-300',
      'indigo-300',
      'purple-300',
      'pink-300',
      'gray-300',
      'red-300',
      'yellow-300',
      'green-300',
      'blue-300',
      'indigo-300',
      'purple-300',
      'pink-300',
      'red-300',
      'yellow-300',
      'green-300',
      'lg:absolute',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), 'postcss-import', 'tailwindcss', 'autoprefixer'],
}
