let cart = [];

// Select the necessary elements
const viewCartButton = document.getElementById('viewCartButton');
const cartModal = document.getElementById('cartModal');
const closeModalButton = document.getElementById('closeModalButton');
const cartItemsContainer = document.getElementById('cartItems');
const totalAmount = document.getElementById('totalAmount');

// Add event listeners for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = {
            id: this.getAttribute('data-product'),
            name: this.getAttribute('data-name'),
            price: parseFloat(this.getAttribute('data-price'))
        };
        addToCart(product);
    });
});

// Add item to cart and update the cart display
function addToCart(product) {
    cart.push(product);
    updateCart();
}

// Update the cart UI
function updateCart() {
    // Update the cart button count
    viewCartButton.textContent = `View Cart (${cart.length})`;

    // Update the cart modal content
    cartItemsContainer.innerHTML = '';  // Clear existing items
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(li);
        total += item.price;
    });

    totalAmount.textContent = total.toFixed(2);
}

// Show the cart modal
viewCartButton.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

// Close the cart modal
closeModalButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

