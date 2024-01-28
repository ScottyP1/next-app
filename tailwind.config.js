/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'RED': '#E50914',
        'FILM': 'rgba(0, 0, 0, 0.518)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'header': "linear-gradient(to top, #0000004d, #000004), url('../public/images/header-img.jpg')",
        'promo': "radial-gradient(120.35% 220% at 49.86% -6.29%, #e50914 0%, #0e1b4f 46.15%, #0d1121 100% )",
        'notFound': "url('../public/images/not-found.png')"
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}
