const Profiles = {
  STORAGE_KEY: 'ecole_users',
  CURRENT_KEY: 'ecole_current_user',

  getAll() { return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}'); },
  saveAll(d) { localStorage.setItem(this.STORAGE_KEY, JSON.stringify(d)); },
  getCurrent() { return localStorage.getItem(this.CURRENT_KEY) || null; },
  setCurrent(n) { localStorage.setItem(this.CURRENT_KEY, n); },

  create(name) {
    const all = this.getAll();
    if (!all[name]) all[name] = { xp: 0, hearts: 5, streak: 0, lastDate: null, progression: {} };
    this.saveAll(all);
    this.setCurrent(name);
  },

  getData() {
    const name = this.getCurrent();
    if (!name) return null;
    const all = this.getAll();
    if (!all[name]) all[name] = { xp: 0, hearts: 5, streak: 0, lastDate: null, progression: {} };
    return all[name];
  },

  getLevel() {
    const d = this.getData();
    return d ? Math.floor(d.xp / 100) + 1 : 1;
  },

  getLevelXP() {
    const d = this.getData();
    if (!d) return { current: 0, needed: 100 };
    return { current: d.xp % 100, needed: 100 };
  },

  addXP(amount = 10) {
    const name = this.getCurrent();
    if (!name) return false;
    const all = this.getAll();
    const prev = Math.floor(all[name].xp / 100);
    all[name].xp = (all[name].xp || 0) + amount;
    const next = Math.floor(all[name].xp / 100);
    this.saveAll(all);
    return next > prev; // retourne true si niveau supérieur
  },

  loseHeart() {
    const name = this.getCurrent();
    if (!name) return;
    const all = this.getAll();
    all[name].hearts = Math.max(0, (all[name].hearts || 5) - 1);
    this.saveAll(all);
    return all[name].hearts;
  },

  updateStreak() {
    const name = this.getCurrent();
    if (!name) return;
    const all = this.getAll();
    const today = new Date().toDateString();
    if (all[name].lastDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    all[name].streak = all[name].lastDate === yesterday ? (all[name].streak || 0) + 1 : 1;
    all[name].lastDate = today;
    this.saveAll(all);
  },

  saveProgression(matiere, data) {
    const name = this.getCurrent();
    if (!name) return;
    const all = this.getAll();
    if (!all[name].progression) all[name].progression = {};
    all[name].progression[matiere] = { ...all[name].progression[matiere], ...data };
    this.saveAll(all);
  },

  logout() {
    localStorage.removeItem(this.CURRENT_KEY);
    const isInPages = window.location.pathname.includes('/pages/');
    window.location.href = (isInPages ? '../' : '') + 'index.html';
  }
};

function initProfileSystem(onReady) {
  injectProfileStyles();
  const current = Profiles.getCurrent();
  if (current) {
    Profiles.updateStreak();
    updateHUD();
    if (onReady) onReady(current);
    return;
  }
  showProfileScreen(onReady);
}

function updateHUD() {
  const d = Profiles.getData();
  if (!d) return;
  const lxp = Profiles.getLevelXP();
  const level = Profiles.getLevel();

  const el = (id) => document.getElementById(id);
  if (el('hud-xp'))      el('hud-xp').textContent = d.xp;
  if (el('hud-level'))   el('hud-level').textContent = level;
  if (el('hud-streak'))  el('hud-streak').textContent = d.streak || 0;
  if (el('hud-hearts'))  el('hud-hearts').textContent = '❤️'.repeat(Math.max(0, d.hearts || 5));
  if (el('hud-xp-bar'))  el('hud-xp-bar').style.width = lxp.current + '%';
  if (el('user-name-display')) el('user-name-display').textContent = Profiles.getCurrent();
}

function showProfileScreen(onReady) {
  const all = Profiles.getAll();
  const names = Object.keys(all);

  const overlay = document.createElement('div');
  overlay.id = 'profile-overlay';
  overlay.innerHTML = `
    <div class="profile-modal">
      <div class="profile-owl">🦉</div>
      <h2>Bonjour !</h2>
      <p class="profile-sub">Qui es-tu aujourd'hui ?</p>
      ${names.length > 0 ? `
        <div class="profile-list">
          ${names.map(n => {
            const d = all[n];
            const lvl = Math.floor((d.xp||0) / 100) + 1;
            return `<button class="profile-item" onclick="selectProfile('${n}')">
              <span class="profile-avatar-sm">🧒</span>
              <div class="profile-info">
                <span class="profile-name">${n}</span>
                <span class="profile-stats">Niveau ${lvl} · ${d.xp||0} XP · 🔥 ${d.streak||0}</span>
              </div>
              <span class="profile-arrow">›</span>
            </button>`;
          }).join('')}
        </div>
        <div class="profile-or"><span>ou crée un nouveau profil</span></div>
      ` : `<p class="profile-sub" style="margin-bottom:16px;">Écris ton prénom pour commencer !</p>`}
      <div class="profile-new">
        <input type="text" id="new-profile-input" placeholder="Ton prénom..." maxlength="20" autocomplete="off">
        <button class="profile-create-btn" onclick="createProfile()">C'est parti ! 🚀</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  document.getElementById('new-profile-input').addEventListener('keypress', e => { if (e.key === 'Enter') createProfile(); });
  window._profileOnReady = onReady;
  setTimeout(() => document.getElementById('new-profile-input').focus(), 400);
}

function selectProfile(name) {
  Profiles.setCurrent(name);
  Profiles.updateStreak();
  closeProfileScreen(name);
}

function createProfile() {
  const input = document.getElementById('new-profile-input');
  const name = input.value.trim();
  if (!name) { input.classList.add('shake'); setTimeout(() => input.classList.remove('shake'), 500); return; }
  Profiles.create(name);
  closeProfileScreen(name);
}

function closeProfileScreen(name) {
  const overlay = document.getElementById('profile-overlay');
  if (overlay) { overlay.style.animation = 'fadeOut 0.25s forwards'; setTimeout(() => overlay.remove(), 250); }
  updateHUD();
  if (window._profileOnReady) window._profileOnReady(name);
}

function injectProfileStyles() {
  if (document.getElementById('profile-styles')) return;
  const s = document.createElement('style');
  s.id = 'profile-styles';
  s.textContent = `
    #profile-overlay {
      position:fixed;inset:0;
      background:linear-gradient(135deg,rgba(100,0,200,0.7),rgba(200,0,100,0.6));
      display:flex;align-items:center;justify-content:center;z-index:2000;
      backdrop-filter:blur(8px);animation:fadeIn 0.3s ease;
    }
    @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
    @keyframes fadeOut { from{opacity:1} to{opacity:0} }
    @keyframes popIn   { from{transform:scale(0.6) translateY(30px);opacity:0} to{transform:scale(1) translateY(0);opacity:1} }
    @keyframes shake   { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-8px)} 75%{transform:translateX(8px)} }
    .profile-modal {
      background:white;border-radius:32px;padding:36px 28px;
      max-width:400px;width:92%;text-align:center;
      box-shadow:0 30px 80px rgba(0,0,0,0.3);
      animation:popIn 0.4s cubic-bezier(0.34,1.56,0.64,1);
    }
    .profile-owl { font-size:4.5rem;margin-bottom:4px;animation:float 2s ease-in-out infinite; }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
    .profile-modal h2 { font-size:1.8rem;font-weight:900;background:linear-gradient(90deg,#c44dff,#ff6b9d);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:4px; }
    .profile-sub { color:#888;font-size:0.95rem;margin-bottom:16px; }
    .profile-list { display:flex;flex-direction:column;gap:8px;margin-bottom:12px;max-height:220px;overflow-y:auto; }
    .profile-item {
      display:flex;align-items:center;gap:12px;
      background:#f8f4ff;border:2px solid #e8d8ff;border-radius:16px;
      padding:12px 16px;cursor:pointer;transition:all 0.2s;text-align:left;
      font-family:'Nunito',sans-serif;
    }
    .profile-item:hover { background:#efe0ff;border-color:#c44dff;transform:translateX(4px); }
    .profile-avatar-sm { font-size:1.8rem; }
    .profile-info { flex:1;display:flex;flex-direction:column; }
    .profile-name { font-weight:800;color:#333;font-size:1rem; }
    .profile-stats { font-size:0.8rem;color:#888;font-weight:600; }
    .profile-arrow { color:#c44dff;font-size:1.4rem;font-weight:700; }
    .profile-or { position:relative;margin:14px 0;text-align:center; }
    .profile-or::before { content:'';position:absolute;top:50%;left:0;right:0;height:1px;background:#eee; }
    .profile-or span { position:relative;background:white;padding:0 10px;color:#aaa;font-size:0.85rem; }
    .profile-new { display:flex;flex-direction:column;gap:10px; }
    .profile-new input {
      padding:13px 18px;border:2px solid #e0d0ff;border-radius:16px;
      font-family:'Nunito',sans-serif;font-size:1rem;font-weight:600;
      text-align:center;outline:none;transition:all 0.2s;
    }
    .profile-new input:focus { border-color:#c44dff;box-shadow:0 0 0 4px rgba(196,77,255,0.15); }
    .profile-new input.shake { animation:shake 0.4s ease;border-color:#e03a3a; }
    .profile-create-btn {
      background:linear-gradient(135deg,#c44dff,#ff6b9d);color:white;border:none;
      border-radius:16px;padding:14px;font-family:'Nunito',sans-serif;
      font-size:1.05rem;font-weight:800;cursor:pointer;
      box-shadow:0 6px 20px rgba(196,77,255,0.4);transition:all 0.2s;
    }
    .profile-create-btn:hover { transform:scale(1.03);box-shadow:0 8px 25px rgba(196,77,255,0.5); }
  `;
  document.head.appendChild(s);
}
