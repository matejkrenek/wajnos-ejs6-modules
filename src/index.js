import pageLoaded from './pageLoaded'
import homePage from './modules/homePage'
import winesPage from './modules/winesPage'
import contactPage from './modules/contactPage'

const contentContainer = document.getElementById('content')
let addedContent = homePage()

const init = () => {
    pageLoaded()
    contentContainer.appendChild(addedContent)
}

init()
