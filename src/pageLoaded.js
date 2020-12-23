import Element from './newElement'

const pageLoaded = () => {
    const contentContainer = document.getElementById('content')

    const navbar = new Element('nav', 'navbar').createElement()
    navbar.innerHTML = `
        <h3 class="logo">Wajnos.</h3> 
        <ul class="navList">
            <li class="navLink active" data-tab="home">Home</li>
            <li class="navLink" data-tab="wines">Wines</li>
            <li class="navLink" data-tab="contact">Contact</li>
        </ul>
        <i class="ri-shopping-bag-2-line"></i>
    `

    contentContainer.appendChild(navbar)

}

export default pageLoaded