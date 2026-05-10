function vegIcon(v, large = false) {
  const cls = large ? 'veg-emoji-lg' : 'veg-emoji';
  if (v.image) {
    return `<img src="${v.image}" alt="${v.name}" class="${cls} veg-img">`;
  }
  return `<span class="${cls}" aria-hidden="true">${v.emoji}</span>`;
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function getStateFromPath() {
  const parts = window.location.pathname.split('/').filter(Boolean);

  if (parts.length === 0) {
    return { screen: 'home', selectedVeg: null, selectedCut: null };
  }

  const veg = vegetables.find(v => v.id === parts[0]);
  if (!veg) {
    return { screen: 'home', selectedVeg: null, selectedCut: null };
  }

  if (parts.length === 1) {
    return { screen: 'cuts', selectedVeg: veg.id, selectedCut: null };
  }

  const cutIndex = veg.cuts.findIndex(c => slugify(c.label) === parts[1]);
  if (cutIndex === -1) {
    return { screen: 'cuts', selectedVeg: veg.id, selectedCut: null };
  }

  return { screen: 'results', selectedVeg: veg.id, selectedCut: cutIndex };
}

function navigate(path) {
  history.pushState(null, '', path);
  render();
}

function render() {
  const state = getStateFromPath();
  const app = document.getElementById('app');

  if (state.screen === 'home')    app.innerHTML = renderHome();
  if (state.screen === 'cuts')    app.innerHTML = renderCuts(state);
  if (state.screen === 'results') app.innerHTML = renderResults(state);

  attachListeners(state);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHome() {
  const cards = vegetables.map(v => `
    <button class="veg-card" data-path="/${v.id}" aria-label="${v.name}">
      ${vegIcon(v)}
      <span class="veg-name">${v.name}</span>
    </button>
  `).join('');

  return `
    <header class="app-header">
      <h1>Roasted</h1>
      <p>Select a vegetable to get started</p>
    </header>
    <div class="veg-grid">${cards}</div>
  `;
}

function renderCuts(state) {
  const veg = vegetables.find(v => v.id === state.selectedVeg);
  const buttons = veg.cuts.map(cut => `
    <button class="cut-btn" data-path="/${veg.id}/${slugify(cut.label)}">${cut.label}</button>
  `).join('');

  return `
    <button class="back-btn" data-path="/">← All vegetables</button>
    <div class="screen-header">
      ${vegIcon(veg, true)}
      <h2>${veg.name}</h2>
      <p class="cut-label">Choose a cut size</p>
    </div>
    <div class="cut-list">${buttons}</div>
  `;
}

function renderResults(state) {
  const veg = vegetables.find(v => v.id === state.selectedVeg);
  const cut = veg.cuts[state.selectedCut];

  const parBoilHTML = cut.parBoil ? `
    <div class="parboil-note">
      <span class="note-icon" aria-hidden="true">⚠️</span>
      <p><strong>Par-boil first</strong>${cut.parBoil}</p>
    </div>
  ` : '';

  return `
    <button class="back-btn back-btn--pumpkin" data-path="/${veg.id}">← ${veg.name}</button>
    <div class="screen-header">
      ${vegIcon(veg, true)}
      <h2>${veg.name}</h2>
      <p class="cut-label">${cut.label}</p>
    </div>
    <div class="result-card">
      <div class="result-row">
        <div class="result-label">Temperature</div>
        <div class="result-value pumpkin">${cut.temp}°F</div>
      </div>
      <div class="result-row">
        <div class="result-label">Roasting time</div>
        <div class="result-value green">${cut.timeMin}–${cut.timeMax} min</div>
      </div>
    </div>
    ${parBoilHTML}
  `;
}

function attachListeners(state) {
  document.querySelectorAll('[data-path]').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.path));
  });
}

window.addEventListener('popstate', render);

render();
