/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./Assets/**/*.{html,js}"
  ],
  theme: {
    extend: {

      // 🎨 COLORS
      colors: { 
        primary: '#3a86ff', 
        secondary: '#8338ec', 
        brand: { 
          100: '#f0f9ff', 
          900: '#9ea103',
        },
      },

      // 📏 SPACING
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      // 🔤 FONTS
      fontFamily: { 
        sans: ['Inter', 'sans-serif'], 
        mono: ['Fira Code', 'monospace'],
      },

      // 🔵 BORDER RADIUS
      borderRadius: { 
        xl: '12px', 
        '2xl': '16px', 
        '3xl': '16px',
      }

    },
  },
  plugins: [],
}