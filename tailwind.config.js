/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1a1a1a",
      },
    },
  },
  // 禁用tailwind的全局样式
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
