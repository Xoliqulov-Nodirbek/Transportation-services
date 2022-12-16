/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      tablet: "850px",
      750: "750px",
      500: "500px",
    },
    extend: {
      backgroundImage: {
        servicesBg: "url('/Images/ServicesImg/serBg.png')",
        learnMoreAfterImg: "url('/Images/ServicesImg/turn.svg')",
        learnMoreModalImg: "url('/Images/ServicesImg/turn2.svg')",
        servicesCommonBg: "url('/Images/ServicesImg/triangle.svg')",
        servicesCommonBg2: "url('/Images/ServicesImg/triangle2.svg')",
        shippingBeforeImg: "url('/Images/shippingImgs/beforeImg.svg')",
        heroBg: "url('/Images/Hero_Img/hero_bg.png')",
        heroBgMobile: "url('/Images/Hero_Img/hero_bg-mobile.png')",
        weDoBg: "url('/Images/wedoImgs/weDoBg.png')",
        getTouch_bg: "url('/Images/getTouch/touch_bg.png')",
        getTouch_bg_mb: "url('/Images/getTouch/touch_bg_mb.png')",
      },
      backgroundColor: {
        bg_color: "#FF7D44",
        weDoNumber: "#D9D9D9",
        buttonHover: "rgba(255, 125, 68, 0.15)",
        mostButtonHover: "#C24F1D",
        heroFormMoblie: "#1F1F1F",
        blurForm: "rgba(90, 90, 90, 0.5)",
        quoteform: "rgba(58, 58, 58, 0.5)",
      },
      boxShadow: {
        selectShadow:
          " 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
      },
      colors: {
        orange: {
          main: "#FF7D44",
        },
        gray: {
          text: "rgba(255, 255, 255, 0.68)",
          line: "#E0E0E0",
        },
        black: {
          dark: "#182F43",
          servicesTextColor: "#000",
          serModalText: "rgba(0, 0, 0, 0.68)",
          header_bg: "rgba(0, 0, 0, 0.3)",
          hero_Form_Bg: "rgba(58, 58, 58, 0.5)",
          line_bg: "rgba(224, 224, 224, 1)",
          shippingAfter: "rgba(46, 51, 104, 0.15)",
          gray: "rgba(255, 255, 255, 0.8)",
          inputPlaceholderColor: "rgba(0, 0, 0, 0.87)",
          footer_bg: "#282828",
          modal__tel: "gba(0, 0, 0, 0.38)",
        },
        red: {
          error: "#D83B3B",
          touch: "#1F1F1F",
        },
      },
      maxWidth: {
        hero_Form_W: "450px",
        heroRightW: "576px",
        shippingTop: "800px",
        weDoContent: "330px",
        738: "738px",
        543: "543px",
        354: "354px",
        155: "155px",
        500: "500px",
        166: "166px",
        449: "449px",
        500: "500px",
        543: "693px",
      },
      maxHeight: {
        197: "197px",
        525: "525px",
        131: "131px",
      },
      width: {
        formWidth: "464px",
        servicesHero: "543px",
        weDoContent: "325px",
        151: "151px",
        245: "245px",
        450: "450px",
        354: "354px",
        330: "330px",
      },
      height: {
        formHeight: "619px",
        45: "45px",
        43: "43px",
        112: "112px",
        100: "100px",
        458: "458px",
        450: "450px",
        56: "56px",
      },
      margin: {
        10: "10px",
        40: "40",
        16: "16px",
        33: "33px",
        30: "30px",
        50: "50px",
        40: "40px",
        60: "60px",
        83: "83px",
        186: "186px",
      },
      padding: {
        2: "2px",
        16: "16px",
        80: "80px",
        160: "160px",
        25: "25px",
        30: "30px",
        70: "70px",
        75: "75px",
        196: "196px",
        118: "118px",
        173: "173px",
        100: "100px",
        120: "120px",
        30: "30px",
        114: "114px",
        136: "136px",
      },
      fontSize: {
        15: "15px",
        28: "28px",
        35: "35px",
        56: "56px",
        35: "35px",
        20: "20px",
        15: "15",
        aboutTitle: "38px",
        hero_Form_W: "450px",
        shippingTop: "800px",
        weDoContent: "325px",
        738: "738px",
        354: "354px",
        155: "155px",
        166: "166px",
        38: "38px",
      },
      lineHeight: {
        68: "68px",
        42: "42px",
        46: "46px",
      },
      borderRadius: {
        3: "3px",
        10: "10px",
      },
      borderColor: {
        buttonHoverBorder: "#FF7D44",
      },
    },
  },
  plugins: [],
};
