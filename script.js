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
