module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(360deg, #282934 2%, rgba(40, 41, 52, 0.50) 32.40%, rgba(40, 41, 52, 0.30) 53.23%, rgba(40, 41, 52, 0.00) 100%), url('~/public/images/imageLogin.jpeg')",
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
      'success': '#008000',
      'grey-scale-1': '#EEE',
      'grey-scale-2': '#D0D0D0',
      'grey-scale-3': '#666',
      'grey-scale-4': '#444',
      'gray-light': '#d3dce6',
      'red-light': '#FF0000',
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
