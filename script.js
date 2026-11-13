(() => {
  const link = document.getElementById('portfolio-link');
  const value = window.SITE_SETTINGS?.portfolioUrl?.trim();
  if (!link) return;
  if (value) {
    try {
      const url = new URL(value, window.location.href);
      if (['https:', 'http:'].includes(url.protocol)) {
        link.href = url.href;
        link.removeAttribute('aria-disabled');
        link.removeAttribute('role');
        link.removeAttribute('tabindex');
      }
    } catch { /* Keep the placeholder inactive if the URL is invalid. */ }
  }
  link.addEventListener('click', event => {
    if (!link.hasAttribute('href')) event.preventDefault();
  });
})();
