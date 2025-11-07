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
        'background': '#E9ECEF',  
        'white': '#FFFFFF',      

        'text-main': '#333333',  
        'text-muted': '#495057', 
        
        'primary': '#5AA7CE',     
        'secondary': '#028BCA',   

        'secondary-hover': '#C3E6F9', 
        'accent-light': '#E7F5FC',
      },
    },
  },
  
  plugins: [],
};