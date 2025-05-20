const itemsData = [
    {
        id: 1,
        name: "Rødvin fra Toscana",
        price: 199,
        image: "https://picsum.photos/200",
        category: "wine"
    },
    {
        id: 2,
        name: "Håndlavet IPA",
        price: 59,
        image: "https://picsum.photos/200",
        category: "beer"
    },
    {
        id: 3,
        name: "Single Malt Whisky",
        price: 399,
        image: "https://picsum.photos/200",
        category: "spirits"
    },
    {
        id: 4,
        name: "Mørk chokolade med havsalt",
        price: 89,
        image: "https://picsum.photos/200",
        category: "chocolate"
    },
    {
        id: 5,
        name: "Hvidvin fra Loire",
        price: 179,
        image: "https://picsum.photos/200",
        category: "wine"
    },
    {
        id: 6,
        name: "Kraftig Porter",
        price: 65,
        image: "https://picsum.photos/200",
        category: "beer"
    },
    {
        id: 7,
        name: "Premium Gin",
        price: 299,
        image: "https://picsum.photos/200",
        category: "spirits"
    },
    {
        id: 8,
        name: "Mælkechokolade med nødder",
        price: 79,
        image: "https://picsum.photos/200",
        category: "chocolate"
    },
    {
        id: 9,
        name: "Rosévin fra Provence",
        price: 159,
        image: "https://picsum.photos/200",
        category: "wine"
    },
    {
        id: 10,
        name: "Håndlavet glas",
        price: 149,
        image: "https://picsum.photos/200",
        category: "other"
    },
    {
        id: 11,
        name: "Håndskrevet kort",
        price: 29,
        image: "https://picsum.photos/200",
        category: "other"
    },
    {
        id: 12,
        name: "Hjemmelavet marmelade",
        price: 69,
        image: "https://picsum.photos/200",
        category: "other"
    }
];

const cartJson = window.localStorage.getItem("cart") ?? "{}"
let cart = JSON.parse(cartJson)


function changeQuantity(itemId, amount) {

    if (cart[itemId] == undefined) {
        cart[itemId] = 0
    }

    cart[itemId] += amount

    if (cart[itemId] <= 0) {
        delete cart[itemId]
    }

    window.localStorage.setItem("cart", JSON.stringify(cart))
    return cart[itemId] ?? 0

}


function loadItemsIntoItemsContainer() {
    const itemContainer = document.querySelector("#itemsContainer")
    if (!itemContainer) return;

    const itemCardTemplate = document.querySelector("#itemCardTemplate")

    for (const item of itemsData) {
        const itemCard = itemCardTemplate.cloneNode(true)

        const itemName = itemCard.querySelector(".item-name")
        itemName.innerText = item.name

        const itemPrice = itemCard.querySelector('.item-price')
        itemPrice.innerText = item.price

        const quantityValue = itemCard.querySelector(".quantity-value")
        quantityValue.innerText = cart[item.id] ?? 0

        const minusBtn = itemCard.querySelector('.quantity-btn.minus')
        minusBtn.addEventListener("click", () => {
            const newQuantity = changeQuantity(item.id, -1)
            quantityValue.innerText = newQuantity
        })

        const plusBtn = itemCard.querySelector('.quantity-btn.plus')
        plusBtn.addEventListener("click", () => {
            const newQuantity = changeQuantity(item.id, 1)
            quantityValue.innerText = newQuantity
        })

        itemContainer.appendChild(itemCard)
    }

    itemContainer.removeChild(itemCardTemplate)
}

function loadCartItemsIntoCartItemsContainer() {
    const cartItemsContainer = document.querySelector("#cartItemsContainer")
    if (!cartItemsContainer) return;

    const cartItemTemplate = document.querySelector("#cartItemTemplate")

    for (const itemId in cart) {

        const item = itemsData.find(item => item.id == itemId)

        const cartItemCard = cartItemTemplate.cloneNode(true)

        const cartItemImg = cartItemCard.querySelector(".cart-item-img img")
        cartItemImg.src = "https://picsum.photos/200?v=" + itemId

        const cartItemTitle = cartItemCard.querySelector(".cart-item-title")
        cartItemTitle.innerText = item.name

        const cartItemPrice = cartItemCard.querySelector(".cart-item-price")
        cartItemPrice.innerText = item.price

        const cartItemQuantityValue = cartItemCard.querySelector(".cart-item-quantity.value")
        cartItemQuantityValue.innerText = cart[itemId]

        const cartItemQuantityValueLabel = cartItemCard.querySelector(".cart-item-quantity.value-label")
        cartItemQuantityValueLabel.innerText = cart[itemId] + " stk"

        const minusBtn = cartItemCard.querySelector('.quantity-btn.minus')
        minusBtn.addEventListener("click", () => {
            const newQuantity = changeQuantity(item.id, -1)
            cartItemQuantityValue.innerText = newQuantity
            cartItemQuantityValueLabel.innerText = newQuantity + " stk"

            if (newQuantity <= 0) {
                cartItemsContainer.removeChild(cartItemCard)
            }
        })

        const plusBtn = cartItemCard.querySelector('.quantity-btn.plus')
        plusBtn.addEventListener("click", () => {
            const newQuantity = changeQuantity(item.id, 1)
            cartItemQuantityValue.innerText = newQuantity
            cartItemQuantityValueLabel.innerText = newQuantity + " stk"
        })

        cartItemsContainer.appendChild(cartItemCard)
    }
    cartItemsContainer.removeChild(cartItemTemplate)

}


document.addEventListener("DOMContentLoaded", function () {
    loadItemsIntoItemsContainer()
    loadCartItemsIntoCartItemsContainer()
});


