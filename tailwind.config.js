/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        myRosePearl: "#EF2A82",
        myBunting: "#172755",
        myWildBlueYonder:"#8794BA",
        myAzureRadiance: "#0088F0",
        myWhisper: "#EEEEF6",
        myZircon: "#F8F9FF",
        myPeriwinkle: "D3D9E9",
        myKashmirBlue: "#465B95",
        myBlueZodiac: "#0F1F4B",
        myAstronaut: "#2A407C",
        myWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
}
