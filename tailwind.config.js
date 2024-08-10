/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // Custom screen breakpoints for responsive design.
      screens: {
        "Large_Mobile_Design": { "max": "426px", "min": "374px" }, // Styles for large mobile view.
        "Small_Mobile_Design": { "max": "374px" } // Styles for small mobile view.
      },
      // Custom colors for use in the project.
      colors: {
        "Yellow": "hsl(47, 88%, 63%)", // Pure yellow color.
        "White": "hsl(0, 0%, 100%)", // Pure white color.
        "Grey": "hsl(0, 0%, 50%)", // Pure grey color.
        "Black": "hsl(0, 0%, 7%)" // Pure black color.
      },
      // Custom font family to be used in the project.
      fontFamily: {
        "Figtree": ["Figtree", "sans-serif"] // Figtree font with fallback to sans-serif
      }
    },
  },
  plugins: [],
}

