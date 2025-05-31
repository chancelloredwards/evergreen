// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        olive:   { 300: '#8A9C63', 600: '#556B2F' },
        cream:   {  50: '#F8F6F0', 100: '#ECE9E0' },
        burnt:   { 500: '#BE5A32' },
        teal:    { 400: '#4FF4E4' },
        charcoal:{ 700: '#444444', 900: '#212121' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Helvetica Neue', 'sans-serif'],
        body:    ['"IBM Plex Sans"', 'Segoe UI', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: { DEFAULT: '0.375rem' }, // 6px
    },
  },
  plugins: [],
};

