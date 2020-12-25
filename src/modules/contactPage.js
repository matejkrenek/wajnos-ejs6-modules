import Element  from '../newElement'

const contactPage = () => {
    const contactPage = new Element('section', 'contactSection').createElement()
    const formSide = new Element('div', 'formSide').createElement()
    const mapSide = new Element('div', 'mapSide').createElement()

    formSide.innerHTML = `
        <h5>Contact</h5>
        <form>
            <div class="inputField__flex">
                <div class="inputField">
                    <input type="text" name="firstName" placeholder="First Name"/>
                </div>
                <div class="inputField">
                    <input type="text" name="lastName" placeholder="Last Name"/>
                </div>
            </div>
            <div class="inputField">
                <input type="email" name="email" placeholder="Email Address"/>
            </div>
            <div class="inputField">
                <input type="text" name="subject" placeholder="Subject"/>
            </div>
            <div class="inputField">
                 <textarea name="message" placeholder="Message" rows="15"></textarea>
            </div>
            <button class="btn">Send</button>
        </form>
    `

    mapSide.innerHTML = `
        <h5>Visit</h5>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5273720.3366941465!2d15.474913!3d49.803763000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b948fd7dd8243%3A0xf8661c75d3db586f!2zxIxlc2tv!5e0!3m2!1scs!2scz!4v1608812611712!5m2!1scs!2scz"></iframe>
    `

    contactPage.append(formSide)
    contactPage.append(mapSide)
    contactPage.dataset.content = 'contact'

    return contactPage
}

export default contactPage