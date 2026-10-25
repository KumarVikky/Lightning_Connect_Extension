(() => {
  const documentationRepo = 'https://github.com/KumarVikky/Lightning_Connect_Extension';
  const issuesUrl = `${documentationRepo}/issues`;
  const nav = document.querySelector('.site-nav');
  const menuButton = document.querySelector('.menu-button');
  const currentPage = document.body.dataset.page;
  const pageLink = { home: 'index.html', features: 'features.html', support: 'support.html', privacy: 'privacy.html', 'version-history': 'version-history.html' }[currentPage];

  if (nav && !nav.querySelector('a[href="version-history.html"]')) {
    const versionHistoryLink = document.createElement('a');
    versionHistoryLink.href = 'version-history.html';
    versionHistoryLink.textContent = 'Version History';
    nav.insertBefore(versionHistoryLink, nav.querySelector('.nav-github'));
  }

  const themeStyles = document.createElement('link');
  themeStyles.rel = 'stylesheet';
  themeStyles.href = 'assets/themes.css';
  document.head.append(themeStyles);

  const brandStyles = document.createElement('link');
  brandStyles.rel = 'stylesheet';
  brandStyles.href = 'assets/brand.css';
  document.head.append(brandStyles);

  const screenshotStyles = document.createElement('link');
  screenshotStyles.rel = 'stylesheet';
  screenshotStyles.href = 'assets/screenshots.css';
  document.head.append(screenshotStyles);

  const siteIcon = 'assets/lightning-connect-icon.png';
  [['icon', 'image/png'], ['apple-touch-icon', 'image/png']].forEach(([rel, type]) => {
    const iconLink = document.createElement('link');
    iconLink.rel = rel;
    iconLink.type = type;
    iconLink.href = siteIcon;
    document.head.append(iconLink);
  });
  document.querySelectorAll('.brand-mark').forEach((mark) => {
    mark.replaceChildren(Object.assign(document.createElement('img'), {
      src: siteIcon,
      alt: '',
      width: 128,
      height: 128
    }));
  });

  document.querySelectorAll('[data-current-year]').forEach((node) => { node.textContent = String(new Date().getFullYear()); });
  document.querySelectorAll('.site-nav a').forEach((link) => {
    if (link.getAttribute('href') === pageLink) link.setAttribute('aria-current', 'page');
  });

  document.querySelectorAll('a[href*="github.com/KumarVikky/"]').forEach((link) => {
    const isIssueLink = link.href.includes('/issues');
    link.href = isIssueLink ? issuesUrl : documentationRepo;
    if (link.classList.contains('nav-github')) {
      link.innerHTML = 'Documentation repo <span aria-hidden="true">↗</span>';
    } else if (isIssueLink) {
      link.innerHTML = 'Report a bug <span aria-hidden="true">↗</span>';
    } else if (link.textContent.includes('Source code')) {
      link.textContent = 'Documentation repo ↗';
    }
  });

  document.querySelectorAll('.footer-links > div:first-child').forEach((group) => {
    if (group.querySelector('a[href*="/issues"]')) return;
    const reportBugLink = document.createElement('a');
    reportBugLink.href = issuesUrl;
    reportBugLink.target = '_blank';
    reportBugLink.rel = 'noreferrer';
    reportBugLink.textContent = 'Report a bug ↗';
    group.append(reportBugLink);
  });

  if (currentPage === 'support') {
    const callout = document.querySelector('.support-callout');
    callout?.querySelector('.section-label')?.replaceChildren('Report a bug');
    callout?.querySelector('h2')?.replaceChildren('Found something that needs attention?');
    const reportLink = callout?.querySelector('a');
    if (reportLink) {
      reportLink.href = issuesUrl;
      reportLink.innerHTML = 'Report a bug <span aria-hidden="true">↗</span>';
    }
  }

  const themeButton = document.createElement('button');
  themeButton.type = 'button';
  themeButton.className = 'theme-toggle';
  themeButton.setAttribute('aria-label', 'Switch to midnight theme');
  themeButton.innerHTML = '<span aria-hidden="true">☾</span><span class="theme-label">Midnight</span>';
  nav?.insertBefore(themeButton, nav.querySelector('.nav-github'));

  const applyTheme = (theme) => {
    document.body.dataset.theme = theme;
    const isMidnight = theme === 'midnight';
    themeButton.setAttribute('aria-pressed', String(isMidnight));
    themeButton.setAttribute('aria-label', isMidnight ? 'Switch to daylight theme' : 'Switch to midnight theme');
    themeButton.innerHTML = isMidnight
      ? '<span aria-hidden="true">☀</span><span class="theme-label">Daylight</span>'
      : '<span aria-hidden="true">☾</span><span class="theme-label">Midnight</span>';
  };
  try { applyTheme(localStorage.getItem('lightning-connect-theme') || 'daylight'); } catch { applyTheme('daylight'); }
  themeButton.addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === 'midnight' ? 'daylight' : 'midnight';
    try { localStorage.setItem('lightning-connect-theme', nextTheme); } catch { /* Theme switching still works without storage. */ }
    applyTheme(nextTheme);
  });

  menuButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = lightbox?.querySelector('img');
  const closeLightbox = () => { if (lightbox) lightbox.hidden = true; };
  document.querySelectorAll('[data-lightbox-src]').forEach((button) => {
    button.addEventListener('click', () => {
      lightboxImage.src = button.dataset.lightboxSrc;
      lightboxImage.alt = button.dataset.lightboxAlt || '';
      lightbox.hidden = false;
      lightbox.querySelector('.lightbox-close').focus();
    });
  });
  lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
  lightbox?.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });
})();
