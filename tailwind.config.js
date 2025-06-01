/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,css}', 
    './src/components/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
      colors: {
        olive:    { 300: '#8A9C63', 600: '#556B2F' },
        cream:    {  50: '#F8F6F0', 100: '#ECE9E0' },
        burnt:    { 500: '#BE5A32' },
        teal:     { 400: '#4FF4E4' },
        charcoal: { 700: '#444444', 900: '#212121' },
      },
      fontFamily: {
        display: ['Space Grotesk','Helvetica Neue','sans-serif'],
        body:    ['IBM Plex Sans','Segoe UI','sans-serif'],
        mono:    ['JetBrains Mono','monospace'],
      },
      borderRadius: { DEFAULT: '0.375rem' },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};

