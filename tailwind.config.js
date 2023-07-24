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
      backgroundColor: {
        colorHome: '#282934',
        buttonColor: '#6F6DFF',
        line: '#444',
      },
    },
    colors: {
      'primary-1': '#6F6DFF',
      'primary-2': '#282934',
      'primary-3': '#020232',
      'white': '#FDFDFD',
      'grey-scale-1': '#EEE',
      'grey-scale-2': '#D0D0D0',
      'grey-scale-3': '#666',
      'grey-scale-4': '#444',
      'gray-light': '#d3dce6',
    },
    screens: {
      'sm': '400px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
