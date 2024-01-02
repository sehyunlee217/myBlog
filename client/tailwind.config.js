/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // traditional colors from https://www.phpschool.com/gnuboard4/bbs/board.php?bo_table=tipntech&wr_id=38359
        primary: "#245441", // traditional korean green / 전통 하염색
        primary_dark: "#1C2B2B",
        background: "#e4f1ee",
        font_dark: "#E7E6D2", // traditional korean white / 전통 유배색
        korean_red: "#F15B5B", // traditional korean red / 전통 홍색,
        korean_oak: "#9ED6C0", // traditional green/blue color / 전통 옥색
        korean_umber: "#9F494C", // traditional uber / 전통 적토색
        korean_orange: "#EA8474", // traditional orange / 전통 담주색
        korean_blue: "#1583AF", // traditional blue / 전통 흑청색
        korean_lightblue: "#18B4E9", // traditional light blue / 전통 청벽색
        korean_yellow: "#F1A55A", // traditional yellow / 송화색
        korean_yellowgreen: "#16AA52" // traditional yellowgreen / 명록색
      },
      fontFamily: {
        "noteworthy": ["Noteworthy", "serif"],
        "main": ["Noto Sans KR", "serif"],
        "roboto": ["Roboto Condensed", "serif"],
        "kr_reg": ["Noto Serif KR", "serif"],
        "crimson": ["Crimson Text", "serif"]
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    plugins: [],
  }
};