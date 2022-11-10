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
    container: {
      center: true,
      // default breakpoints but with 40px removed
      screens: {
        sm: '440px',
        md: '728px',
        lg: '936px',
        xl: '1180px',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',

      },
      colors: {
        myRosePearl: "#EF2A82",
        myBunting: "#172755",
        myWildBlueYonder: "#8794BA",
        myAzureRadiance: "#0088F0",
        myWhisper: "#EEEEF6",
        myZircon: "#F8F9FF",
        myPeriwinkle: "D3D9E9",
        myKashmirBlue: "#465B95",
        myBlueZodiac: "#0F1F4B",
        myAstronaut: "#2A407C",
        myWhite: "#FFFFFF",
      },
      backgroundImage: {
        "my-top-lg": "url('/img/background-top-lg.png')",
        "my-top-xs": "url('/img/background-top-xs.png')",
        "my-bottom-lg": "url('/img/background-bottom-lg.png')",
        "my-bottom-xs": "url('/img/background-bottom-xs.png')",
      },
    },
  },
  plugins: [],
}
