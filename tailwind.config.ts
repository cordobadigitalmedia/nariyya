/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      largemobile: "390px",
      // => @media (min-width: 640px) { ... }

      tablet: "640px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      custombp: { raw: "(max-height: 1234px),(min-width:920px)" },
    },
    extend: {
      fontFamily: {
        naskh: ['var(--font-arabic)'],
        serif: ['var(--font-serif)'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
