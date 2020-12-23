import Element  from '../newElement'

const winesPage = () => {
    const winesPage = new Element('section', 'winesSection').createElement()

    winesPage.dataset.content = 'wines'

    return winesPage
}

export default winesPage