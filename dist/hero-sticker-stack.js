(() => {
  const hero = document.querySelector('.hero');
  if (!hero || hero.querySelector('.hero-sticker-stack')) return;

  const stack = document.createElement('section');
  stack.className = 'hero-sticker-stack';
  stack.setAttribute('aria-label', 'A movable collection of field objects');
  stack.innerHTML = `
    <figure class="hero-sticker sticker-bottle" tabindex="0"><img src="images/hero-stickers/nalgene-bottle.png" alt="Nalgene water bottle"></figure>
    <figure class="hero-sticker sticker-camera" tabindex="0"><img src="images/hero-stickers/fujifilm-xt5.png" alt="Fujifilm X-T5 camera"></figure>
    <figure class="hero-sticker sticker-book-nz" tabindex="0"><img src="images/hero-stickers/hand-guide-birds-nz.png" alt="The Hand Guide to the Birds of New Zealand"></figure>
    <figure class="hero-sticker sticker-book-aus" tabindex="0"><img src="images/hero-stickers/australian-bird-guide.png" alt="The Australian Bird Guide"></figure>
    <figure class="hero-sticker sticker-binoculars" tabindex="0"><img src="images/hero-stickers/nocs-binoculars.png" alt="Nocs binoculars"></figure>`;
  hero.append(stack);

  let returnTimer;
  const stickers = [...stack.querySelectorAll('.hero-sticker')];
  const resetStack = () => {
    stickers.forEach((sticker) => {
      sticker.style.removeProperty('--drag-x');
      sticker.style.removeProperty('--drag-y');
      delete sticker.dataset.x;
      delete sticker.dataset.y;
      sticker.classList.remove('is-dragging');
    });
  };
  const scheduleReturn = () => {
    window.clearTimeout(returnTimer);
    returnTimer = window.setTimeout(resetStack, 15000);
  };

  stickers.forEach((sticker) => {
    let originX = 0;
    let originY = 0;
    let startX = 0;
    let startY = 0;
    let moving = false;

    sticker.addEventListener('pointerdown', (event) => {
      moving = true;
      originX = parseFloat(sticker.dataset.x || '0');
      originY = parseFloat(sticker.dataset.y || '0');
      startX = event.clientX;
      startY = event.clientY;
      sticker.classList.add('is-dragging');
      sticker.setPointerCapture(event.pointerId);
      scheduleReturn();
    });
    sticker.addEventListener('pointermove', (event) => {
      if (!moving) return;
      const x = originX + event.clientX - startX;
      const y = originY + event.clientY - startY;
      sticker.dataset.x = x;
      sticker.dataset.y = y;
      sticker.style.setProperty('--drag-x', `${x}px`);
      sticker.style.setProperty('--drag-y', `${y}px`);
      scheduleReturn();
    });
    const stopMoving = () => {
      moving = false;
      sticker.classList.remove('is-dragging');
      scheduleReturn();
    };
    sticker.addEventListener('pointerup', stopMoving);
    sticker.addEventListener('pointercancel', stopMoving);
    sticker.addEventListener('keydown', (event) => {
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const distance = event.shiftKey ? 24 : 8;
      const x = parseFloat(sticker.dataset.x || '0') + (event.key === 'ArrowRight' ? distance : event.key === 'ArrowLeft' ? -distance : 0);
      const y = parseFloat(sticker.dataset.y || '0') + (event.key === 'ArrowDown' ? distance : event.key === 'ArrowUp' ? -distance : 0);
      sticker.dataset.x = x;
      sticker.dataset.y = y;
      sticker.style.setProperty('--drag-x', `${x}px`);
      sticker.style.setProperty('--drag-y', `${y}px`);
      scheduleReturn();
    });
  });

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const weta = document.createElement('img');
    weta.className = 'weta-pointer';
    weta.src = 'images/hero-stickers/weta-cursor.png';
    weta.alt = '';
    weta.setAttribute('aria-hidden', 'true');
    document.body.append(weta);
    hero.addEventListener('pointerenter', () => { hero.classList.add('has-weta-cursor'); weta.classList.add('is-visible'); });
    hero.addEventListener('pointerleave', () => { hero.classList.remove('has-weta-cursor'); weta.classList.remove('is-visible'); });
    hero.addEventListener('pointermove', (event) => {
      weta.style.left = `${event.clientX}px`;
      weta.style.top = `${event.clientY}px`;
    });
  }
})();
