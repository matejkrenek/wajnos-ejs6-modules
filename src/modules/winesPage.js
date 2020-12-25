import Element  from '../newElement'

const winesPage = () => {
    let products = [
        {
            image: './images/heroWineBottle.png',
            title: 'Merlot Wine',
            stars: [1, 1, 1, 0, 0],
            price: 30
        },
        {
            image: './images/heroWineBottle.png',
            title: 'Beaucastel Wine',
            stars: [1, 1, 1, 1, 0],
            price: 119
        },
        {
            image: './images/heroWineBottle.png',
            title: 'L’Evangile Wine',
            stars: [1, 1, 0, 0, 0],
            price: 50
        },
        {
            image: './images/heroWineBottle.png',
            title: 'L’Evangile Wine',
            stars: [1, 1, 0, 0, 0],
            price: 50
        },
        {
            image: './images/heroWineBottle.png',
            title: 'L’Evangile Wine',
            stars: [1, 1, 0, 0, 0],
            price: 50
        },
        {
            image: './images/heroWineBottle.png',
            title: 'L’Evangile Wine',
            stars: [1, 1, 0, 0, 0],
            price: 50
        },
        {
            image: './images/heroWineBottle.png',
            title: 'L’Evangile Wine',
            stars: [1, 1, 0, 0, 0],
            price: 50
        },
        
    ]

    const winesPage = new Element('section', 'winesSection').createElement()
    const itemsGrid = new Element('div', 'itemsBox').createElement()

    const productBoxes = products.map(product => `
        <div class="item">
            <div class="productHero">
                <img src=${product.image}></img>
            </div>
            <p class="productName">${product.title}</p>
            <span class="productRating">
                <i class="${product.stars[0] == 1 ? "ri-star-fill" : "ri-star-line"}"></i>
                <i class="${product.stars[1] == 1 ? "ri-star-fill" : "ri-star-line"}"></i>
                <i class="${product.stars[2] == 1 ? "ri-star-fill" : "ri-star-line"}"></i>
                <i class="${product.stars[3] == 1 ? "ri-star-fill" : "ri-star-line"}"></i>
                <i class="${product.stars[4] == 1 ? "ri-star-fill" : "ri-star-line"}"></i>
            </span>
            <span class="productPrice">$${product.price}.00</span>
        </div>
    `).join('')

    itemsGrid.innerHTML = productBoxes
    winesPage.append(itemsGrid)
    winesPage.dataset.content = 'wines'

    return winesPage
}

export default winesPage