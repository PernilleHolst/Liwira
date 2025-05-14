// Sample data for items in the add-items.html page
const itemsData = [
    {
        id: 1,
        name: "Rødvin fra Toscana",
        price: 199,
        image: "https://via.placeholder.com/300x200",
        category: "wine"
    },
    {
        id: 2,
        name: "Håndlavet IPA",
        price: 59,
        image: "https://via.placeholder.com/300x200",
        category: "beer"
    },
    {
        id: 3,
        name: "Single Malt Whisky",
        price: 399,
        image: "https://via.placeholder.com/300x200",
        category: "spirits"
    },
    {
        id: 4,
        name: "Mørk chokolade med havsalt",
        price: 89,
        image: "https://via.placeholder.com/300x200",
        category: "chocolate"
    },
    {
        id: 5,
        name: "Hvidvin fra Loire",
        price: 179,
        image: "https://via.placeholder.com/300x200",
        category: "wine"
    },
    {
        id: 6,
        name: "Kraftig Porter",
        price: 65,
        image: "https://via.placeholder.com/300x200",
        category: "beer"
    },
    {
        id: 7,
        name: "Premium Gin",
        price: 299,
        image: "https://via.placeholder.com/300x200",
        category: "spirits"
    },
    {
        id: 8,
        name: "Mælkechokolade med nødder",
        price: 79,
        image: "https://via.placeholder.com/300x200",
        category: "chocolate"
    },
    {
        id: 9,
        name: "Rosévin fra Provence",
        price: 159,
        image: "https://via.placeholder.com/300x200",
        category: "wine"
    },
    {
        id: 10,
        name: "Håndlavet glas",
        price: 149,
        image: "https://via.placeholder.com/300x200",
        category: "other"
    },
    {
        id: 11,
        name: "Håndskrevet kort",
        price: 29,
        image: "https://via.placeholder.com/300x200",
        category: "other"
    },
    {
        id: 12,
        name: "Hjemmelavet marmelade",
        price: 69,
        image: "https://via.placeholder.com/300x200",
        category: "other"
    }
];

// Function to load items based on category
function loadItems(category = 'all') {
    const itemsContainer = document.getElementById('itemsContainer');
    if (!itemsContainer) return;

    itemsContainer.innerHTML = '';

    const filteredItems = category === 'all'
        ? itemsData
        : itemsData.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item-card';
        itemElement.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h3 class="item-name">${item.name}</h3>
                <p class="item-price">${item.price} kr.</p>
                <div class="item-quantity">
                    <button class="quantity-btn minus">-</button>
                    <span class="quantity-value">0</span>
                    <button class="quantity-btn plus">+</button>
                </div>
            </div>
        `;
        itemsContainer.appendChild(itemElement);
    });

    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const quantityElement = this.parentElement.querySelector('.quantity-value');
            let quantity = parseInt(quantityElement.textContent);

            if (this.classList.contains('plus')) {
                quantity++;
            } else if (this.classList.contains('minus') && quantity > 0) {
                quantity--;
            }

            quantityElement.textContent = quantity;
        });
    });
}

// Category filter functionality
document.addEventListener('DOMContentLoaded', function () {
    // Load all items by default
    if (document.getElementById('itemsContainer')) {
        loadItems();
    }

    // Add click event to category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            loadItems(category);
        });
    });

    // Shopping bag functionality
    const shoppingBag = document.querySelector('.shopping-bag');
    if (shoppingBag) {
        shoppingBag.addEventListener('click', function () {
            alert('Din indkøbskurv vil blive vist her.');
        });
    }

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                alert(`Søger efter: ${this.value}`);
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.video-container video');
    if (video) {
        video.playbackRate = 0.7; // Slows down to 70% speed
    }
});