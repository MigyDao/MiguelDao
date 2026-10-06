(() => {
  const DEFAULT_THEME = 'dark';
  const THEMES = new Set(['light', 'dark']);
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('theme');
  const current = THEMES.has(requested) ? requested : DEFAULT_THEME;

  document.documentElement.dataset.theme = current;
  document.documentElement.style.colorScheme = current;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', current === 'dark' ? '#0e1211' : '#f5f2e9');

  window.PORTFOLIO_THEME = Object.freeze({
    defaultTheme: DEFAULT_THEME,
    currentTheme: current,
    previewTheme: THEMES.has(requested) ? requested : null
  });
})();