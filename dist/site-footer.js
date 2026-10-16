(() => {
  function mountFooter() {
    if (document.querySelector('.contact-foot')) return;

    if (!document.getElementById('top')) document.body.id = 'top';

    const existing = document.querySelector('.approach-footer');
    const footer = existing || document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
      <div class="site-footer-inner">
        <span>© 2026 Cullen’s Field Notes</span>
        <span>All Rights Reserved</span>
        <a class="site-footer-top" href="#top">Back to top ↑</a>
      </div>`;

    if (!existing) {
      const container = document.querySelector('main') || document.body;
      const bottomPadding = Number.parseFloat(getComputedStyle(container).paddingBottom) || 0;
      footer.style.marginBottom = `-${bottomPadding}px`;
      container.append(footer);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountFooter);
  else mountFooter();
})();
