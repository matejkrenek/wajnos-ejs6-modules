import Element  from '../newElement'

const contactPage = () => {
    const contactPage = new Element('section', 'contactSection').createElement()

    contactPage.dataset.content = 'contact'

    return contactPage
}

export default contactPage