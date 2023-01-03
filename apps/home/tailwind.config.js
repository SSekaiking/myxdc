// @ts-check
/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  presets: [require('@myxdc/ui/tailwind')],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/{,!(node_modules)/**/}*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
}

module.exports = tailwindConfig
