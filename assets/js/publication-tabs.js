document.querySelectorAll('[data-publication-tabs]').forEach(function (root) {
  var list = root.querySelector('[role="tablist"]');
  var tabs = Array.from(list.querySelectorAll('[role="tab"]'));
  var panels = Array.from(root.querySelectorAll('.publication-panel'));
  var papers = [];
  panels.forEach(function (panel) {
    panel.querySelectorAll('.paper-box').forEach(function (paper) {
      var link = paper.querySelector('a[href*="arxiv.org/abs/"]');
      var match = link && link.href.match(/arxiv\.org\/abs\/(\d{4})\.(\d+)/);
      papers.push({node: paper, panel: panel, month: match ? Number(match[1]) : 0,
        sequence: match ? Number(match[2]) : 0});
    });
  });
  var newestFirst = papers.slice().sort(function (a, b) {
    return b.month - a.month || b.sequence - a.sequence;
  });
  var allPanel = document.createElement('div');
  allPanel.className = 'publication-panel';
  allPanel.dataset.category = 'all';
  root.querySelector('[role="tabpanel"]').prepend(allPanel);
  function select(tab, focus) {
    tabs.forEach(function (item) {
      var active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    });
    var category = tab.getAttribute('data-category');
    if (category === 'all') {
      newestFirst.forEach(function (paper) { allPanel.appendChild(paper.node); });
    } else {
      papers.forEach(function (paper) { paper.panel.appendChild(paper.node); });
    }
    root.querySelectorAll('.publication-panel').forEach(function (panel) {
      panel.hidden = panel.getAttribute('data-category') !== category;
    });
    root.querySelector('[role="tabpanel"]').setAttribute('aria-labelledby', tab.id);
    if (focus) tab.focus();
  }
  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { select(tab, false); });
    tab.addEventListener('keydown', function (event) {
      var next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        select(tabs[next], true);
      }
    });
  });
  select(tabs[0], false);
  list.hidden = false;
});
