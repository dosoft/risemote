(function () {
  const output = document.getElementById('release-meta');
  if (!output) return;
  const versionLink = document.getElementById('release-version');
  const ru = document.documentElement.lang === 'ru';
  fetch('https://api.github.com/repos/dosoft/risemote/releases/latest')
    .then(response => response.ok ? response.json() : null)
    .then(latest => {
      if (!latest?.tag_name) return;
      if (versionLink) {
        versionLink.href = latest.html_url || 'https://github.com/dosoft/risemote/releases/latest';
        versionLink.textContent = latest.tag_name;
      }
      const date = new Date(latest.published_at).toLocaleDateString(ru ? 'ru-RU' : 'en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
      if (Number.isNaN(Date.parse(latest.published_at))) return;
      const dateLabel = document.createElement('span');
      dateLabel.className = 'release-date';
      dateLabel.textContent = ` · ${date}`;
      output.insertBefore(dateLabel, versionLink?.nextSibling || null);
    })
    .catch(() => {});
})();
