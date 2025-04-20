function slideLeft(sliderId) {
  const slider = document.getElementById(sliderId);
  slider.scrollBy({ left: -300, behavior: 'smooth' });
}

function slideRight(sliderId) {
  const slider = document.getElementById(sliderId);
  slider.scrollBy({ left: 300, behavior: 'smooth' });
}
