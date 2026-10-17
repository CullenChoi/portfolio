(() => {
  function mountFooter() {
    if (document.querySelector('.contact-foot')) return;

    if (!document.getElementById('top')) document.body.id = 'top';

    const existing = document.querySelector('.site-footer, .approach-footer');
    if (existing) existing.remove();

    const main = document.querySelector('main');
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
      <div class="site-footer-inner">
        <span>© 2026 Cullen’s Field Notes</span>
        <span>All Rights Reserved</span>
        <a class="site-footer-top" href="#top">Back to top ↑</a>
      </div>`;

    const mainStyle = main ? getComputedStyle(main) : null;
    const bodyStyle = getComputedStyle(document.body);
    const background = mainStyle && mainStyle.backgroundColor !== 'rgba(0, 0, 0, 0)'
      ? mainStyle.backgroundColor
      : bodyStyle.backgroundColor;

    footer.style.setProperty('--footer-background', background);
    footer.style.setProperty('--footer-foreground', mainStyle?.color || bodyStyle.color);
    document.body.append(footer);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountFooter);
  else mountFooter();
})();
