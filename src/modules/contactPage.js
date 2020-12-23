import Element  from '../newElement'

const contactPage = () => {
    const contactPage = new Element('section', 'contactSection').createElement()
    const h1 = new Element('h1', 'title').createElement()

    h1.innerText = 'Contact page'

    contactPage.append(h1)
    contactPage.dataset.content = 'contact'

    return contactPage
}

export default contactPage