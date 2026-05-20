// Gestion des profils utilisateurs
const Profiles = {
  STORAGE_KEY: 'ecole_users',
  CURRENT_KEY: 'ecole_current_user',

  // Récupère tous les profils
  getAll() {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
  },

  // Sauvegarde tous les profils
  saveAll(data) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  },

  // Profil actif
  getCurrent() {
    return localStorage.getItem(this.CURRENT_KEY) || null;
  },

  setCurrent(name) {
    localStorage.setItem(this.CURRENT_KEY, name);
  },

  // Créer un nouveau profil
  create(name) {
    const all = this.getAll();
    if (!all[name]) {
      all[name] = { score: 0, progression: {} };
      this.saveAll(all);
    }
    this.setCurrent(name);
  },

  // Score du profil actif
  getScore() {
    const name = this.getCurrent();
    if (!name) return 0;
    const all = this.getAll();
    return all[name]?.score || 0;
  },

  addPoint() {
    const name = this.getCurrent();
    if (!name) return;
    const all = this.getAll();
    if (!all[name]) all[name] = { score: 0, progression: {} };
    all[name].score = (all[name].score || 0) + 1;
    this.saveAll(all);
    return all[name].score;
  },

  // Progression par matière
  getProgression(matiere) {
    const name = this.getCurrent();
    if (!name) return {};
    const all = this.getAll();
    return all[name]?.progression?.[matiere] || {};
  },

  saveProgression(matiere, data) {
    const name = this.getCurrent();
    if (!name) return;
    const all = this.getAll();
    if (!all[name]) all[name] = { score: 0, progression: {} };
    if (!all[name].progression) all[name].progression = {};
    all[name].progression[matiere] = { ...all[name].progression[matiere], ...data };
    this.saveAll(all);
  },

  // Déconnexion (retour à la sélection)
  logout() {
    localStorage.removeItem(this.CURRENT_KEY);
    window.location.href = getRootPath() + 'index.html';
  }
};

// Calcule le chemin relatif vers la racine (pour les sous-pages)
function getRootPath() {
  const depth = window.location.pathname.split('/').length - 1;
  const isInPages = window.location.pathname.includes('/pages/');
  return isInPages ? '../' : '';
}

// Injecte le sélecteur de profil dans la page courante
function initProfileSystem(onReady) {
  // Injecter les styles de l'overlay
  injectProfileStyles();

  const current = Profiles.getCurrent();
  if (current) {
    // Profil déjà sélectionné : mettre à jour le score affiché
    updateScoreDisplay();
    if (onReady) onReady(current);
    return;
  }

  // Aucun profil : afficher l'écran de sélection
  showProfileScreen(onReady);
}

function showProfileScreen(onReady) {
  const all = Profiles.getAll();
  const names = Object.keys(all);

  const overlay = document.createElement('div');
  overlay.id = 'profile-overlay';
  overlay.innerHTML = `
    <div class="profile-modal">
      <div class="profile-avatar">🦉</div>
      <h2>Bonjour ! Qui es-tu ?</h2>
      ${names.length > 0 ? `
        <p class="profile-subtitle">Choisis ton prénom ou crée un nouveau profil</p>
        <div class="profile-list" id="profile-list">
          ${names.map(n => `
            <button class="profile-item" onclick="selectProfile('${n}')">
              <span class="profile-icon">👤</span>
              <span class="profile-name">${n}</span>
              <span class="profile-score">⭐ ${all[n].score || 0}</span>
            </button>
          `).join('')}
        </div>
        <div class="profile-divider">ou</div>
      ` : `<p class="profile-subtitle">Écris ton prénom pour commencer !</p>`}
      <div class="profile-new">
        <input type="text" id="new-profile-input" placeholder="Ton prénom..." maxlength="20" autocomplete="off">
        <button class="profile-create-btn" onclick="createProfile()">Créer mon profil ➜</button>
      </div>
      <p class="profile-hint">💡 Ton score et ta progression seront sauvegardés !</p>
    </div>
  `;
  document.body.appendChild(overlay);

  // Valider avec Entrée
  document.getElementById('new-profile-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') createProfile();
  });

  window._profileOnReady = onReady;

  // Focus automatique
  setTimeout(() => document.getElementById('new-profile-input').focus(), 300);
}

function selectProfile(name) {
  Profiles.setCurrent(name);
  closeProfileScreen(name);
}

function createProfile() {
  const input = document.getElementById('new-profile-input');
  const name = input.value.trim();
  if (!name) {
    input.style.borderColor = '#e03a3a';
    input.placeholder = 'Écris ton prénom !';
    return;
  }
  Profiles.create(name);
  closeProfileScreen(name);
}

function closeProfileScreen(name) {
  const overlay = document.getElementById('profile-overlay');
  if (overlay) overlay.remove();
  updateScoreDisplay();
  if (window._profileOnReady) window._profileOnReady(name);
}

function updateScoreDisplay() {
  const el = document.getElementById('score-total');
  if (el) el.textContent = Profiles.getScore();

  const name = Profiles.getCurrent();
  const nameEl = document.getElementById('user-name-display');
  if (nameEl && name) nameEl.textContent = name;
}

function injectProfileStyles() {
  if (document.getElementById('profile-styles')) return;
  const style = document.createElement('style');
  style.id = 'profile-styles';
  style.textContent = `
    #profile-overlay {
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.55);
      display: flex; align-items: center; justify-content: center;
      z-index: 1000;
      backdrop-filter: blur(4px);
    }
    .profile-modal {
      background: white;
      border-radius: 28px;
      padding: 32px 28px;
      max-width: 420px; width: 90%;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0,0,0,0.25);
      animation: popIn 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }
    @keyframes popIn {
      from { transform: scale(0.7); opacity: 0; }
      to   { transform: scale(1);   opacity: 1; }
    }
    .profile-avatar { font-size: 4rem; margin-bottom: 8px; }
    .profile-modal h2 { font-size: 1.6rem; font-weight: 800; color: #c44dff; margin-bottom: 6px; }
    .profile-subtitle { color: #666; font-size: 0.95rem; margin-bottom: 16px; }
    .profile-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 8px; }
    .profile-item {
      display: flex; align-items: center; gap: 10px;
      background: #f5f0ff; border: 2px solid #e0d0ff;
      border-radius: 14px; padding: 12px 16px;
      font-family: 'Nunito', sans-serif; font-size: 1rem; font-weight: 700;
      cursor: pointer; transition: all 0.2s; color: #333;
    }
    .profile-item:hover { background: #efe0ff; border-color: #c44dff; transform: scale(1.02); }
    .profile-icon { font-size: 1.4rem; }
    .profile-name { flex: 1; text-align: left; }
    .profile-score { color: #b06000; font-size: 0.9rem; }
    .profile-divider { color: #aaa; font-size: 0.9rem; margin: 12px 0; }
    .profile-new { display: flex; flex-direction: column; gap: 10px; }
    .profile-new input {
      width: 100%; padding: 12px 16px;
      border: 2px solid #ddd; border-radius: 14px;
      font-family: 'Nunito', sans-serif; font-size: 1rem; font-weight: 600;
      outline: none; transition: border-color 0.2s; text-align: center;
    }
    .profile-new input:focus { border-color: #c44dff; }
    .profile-create-btn {
      background: linear-gradient(90deg, #ff6b9d, #c44dff);
      color: white; border: none; border-radius: 14px;
      padding: 13px; font-family: 'Nunito', sans-serif;
      font-size: 1rem; font-weight: 700; cursor: pointer;
      transition: opacity 0.2s, transform 0.2s;
      box-shadow: 0 4px 14px rgba(196,77,255,0.35);
    }
    .profile-create-btn:hover { opacity: 0.9; transform: scale(1.03); }
    .profile-hint { color: #999; font-size: 0.82rem; margin-top: 14px; }
  `;
  document.head.appendChild(style);
}
