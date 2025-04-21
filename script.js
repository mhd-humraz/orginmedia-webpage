function slideLeft() {
  document.getElementById("productSlider").scrollBy({
    left: -300,
    behavior: "smooth"
  });
}

function slideRight() {
  document.getElementById("productSlider").scrollBy({
    left: 300,
    behavior: "smooth"
  });
}


function slideLeft(sliderId) {
  const slider = document.getElementById(sliderId);
  slider.scrollBy({ left: -300, behavior: 'smooth' });
}

function slideRight(sliderId) {
  const slider = document.getElementById(sliderId);
  slider.scrollBy({ left: 300, behavior: 'smooth' });
}

function updatePrice(selectElement) {
  const price = selectElement.value;
  const priceElement = selectElement.parentElement.querySelector('.price');
  priceElement.textContent = `Rs. ${price}`;
}

function addToCartWithSize(button, productName) {
  const select = button.parentElement.querySelector('select');
  const selectedPrice = select.value;
  const selectedSize = select.options[select.selectedIndex].text.split(" - ")[0];
  alert(`${productName} (${selectedSize}) added to cart for Rs. ${selectedPrice}`);
  // You can customize this function to push to a cart array
}
