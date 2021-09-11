let cart_el = document.querySelector('.cart_total')

let cart_obj = {}

function cart_total_value() {
    let total_value = 0
    for (let id in cart_obj) {
        total_value += cart_obj[id] * cards[id].price
    }
    document.querySelector('.cart_total_value').textContent = total_value.toFixed(2)
}

function render_cart(id) {
    let item_count = document.querySelector(`.item_count[data-item_id="${id}"]`)
    if (item_count) {
        item_count.textContent++
        document.querySelector(`.item_total_value[data-item_id="${id}"]`).textContent = (cart_obj[id] * cards[id].price).toFixed(2)
    } else {
        new_item(id)
    }
}

function new_item(id) {
    let item_html = `
    <div class="cart_row">
        <div>${cards[id].name}</div>
        <div>
            <span class="item_count" data-item_id="${id}">1</span> шт.
        </div>
        <div>$${cards[id].price}</div>
        <div>
            $<span class="item_total_value" data-item_id="${id}">${cards[id].price}</span>
        </div>
    </div>
`
    cart_el.insertAdjacentHTML('beforebegin', item_html)
}

let cart = document.querySelector('.cartIconWrap')
cart.addEventListener('click', function () {
    document.querySelector('.cart').classList.toggle('hidden')
})

document.querySelectorAll('button[data-id]').forEach(function (button) {
    button.addEventListener('click', function (event) {
        add_cart(event.target.dataset.id)
    })
})

function add_cart(item_id) {
    document.querySelector('.cartIconWrap span').textContent++
    if (!(item_id in cart_obj)) {
        cart_obj[item_id] = 1
    } else {
        cart_obj[item_id]++
    }
    cart_total_value()
    render_cart(item_id)

}
