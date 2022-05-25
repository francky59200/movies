import './styles/main.scss'
import logoPath from './images/logo-black.svg'

const app = document.querySelector('#app')

const intro = 'Welcome to the Atecna Front-End Academy training starter kit'

const mainDom = document.createElement('main')
const introDom = document.createElement('p')

introDom.textContent = intro

const logo = document.createElement('img')
logo.src = logoPath
logo.classList.add('max-w-md')

const mainClassList = [
  'px-4',
  'py-10',
  'container',
  'mx-auto', 'flex',
  'justify-center',
  'flex-col',
  'content-center',
  'items-center',
  'text-center',
]

mainDom.classList.add(...mainClassList)

mainDom.appendChild(logo)
mainDom.appendChild(introDom)

app.appendChild(mainDom)

