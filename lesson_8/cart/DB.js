let card_img = `images/featured`
class cards_db {
    constructor(id, name, description, price, image) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.image = image
    }
}
let cards = [
    new cards_db(
        0,
        'Item 1',
        'some descriprion item 1',
        34.22,
        '1.jpg'
    ),
    new cards_db(
        1,
        'Item 2',
        'some descriprion item 2',
        19.22,
        '2.jpg'
    ),
    new cards_db(
        2,
        'Item 3',
        'some descriprion item 3',
        48.22,
        '3.jpg'
    ),
    new cards_db(
        3,
        'Item 4',
        'some descriprion item 4',
        76.22,
        '4.jpg'
    ),
    new cards_db(
        4,
        'Item 5',
        'some descriprion item 5',
        40.22,
        '5.jpg'
    ),
    new cards_db(
        5,
        'Item 6',
        'some descriprion item 6',
        39.22,
        '6.jpg'
    ),
]
function render_card(card) {
    return `<div class="featuredItem">
    <div class="featuredImgWrap">
        <img src="images/featured/${card.image}" alt="">
        <div class="featuredImgDark">
            <button data-id="${card.id}">
                <img src="images/cart.svg" alt="">
                Add to Cart
            </button>
        </div>
    </div>
    <div class="featuredData">
        <div class="featuredName">
            ${card.name}
        </div>
        <div class="featuredText">
            ${card.description}
        </div>
        <div class="featuredPrice">
            ${card.price}
        </div>
    </div>
</div>
`
}
let card_markup = ''
cards.forEach(function (card) {
    card_markup += render_card(card)
})
document.querySelector('.featuredItems').
    insertAdjacentHTML('beforeend', card_markup)

