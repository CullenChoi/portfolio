const curiousWord = document.querySelector('.hero h1 em');

if (curiousWord) {
  curiousWord.classList.add('curious-trigger');
  curiousWord.setAttribute('tabindex', '0');
  curiousWord.setAttribute('aria-label', 'curious — opens a small map of Oceania');
  curiousWord.innerHTML = 'curious<span class="curious-popover" aria-hidden="true"><span class="curious-sun">☀️</span><span class="curious-map">🌏</span><span class="curious-map-label">OCEANIA</span><span class="curious-flower">🌼</span></span>';
  curiousWord.addEventListener('click', () => curiousWord.classList.toggle('is-open'));
  curiousWord.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      curiousWord.classList.toggle('is-open');
    }
  });
}
