import pageLoaded from './pageLoaded'
import homePage from './modules/homePage'
import winesPage from './modules/winesPage'
import contactPage from './modules/contactPage'

const contentContainer = document.getElementById('content')
let addedContent = homePage()

init()

function listeners(){
    const tabs = document.querySelectorAll('.navLink')
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'))
            tab.classList.add('active')
            addedContent.remove()
            addedContent = tab.dataset.tab == 'home' ? homePage() : tab.dataset.tab == 'wines' ? winesPage() : contactPage()
            contentContainer.appendChild(addedContent)
        })
    })
}

function init(){
    pageLoaded()
    contentContainer.appendChild(addedContent)
    listeners()
}



