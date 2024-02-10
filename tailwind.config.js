/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
      backgroundImage: {
        'hero-bg': "url('../src/assets/images/hero-bg.jpg')",
        'testimonials': "url('../src/assets/images/banner1.jpg')",
        'testimonials2': "url('../src/assets/images/banner2.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

