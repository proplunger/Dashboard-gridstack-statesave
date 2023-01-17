module.exports = {
  content: [
    './views/**/*.handlebars',
    './views/*.handlebars',
    './public/js/*.js',
  ],
  theme: {
    extend: {
      height: (theme) => ({
        leftover: 'calc(100vh - 5rem)',
      }),
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
