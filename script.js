// Initialize cart count to 0 (retrieve from localStorage if available)
let cartCount = JSON.parse(localStorage.getItem('cartCount')) || 0;

// Function to update the cart count in the header
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cartCount;
}

// Function to add a product to the cart
function addToCart(productName, productPrice) {
  // Retrieve existing cart data or create a new cart if none exists
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Add the new item to the cart
  cart.push({ name: productName, price: productPrice });

  // Save the updated cart and cart count to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  cartCount++;
  localStorage.setItem('cartCount', JSON.stringify(cartCount));

  // Update the cart count displayed in the header
  updateCartCount();

  // Optionally, show a confirmation message
  alert(`${productName} has been added to your cart!`);
}

// Function to display cart items on the cart page
function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartContainer = document.getElementById('cart-items');
  let total = 0;

  // If cart is empty, show a message
  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty!</p>';
    return;
  }

  // Loop through each item in the cart and display it
  cart.forEach((item, index) => {
    total += item.price;
    cartContainer.innerHTML += `
      <div class="cart-item">
        <p>${item.name}</p>
        <p>Rs. ${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });

  // Display the total price
  cartContainer.innerHTML += `<div class="cart-total"><p>Total: Rs. ${total}</p></div>`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Remove the item at the specified index
  cart.splice(index, 1);

  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  cartCount = cart.length;
  localStorage.setItem('cartCount', JSON.stringify(cartCount));

  // Update the cart count displayed in the header
  updateCartCount();

  // Refresh the cart page
  displayCart();
}

