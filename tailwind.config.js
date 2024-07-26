module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        VT323: ["VT323", "monospace"]
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'green-500',
            },
          },
        },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
