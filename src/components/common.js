// Felles hjelpefunksjoner: statuslinje (viser lenkemål ved hover) og lagring av poeng
const store = {
  get(k, d) { try { const v = JSON.parse(sessionStorage.getItem(k)); return v ?? d; } catch (e) { return d; } },
  set(k, v) { try { sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};

function initStatusBar() {
  const bar = document.createElement('div');
  bar.id = 'statusbar';
  document.body.appendChild(bar);
  document.addEventListener('mouseover', e => {
    const el = e.target.closest('[data-url]');
    if (el) { bar.textContent = el.dataset.url; bar.classList.add('show'); }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('[data-url]')) bar.classList.remove('show');
  });
}
document.addEventListener('DOMContentLoaded', initStatusBar);

// Felles topptekst for ModHavn-sidene
function renderHeader(active, q) {
  const links = [['mods', 'Mods'], ['modpacks', 'Modpakker'], ['resourcepacks', 'Teksturpakker'], ['shaders', 'Shaders']]
    .map(([t, l]) => '<a class="l' + (active === t ? ' on' : '') + '" href="index.html?type=' + t + '">' + l + '</a>').join('');
  const h = document.getElementById('hdr');
  h.className = 'top';
  h.innerHTML = '<div class="wrap nav"><a class="logo" href="index.html"><i></i>ModHavn</a>' + links +
    '<form action="index.html" method="get" class="sf"><input name="q" type="search" placeholder="Søk etter mods…" autocomplete="off"></form></div>';
  h.querySelector('input').value = q || '';
}
