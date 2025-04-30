// Sample product data
const products = [
    {
        id: 1,
        name: "Smartphone X",
        price: 699.99,
        category: "Electronics",
        image: "https://via.placeholder.com/300",
        description: "Latest smartphone with advanced features"
    },
    {
        id: 2,
        name: "Wireless Headphones",
        price: 149.99,
        category: "Electronics",
        image: "https://via.placeholder.com/300",
        description: "Premium wireless headphones with noise cancellation"
    },
    {
        id: 3,
        name: "Designer Watch",
        price: 299.99,
        category: "Fashion",
        image: "https://via.placeholder.com/300",
        description: "Elegant designer watch for any occasion"
    },
    {
        id: 4,
        name: "Smart TV",
        price: 899.99,
        category: "Electronics",
        image: "https://via.placeholder.com/300",
        description: "55-inch 4K Smart TV with HDR"
    },
    {
        id: 5,
        name: "Coffee Maker",
        price: 79.99,
        category: "Home & Kitchen",
        image: "https://via.placeholder.com/300",
        description: "Programmable coffee maker with thermal carafe"
    },
    {
        id: 6,
        name: "Skincare Set",
        price: 49.99,
        category: "Beauty",
        image: "https://via.placeholder.com/300",
        description: "Complete skincare set for daily routine"
    }
];

// Cart functionality
let cart = [];
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');

// Load products on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupEventListeners();
});

// Load products into the grid
function loadProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p class="description">${product.description}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Cart icon click
    document.querySelector('.cart-icon').addEventListener('click', openCart);
    
    // Close cart button
    document.querySelector('.close-cart').addEventListener('click', closeCart);
    
    // Add to cart buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        }
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', handleSearch);
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    updateCart();
    showNotification('Product added to cart!');
}

// Update cart display
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <button class="remove-item" data-id="${item.id}">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            removeFromCart(productId);
        });
    });
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Open cart modal
function openCart() {
    cartModal.style.display = 'block';
    updateCart();
}

// Close cart modal
function closeCart() {
    cartModal.style.display = 'none';
}

// Handle search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add notification styles
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #2ecc71;
        color: white;
        padding: 1rem;
        border-radius: 4px;
        animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .product-card {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }

    .product-card:hover {
        transform: translateY(-5px);
    }

    .product-info {
        padding: 1rem;
    }

    .product-info h3 {
        margin-bottom: 0.5rem;
        color: #2c3e50;
    }

    .price {
        font-size: 1.2rem;
        color: #e74c3c;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .description {
        color: #666;
        margin-bottom: 1rem;
    }

    .add-to-cart {
        width: 100%;
        padding: 0.5rem;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid #ddd;
    }

    .cart-item-info h4 {
        margin-bottom: 0.5rem;
    }

    .remove-item {
        background-color: #e74c3c;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
    }
`;
document.head.appendChild(style); 