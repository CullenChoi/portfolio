const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
  menu.textContent = open ? 'Close' : 'Menu';
});
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
  if (menu) menu.textContent = 'Menu';
}));
const filterButtons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');
filterButtons.forEach((button) => button.addEventListener('click', () => {
  filterButtons.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  projects.forEach((project) => {
    project.hidden = filter !== 'all' && !project.dataset.cat.includes(filter);
  });
}));
const shelf = document.querySelector('.shelf-menu');
const trigger = document.querySelector('.shelf-trigger');
trigger?.addEventListener('click', () => {
  const open = shelf.classList.toggle('open');
  trigger.setAttribute('aria-expanded', open);
});
const carousel = document.querySelector('.messages-carousel');
const cards = document.querySelectorAll('.postcard-track .postcard');
document.querySelectorAll('[data-message-direction]').forEach((button) => button.addEventListener('click', () => {
  const direction = button.dataset.messageDirection === 'next' ? 1 : -1;
  carousel?.scrollBy({ left: direction * carousel.clientWidth * .8, behavior: 'smooth' });
}));
cards.forEach((card) => card.addEventListener('click', () => {
  const willOpen = !card.classList.contains('is-open');
  cards.forEach((item) => { item.classList.remove('is-open'); item.setAttribute('aria-expanded', 'false'); });
  if (willOpen) { card.classList.add('is-open'); card.setAttribute('aria-expanded', 'true'); }
}));
if (carousel) {
  let pointerDown = false;
  let startX = 0;
  let startScroll = 0;
  carousel.addEventListener('pointerdown', (event) => {
    pointerDown = true; startX = event.clientX; startScroll = carousel.scrollLeft;
    carousel.classList.add('is-dragging'); carousel.setPointerCapture(event.pointerId);
  });
  carousel.addEventListener('pointermove', (event) => {
    if (pointerDown) carousel.scrollLeft = startScroll - (event.clientX - startX);
  });
  const stopDrag = () => { pointerDown = false; carousel.classList.remove('is-dragging'); };
  carousel.addEventListener('pointerup', stopDrag);
  carousel.addEventListener('pointercancel', stopDrag);
}
