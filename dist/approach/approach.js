const carousel = document.querySelector('.collaborator-carousel');
document.querySelectorAll('[data-collab-direction]').forEach((button) => button.addEventListener('click', () => {
  const direction = button.dataset.collabDirection === 'next' ? 1 : -1;
  carousel?.scrollBy({ left: direction * carousel.clientWidth * .78, behavior: 'smooth' });
}));
if (carousel) {
  let down = false; let startX = 0; let startScroll = 0;
  carousel.addEventListener('pointerdown', (event) => { down = true; startX = event.clientX; startScroll = carousel.scrollLeft; carousel.classList.add('dragging'); carousel.setPointerCapture(event.pointerId); });
  carousel.addEventListener('pointermove', (event) => { if (down) carousel.scrollLeft = startScroll - (event.clientX - startX); });
  const stop = () => { down = false; carousel.classList.remove('dragging'); };
  carousel.addEventListener('pointerup', stop); carousel.addEventListener('pointercancel', stop);
}
