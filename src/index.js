import { homePage } from './modules/homePage'
import { navbar } from './modules/navbar'

const contentContainer = document.getElementById('content')
const navLink = navbar().querySelectorAll('.navLink a')

navLink.forEach(link => {
    link.addEventListener('click', )
})

contentContainer.append(navbar())
contentContainer.append(homePage())
