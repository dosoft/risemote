(function () {
  const output = document.getElementById('release-meta');
  if (!output) return;
  const ru = document.documentElement.lang === 'ru';
  fetch('https://api.github.com/repos/dosoft/risemote/releases/latest')
    .then(response => response.ok ? response.json() : null)
    .then(latest => {
      if (!latest?.tag_name) return;
      const date = new Date(latest.published_at).toLocaleDateString(ru ? 'ru-RU' : 'en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
      output.textContent = ru ? 'Последний релиз: ' : 'Latest release: ';
      const version = document.createElement('strong');
      version.className = 'release-version';
      version.textContent = latest.tag_name;
      output.append(version, ` · ${date}`);
    })
    .catch(() => {});
})();
