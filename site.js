(() => {
  const data = window.siteContent || {};
  const safeUrl = value => {
    if (typeof value !== 'string' || !value.trim()) return null;
    try { const url = new URL(value, location.href); return url.protocol === 'https:' || (url.origin === location.origin && url.protocol === 'http:') ? url.href : null; } catch { return null; }
  };
  const text = (tag, value) => { const el = document.createElement(tag); el.textContent = value || ''; return el; };
  let viewerLibrary;
  function loadViewer() {
    if (customElements.get('model-viewer')) return Promise.resolve();
    if (!viewerLibrary) viewerLibrary = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://cdn.jsdelivr.net/npm/@google/model-viewer@4.1.0/dist/model-viewer.min.js';
      script.integrity = 'sha384-T4vc5AP9W2o3EVVQC6Is5mbKqFE2eysxg1XHwaZLquK0SjtY+4cLHoN3j1mK/MmB';
      script.crossOrigin = 'anonymous';
      const timer = setTimeout(() => fail(), 30000);
      const fail = () => { clearTimeout(timer); script.remove(); viewerLibrary = null; reject(new Error('Viewer unavailable')); };
      script.onerror = fail;
      script.onload = () => { clearTimeout(timer); customElements.get('model-viewer') ? resolve() : fail(); };
      document.head.append(script);
    });
    return viewerLibrary;
  }
  function preview(p) {
    const media = document.createElement('div'); media.className = 'project-media';
    const stage = document.createElement('div'); stage.className = 'model-stage';
    const hasModel = Boolean(safeUrl(p.modelUrl));
    if (!hasModel && safeUrl(p.imageUrl)) {
      const img = document.createElement('img'); img.src = safeUrl(p.imageUrl); img.alt = p.title + ' — assembled view'; img.loading = 'lazy'; stage.append(img);
    }
    media.append(stage);
    if (!hasModel) return media;
    const placeholder = text('span', '3D preview'); placeholder.className = 'model-placeholder'; stage.append(placeholder);
    const controls = document.createElement('div'); controls.className = 'viewer-controls';
    const start = text('button', 'Retry 3D'); start.type = 'button'; start.className = 'button secondary'; start.hidden = true;
    const reset = text('button', 'Reset view'); reset.type = 'button'; reset.className = 'button secondary'; reset.disabled = true;
    const hint = text('p', 'The 3D preview loads automatically.'); hint.className = 'viewer-hint'; hint.setAttribute('role', 'status'); hint.setAttribute('aria-live', 'polite');
    controls.append(start, reset); media.append(controls, hint);
    let loading = false;
    const activate = async () => {
      if (loading || stage.classList.contains('model-ready')) return;
      loading = true; start.hidden = true; reset.hidden = false; reset.disabled = true;
      stage.setAttribute('aria-busy', 'true'); placeholder.textContent = 'Loading 3D…'; hint.textContent = 'Loading ' + p.title + '…';
      let viewer;
      try {
        await loadViewer();
        viewer = document.createElement('model-viewer');
        viewer.setAttribute('alt', p.title + ' assembled 3D model. Drag or use arrow keys to rotate; pinch or scroll to zoom.');
        viewer.setAttribute('camera-controls', ''); viewer.setAttribute('touch-action', 'pan-y');
        viewer.setAttribute('camera-orbit', '35deg 65deg auto'); viewer.setAttribute('shadow-intensity', '1');
        viewer.setAttribute('loading', 'eager'); viewer.setAttribute('interaction-prompt', 'none');
        const loaded = new Promise((resolve, reject) => {
          const timer = setTimeout(() => reject(new Error('Model timed out')), 45000);
          viewer.addEventListener('load', () => { clearTimeout(timer); resolve(); }, { once: true });
          viewer.addEventListener('error', () => { clearTimeout(timer); reject(new Error('Model unavailable')); }, { once: true });
        });
        viewer.setAttribute('src', safeUrl(p.modelUrl)); stage.append(viewer);
        await loaded;
        stage.classList.add('model-ready'); placeholder.hidden = true; reset.disabled = false;
        hint.textContent = 'Drag to rotate · Pinch or scroll to zoom · Two fingers or right-drag to pan';
        reset.onclick = () => { viewer.cameraOrbit = '35deg 65deg auto'; viewer.cameraTarget = 'auto auto auto'; viewer.fieldOfView = 'auto'; };
      } catch {
        if (viewer) viewer.remove();
        start.hidden = false; reset.hidden = true; placeholder.textContent = '3D preview unavailable';
        hint.textContent = '3D couldn’t load here. Try again or download the print-ready STEP.';
      } finally {
        loading = false; stage.removeAttribute('aria-busy');
      }
    };
    start.addEventListener('click', activate);
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) { observer.disconnect(); activate(); }
      }, { rootMargin: '300px 0px' });
      observer.observe(stage);
    } else { activate(); }
    return media;
  }
  const projects = (data.projects || []).filter(p => safeUrl(p.downloadUrl));
  if (projects.length) {
    const target = document.getElementById('projects'); target.replaceChildren();
    for (const p of projects) {
      const card = document.createElement('article'); card.className = 'project project-download';
      if (p.id && /^[a-z0-9-]+$/.test(p.id)) card.id = p.id;
      if (safeUrl(p.imageUrl) || safeUrl(p.modelUrl)) card.append(preview(p));
      const details = document.createElement('div'); details.className = 'project-details';
      const label = text('p', p.category || 'COMPETITION FILE'); label.className = 'eyebrow';
      details.append(label, text('h3', p.title), text('p', p.description));
      if (p.version) details.append(text('small', p.version));
      const link = text('a', p.downloadLabel || 'Download STEP'); link.className = 'button primary'; link.href = safeUrl(p.downloadUrl);
      if (new URL(link.href).origin === location.origin) link.download = p.downloadFilename || '';
      details.append(link);
      if (p.downloadNote) { const note = text('p', p.downloadNote); note.className = 'download-note'; details.append(note); }
      card.append(details); target.append(card);
    }
    const anchor = document.getElementById(location.hash.slice(1));
    if (anchor && target.contains(anchor)) requestAnimationFrame(() => anchor.scrollIntoView({ behavior: 'instant' }));
  }
  for (const item of data.features || []) {
    if (!safeUrl(item.url)) continue;
    const card = document.createElement('article'); card.className = 'project';
    const link = text('a', item.title + ' ↗'); link.href = safeUrl(item.url); link.target = '_blank'; link.rel = 'noopener noreferrer';
    const title = document.createElement('h3'); title.append(link); card.append(title, text('p', item.description)); document.getElementById('features').append(card);
  }
})();
