import Element  from '../newElement'

const homePage = () => {
    const homePage = new Element('section', 'homeSection').createElement()
    const h1 = new Element('h1', 'title').createElement()
    const p = new Element('p', 'text').createElement()
    const a = new Element('a', 'btn').createElement()
    const img = new Element('img', 'wineBottle__image').createElement()
    const ghostDiv = new Element('div', 'ghostDiv').createElement()

    h1.innerText = 'Find your wine.'
    p.innerText = 'We strive to produce vines that reflect  both traditions and  innovated approach, without compromisisng top quality of the drink. '
    a.innerText = 'read more'
    img.src = './images/wineBottle.png'

    homePage.append(h1)
    homePage.append(p)
    homePage.append(a)
    homePage.append(img)
    homePage.append(ghostDiv)
    homePage.dataset.content = 'home'

    return homePage
}

export default homePage