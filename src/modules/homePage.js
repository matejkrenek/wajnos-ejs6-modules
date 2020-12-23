import { Element } from '../newElement'

const homePage = () => {
    let homePage = new Element('section', 'homeSection').createElement()
    let h1 = new Element('h1', 'title').createElement()
    let p = new Element('p', 'text').createElement()
    let a = new Element('a', 'btn').createElement()

    h1.innerText = 'Find your wine.'
    p.innerText = 'We strive to produce vines that reflect  both traditions and  innovated approach, without compromisisng top quality of the drink. '
    a.innerText = 'read more'

    homePage.append(h1)
    homePage.append(p)
    homePage.append(a)

    return homePage

}

export {
    homePage
} 