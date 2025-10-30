/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    screens: {
      'xl': '1280px', // Desktops médios (padrão do XL)
      'hd': '1920px', // Desktops Full HD
      'qhd': '2560px', // Desktops Maiores (Quad HD)
      '4k': '3840px', // TVs 4K (Ultra HD)
    },

    extend: {
      colors: {
        'dark-text': '#333333',
        'footer-background': '#5AA7CE',
        'foreground': 'var(--foreground)',
      },
    },
  },
  
  plugins: [],
};