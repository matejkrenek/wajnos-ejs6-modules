import { Element } from '../newElement'

const navbar = () => {
    const navbar = new Element('nav', 'navbar').createElement()
    const h3 = new Element('h3', 'logo').createElement()
    const ul = new Element('ul', 'navList').createElement()
    const i = new Element('i', 'ri-shopping-bag-2-line').createElement()
    

    h3.innerText = 'Wajnos.'
    ul.innerHTML = `
        <li class="navLink"><a>home</a></li>
        <li class="navLink"><a>contact</a></li>
        <li class="navLink"><a>wines</a></li>
    `

    navbar.append(h3)
    navbar.append(ul)
    navbar.append(i)

    return navbar

}

export {
    navbar
} 