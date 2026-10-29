(() => {
  const tabs = [...document.querySelectorAll('.version-tab[role="tab"]')];
  if (!tabs.length) return;
  const tabList = tabs[0].closest('[role="tablist"]');
  const compactLayout = window.matchMedia('(max-width: 720px)');
  const syncOrientation = () => tabList?.setAttribute('aria-orientation', compactLayout.matches ? 'horizontal' : 'vertical');
  syncOrientation();
  compactLayout.addEventListener('change', syncOrientation);

  const selectVersion = (tab, moveFocus = false) => {
    tabs.forEach((candidate) => {
      const selected = candidate === tab;
      candidate.setAttribute('aria-selected', String(selected));
      candidate.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(candidate.getAttribute('aria-controls'));
      if (panel) panel.hidden = !selected;
    });
    if (moveFocus) tab.focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectVersion(tab));
    tab.addEventListener('keydown', (event) => {
      let nextIndex = index;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') nextIndex = 0;
      else if (event.key === 'End') nextIndex = tabs.length - 1;
      else return;
      event.preventDefault();
      selectVersion(tabs[nextIndex], true);
    });
  });

  const hashTab = tabs.find((tab) => tab.dataset.version === window.location.hash.slice(1));
  if (hashTab) selectVersion(hashTab);
})();
