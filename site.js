(() => {
  const data = window.siteContent || {};
  const safeUrl = value => { try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; } catch { return null; } };
  const text = (tag, value) => { const el = document.createElement(tag); el.textContent = value || ''; return el; };
  const projects = (data.projects || []).filter(p => safeUrl(p.downloadUrl));
  if (projects.length) {
    const target = document.getElementById('projects'); target.replaceChildren();
    for (const p of projects) {
      const card = document.createElement('article'); card.className = 'project';
      if (p.id && /^[a-z0-9-]+$/.test(p.id)) card.id = p.id;
      if (safeUrl(p.imageUrl)) { const img = document.createElement('img'); img.src = safeUrl(p.imageUrl); img.alt = p.title; img.loading = 'lazy'; card.append(img); }
      card.append(text('h3', p.title), text('p', p.description));
      if (p.version) card.append(text('small', p.version));
      const link = text('a', 'Download STEP ↧'); link.className = 'button primary'; link.href = safeUrl(p.downloadUrl); card.append(link); target.append(card);
    }
  }
  for (const item of data.features || []) {
    if (!safeUrl(item.url)) continue;
    const card = document.createElement('article'); card.className = 'project';
    const link = text('a', item.title + ' ↗'); link.href = safeUrl(item.url); link.target = '_blank'; link.rel = 'noopener noreferrer';
    const title = document.createElement('h3'); title.append(link); card.append(title, text('p', item.description)); document.getElementById('features').append(card);
  }
})();
