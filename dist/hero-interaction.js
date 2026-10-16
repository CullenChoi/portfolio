const natureWord = document.querySelector('.hero h1 em');

if (natureWord) {
  natureWord.classList.add('curious-trigger');
  natureWord.setAttribute('tabindex', '0');
  natureWord.setAttribute('aria-label', 'nature — globe');
  natureWord.innerHTML = 'nature<span class="curious-popover" aria-hidden="true"><span class="curious-map">🌍</span></span>';
  natureWord.addEventListener('click', () => natureWord.classList.toggle('is-open'));
  natureWord.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      natureWord.classList.toggle('is-open');
    }
  });
}
