/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'CircularLight': 'repeating-radial-gradient(rgba(0,0,0,0.6) 2px, rgba(0,0,0,0.0) 5px, rgba(0,0,0,0.0) 100px)',
        'CircularDark': 'repeating-radial-gradient(rgb(139 139 139) 2px, rgba(0,0,0,0.0) 5px, rgba(0,0,0,0.0) 100px)',
        'CircularLightLg': 'repeating-radial-gradient(rgba(0,0,0,0.6) 2px, rgba(0,0,0,0.0) 5px, rgba(0,0,0,0.0) 80px)',
        'CircularDarkLg': 'repeating-radial-gradient(rgb(139 139 139) 2px, rgba(0,0,0,0.0) 5px, rgba(0,0,0,0.0) 80px)',
        'CircularLightMd': 'repeating-radial-gradient(rgba(0,0,0,0.6) 2px, rgba(0,0,0,0.0) 5px, rgba(0,0,0,0.0) 60px)',
        'CircularDarkMd': 'repeating-radial-gradient(rgb(139 139 139) 2px, rgba(0,0,0,0.0) 5px, rgba(0,0,0,0.0) 60px)',
        'CircularLightSm': 'repeating-radial-gradient(rgba(0,0,0,0.6) 2px, rgba(0,0,0,0.0) 5px, rgba(0,0,0,0.0) 40px)',
        'CircularDarkSm': 'repeating-radial-gradient(rgb(139 139 139) 2px, rgba(0,0,0,0.0) 5px, rgba(0,0,0,0.0) 40px)',
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#D6B3BA",
        primaryDark: "#79031D",
      }
    },
    screens:{
      "2xl": {max:"1535px"},
      "xl": {max:"1279px"},
      "lg": {max:"1023px"},
      "md": {max:"767px"},
      "sm": {max:"639px"},
      "xs": {max:"479px"},
      "xli": {min:"1279px"},
      "lgi": {min:"1023px"},

    }
  },
  plugins: [],
}
