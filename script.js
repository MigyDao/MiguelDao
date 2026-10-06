const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

if (toggle && nav) {
  const closeNav = () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeNav();
      toggle.focus();
    }
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();


/* Preserve explicit theme previews while navigating the portfolio. */
const portfolioTheme = window.PORTFOLIO_THEME;
if (portfolioTheme?.previewTheme) {
  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    try {
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      url.searchParams.set('theme', portfolioTheme.previewTheme);
      link.href = url.href;
    } catch (_) {}
  });
}
