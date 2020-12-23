import Element  from '../newElement'

const winesPage = () => {
    const winesPage = new Element('section', 'winesSection').createElement()
    const h1 = new Element('h1', 'title').createElement()

    h1.innerText = 'Wines page'

    winesPage.append(h1)
    winesPage.dataset.content = 'wines'

    return winesPage
}

export default winesPage