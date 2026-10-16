(() => {
  const socialIcons = {
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h2.8l.4-3H14V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V10H8v3h2.8v8H14Z" fill="currentColor"/></svg>'
  };

  function mountFooter() {
    if (document.querySelector('.contact-foot')) return;

    const existing = document.querySelector('.approach-footer');
    const footer = existing || document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
      <div class="site-footer-inner">
        <span>© 2026 Cullen’s Field Notes</span>
        <div class="site-footer-socials" aria-label="Social media">
          <a href="https://www.instagram.com/cullen_field_notes/" target="_blank" rel="noreferrer" aria-label="Instagram: cullen_field_notes">${socialIcons.instagram}<span>Instagram</span></a>
          <a href="https://www.facebook.com/cullen.choi.9/" target="_blank" rel="noreferrer" aria-label="Facebook: Cullen Choi">${socialIcons.facebook}<span>Facebook</span></a>
        </div>
        <span>All Rights Reserved</span>
        <a class="site-footer-top" href="#top">Back to top ↑</a>
      </div>`;

    if (!existing) (document.querySelector('main') || document.body).append(footer);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountFooter);
  else mountFooter();
})();
