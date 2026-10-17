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

const intro = document.querySelector('.intro');
if (intro && !intro.querySelector('.intro-profile')) {
  const profile = document.createElement('figure');
  profile.className = 'intro-profile';
  profile.innerHTML = '<img src="images/profile/cullen-field-profile.png" alt="Cullen photographing wildlife in long grass">';
  intro.prepend(profile);
}

if (intro) {
  const introLabel = intro.querySelector(':scope > .eyebrow');
  const introCopy = intro.querySelector(':scope > div');
  if (introLabel && introCopy) introCopy.prepend(introLabel);
}

// Homepage content draft — prepared for review before publishing.
const setText = (selector, text) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
};

setText('.hero .eyebrow', 'A CURIOUS DESIGNER FINDING HIS WAY INTO ECOLOGY');
const heroHeading = document.querySelector('.hero h1');
if (heroHeading) heroHeading.innerHTML = 'Making room for <em>nature</em>.';
const heroLede = document.querySelector('.hero .lede');
if (heroLede) {
  const heroIntro = document.createElement('div');
  heroIntro.className = 'hero-intro';
  heroIntro.innerHTML = '<p>I’m Cullen, a designer and emerging ecologist in Aotearoa, drawn to birds, orchids and the small discoveries found outside. Through design, photography and field notes, I create invitations to notice, value and care for the living world.</p>';
  heroLede.replaceWith(heroIntro);
}
const heroButton = document.querySelector('.hero .circle-link');
if (heroButton) heroButton.innerHTML = 'Explore my work <span>↓</span>';

const introCopy = document.querySelector('.intro > div');
if (introCopy) {
  const introLabel = introCopy.querySelector('.eyebrow');
  introCopy.innerHTML = '<h2>Design taught me to look closely. Nature gave me a reason to.</h2><p>For five years, I worked as a designer across in-house, agency and corporate teams. I loved making ideas clear, useful and engaging, but began to question where I wanted to place that energy.</p><p>Time to reconsider drew me outdoors: birdwatching, photographing wildlife and learning plant names. Now, as I return to study ecology at AUT, Cullen’s Field Notes brings design and field learning together, making ecological knowledge more welcoming, visible and shared.</p><a class="text-link" href="approach/">More about my approach <span>→</span></a>';
  if (introLabel) introCopy.prepend(introLabel);
  setText('.intro .eyebrow', 'A LITTLE ABOUT ME');
}

setText('.work-section .eyebrow', 'WORK IN THE WILD');
setText('.work-section .section-head h2', 'Projects rooted in attention.');
setText('.work-section .section-head p:not(.eyebrow)', 'I use design and field practice to make local ecology easier to encounter. These projects combine research, visual storytelling and shared experiences to encourage curiosity, care and connection.');
const projectCopy = [
  ['Your Birding Guide', 'A seasonal birding field guide for Shakespear Regional Park.'],
  ['Ka Tū Au Hei Kaitiaki', 'Wildlife photographs celebrating the beauty and diversity of Aotearoa.'],
  ['Open Your Five Senses', 'A beginner-friendly guided walk for noticing nature in new ways.'],
  ['Understory Almanac', 'Drawn observations and stories from the forest floor.'],
  ['Small Ways of Nature Journaling', 'An outdoor workshop for recording what you notice through words and drawing.'],
  ['How to Birdwatch Ethically', 'A small guide to looking with care, patience and respect.']
];
document.querySelectorAll('.project').forEach((project, index) => {
  const copy = projectCopy[index];
  if (!copy) return;
  const title = project.querySelector('h3');
  const description = project.querySelector('.project-meta p:not(:first-child)');
  if (title) title.textContent = copy[0];
  if (description) description.textContent = copy[1];
});

setText('.note-copy .eyebrow', 'FROM THE FIELD JOURNAL');
setText('.note-copy .date', '12 OCTOBER 2026 · TĀMAKI MAKAURAU');
setText('.note-copy h2', 'A pied stilt nesting story.');
setText('.note-copy h2 + p', 'A field note from Tawharanui: following a pied stilt through the nesting season, and learning what patience, distance and careful observation can reveal.');
setText('.taxa .section-head h2', 'A growing record of what I’m learning.');
setText('.taxa .section-head p:not(.eyebrow)', 'Species, habitats and words encountered in the field. Not an encyclopedia—an honest record of looking, returning and learning.');
setText('.shelf-title h2', 'Resources that keep curiosity moving.');
setText('.shelf-title p', 'Field guides, books, tools and useful corners of the internet that help me better understand the life around us.');
setText('.message-head h2', 'Notes of hope from people who care.');
setText('.message-head p:not(.eyebrow)', 'A growing archive of short messages from people working in ecology, science, conservation and community care.');
setText('.contact h2', 'Let’s make attention useful.');
setText('.contact > p:not(.eyebrow)', 'I’m always open to thoughtful collaborations, creative commissions, guided walks, workshops and conversations over coffee. If you have an idea, a question or a place worth noticing together, I’d love to hear from you.');
const contact = document.querySelector('.contact');
if (contact && !contact.querySelector('.contact-start')) {
  const contactButton = document.createElement('a');
  contactButton.className = 'button contact-start';
  contactButton.href = 'messages/new/';
  contactButton.innerHTML = 'Start a conversation <span>→</span>';
  contact.querySelector('.email')?.before(contactButton);
}

if (contact) {
  const footerItems = contact.querySelectorAll('.contact-foot > span');
  if (footerItems[0]) footerItems[0].textContent = '© 2026 Cullen’s Field Notes';
  if (footerItems[1]) footerItems[1].textContent = 'All Rights Reserved';
  const email = contact.querySelector('.email');
  if (email && !contact.querySelector('.contact-socials')) {
    const socials = document.createElement('div');
    socials.className = 'contact-socials';
    socials.setAttribute('role', 'navigation');
    socials.setAttribute('aria-label', 'Social media');
    socials.innerHTML = '<a href="https://www.instagram.com/cullen_field_notes/" target="_blank" rel="noreferrer" aria-label="Instagram: cullen_field_notes"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg><span>Instagram</span></a><a href="https://www.facebook.com/cullen.choi.9/" target="_blank" rel="noreferrer" aria-label="Facebook: Cullen Choi"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.45-3H14V8.1c0-.87.25-1.46 1.5-1.46H17.6V4.02c-.36-.05-1.58-.16-3-.16-2.97 0-5 1.81-5 5.14V10H6.25v3H9.6v8H14Z"></path></svg><span>Facebook</span></a>';
    email.insertAdjacentElement('afterend', socials);
  }
}

document.querySelectorAll('main > section .eyebrow').forEach((eyebrow) => {
  eyebrow.textContent = eyebrow.textContent.replace(/^\d{2}\s*\/\s*/, '');
});
