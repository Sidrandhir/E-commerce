// script.js
document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
    const categorySelect = document.getElementById('categories');
    const genderSelect = document.getElementById('gender');
    const ageInput = document.getElementById('age');

    // Load product data from JSON file (e.g., product1.json and product2.json)
    fetch('products/product1.json')
        .then(response => response.json())
        .then(product => {
            // Create and append product card
            const productCard = createProductCard(product);
            productList.appendChild(productCard);
        });

    // Function to create a product card
    function createProductCard(product) {
        // Create product card as before
    }

    // Function to filter products
    function filterProducts() {
        const category = categorySelect.value;
        const gender = genderSelect.value;
        const age = parseInt(ageInput.value);

        // Use selected filters to determine which products to display
    }

    // Add event listeners for filter elements
    categorySelect.addEventListener('change', filterProducts);
    genderSelect.addEventListener('change', filterProducts);
    ageInput.addEventListener('input', filterProducts);

    // script.js
document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
    const categorySelect = document.getElementById('categories');
    const genderSelect = document.getElementById('gender');
    const ageInput = document.getElementById('age');

    // Load product data from JSON file (e.g., product1.json and product2.json)
    fetch('products/product1.json')
        .then(response => response.json())
        .then(product => {
            // Create and append product card
            const productCard = createProductCard(product);
            productList.appendChild(productCard);
        });

    // Function to create a product card
    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('col-lg-4');
        card.innerHTML = `
            <div class="card mb-4">
                <img src="images/${product.image}" alt="${product.name}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">Price: $${product.price}</p>
                    <button class="btn btn-primary buy-button">Buy</button>
                    <button class="btn btn-success add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;
        // Add event listeners for "Buy" and "Add to Cart" buttons
        card.querySelector('.buy-button').addEventListener('click', () => buyProduct(product));
        card.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product));
        return card;
    }

    // Function to simulate a "Buy" action
    function buyProduct(product) {
        // Implement buy functionality, e.g., redirect to a checkout page
    }

    // Function to add a product to the cart
    function addToCart(product) {
        // Implement cart functionality
    }

    // Function to filter products
    function filterProducts() {
        // Use selected filters to determine which products to display
    }

    // Add event listeners for filter elements
    categorySelect.addEventListener('change', filterProducts);
    genderSelect.addEventListener('change', filterProducts);
    ageInput.addEventListener('input', filterProducts);
});
// Function to create a product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('col-lg-4');
    card.innerHTML = `
        <div class="card mb-4">
            <img src="images/${product.image}" alt="${product.name}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">Price: $${product.price}</p>
                <button class="btn btn-primary buy-button">Buy</button>
                <button class="btn btn-success add-to-cart">Add to Cart</button>
            </div>
        </div>
    `;
    // Add event listeners for "Buy" and "Add to Cart" buttons
    card.querySelector('.buy-button').addEventListener('click', () => buyProduct(product));
    card.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product));
    return card;
}

});
