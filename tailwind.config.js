module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-hero': 'url(\'./src/public/images/loginImage.png\')',
      },
    },
  },
  plugins: [],
}
