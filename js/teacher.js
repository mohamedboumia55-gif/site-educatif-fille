const Teacher = {
  synth: window.speechSynthesis,
  recognition: null,
  voiceFR: null,
  onResult: null,
  isListening: false,
  isSpeaking: false,

  init() {
    const loadVoice = () => {
      const voices = this.synth.getVoices();
      this.voiceFR =
        voices.find(v => v.lang === 'fr-FR' && /female|femme|amelie|thomas|julie/i.test(v.name)) ||
        voices.find(v => v.lang === 'fr-FR') ||
        voices.find(v => v.lang.startsWith('fr')) || null;
    };
    loadVoice();
    if (speechSynthesis.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = loadVoice;

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
      this.recognition = new SR();
      this.recognition.lang = 'fr-FR';
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.onresult = (e) => {
        const texte = e.results[0][0].transcript.trim();
        if (this.onResult) this.onResult(texte);
      };
      this.recognition.onend = () => { this.isListening = false; this._updateMicBtn(false); };
      this.recognition.onerror = () => { this.isListening = false; this._updateMicBtn(false); };
    }
  },

  // Type: 'normal' | 'encourage' | 'question' | 'explain' | 'sad'
  parler(texte, callback, type = 'normal') {
    this.synth.cancel();
    const u = new SpeechSynthesisUtterance(texte);
    u.lang = 'fr-FR';
    if (this.voiceFR) u.voice = this.voiceFR;

    switch (type) {
      case 'encourage': u.rate = 1.05; u.pitch = 1.35; break;
      case 'question':  u.rate = 0.92; u.pitch = 1.15; break;
      case 'explain':   u.rate = 0.85; u.pitch = 1.0;  break;
      case 'sad':       u.rate = 0.88; u.pitch = 0.9;  break;
      default:          u.rate = 0.95; u.pitch = 1.1;  break;
    }

    this.isSpeaking = true;
    this._setAvatarState('talking');

    u.onend = () => {
      this.isSpeaking = false;
      this._setAvatarState('idle');
      if (callback) callback();
    };
    u.onerror = () => {
      this.isSpeaking = false;
      this._setAvatarState('idle');
      if (callback) callback();
    };
    this.synth.speak(u);
  },

  encourager(texte, callback) { this.parler(texte, callback, 'encourage'); },
  expliquer(texte, callback)  { this.parler(texte, callback, 'explain'); },
  poserQuestion(texte, callback) { this.parler(texte, callback, 'question'); },
  consoler(texte, callback)   { this.parler(texte, callback, 'sad'); },

  ecouter(callback) {
    if (!this.recognition) { alert("Utilise Chrome ou Edge pour la reconnaissance vocale."); return; }
    this.onResult = callback;
    this.isListening = true;
    this._updateMicBtn(true);
    this._setAvatarState('listening');
    this.recognition.start();
  },

  arreterEcoute() {
    if (this.recognition && this.isListening) this.recognition.stop();
  },

  _setAvatarState(state) {
    const a = document.getElementById('teacher-avatar');
    if (!a) return;
    a.className = 'avatar-' + state;
  },

  _updateMicBtn(actif) {
    const btn = document.getElementById('btn-micro');
    if (!btn) return;
    btn.innerHTML = actif
      ? '<span class="mic-waves">🔴</span> J\'écoute...'
      : '🎤 Parler';
    btn.classList.toggle('actif', actif);
  }
};

// Effets sonores via Web Audio API
const SFX = {
  ctx: null,
  _getCtx() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    return this.ctx;
  },
  correct() {
    try {
      const ctx = this._getCtx();
      [523, 659, 784].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.frequency.value = freq;
        o.type = 'sine';
        g.gain.setValueAtTime(0.3, ctx.currentTime + i * 0.12);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.3);
        o.start(ctx.currentTime + i * 0.12);
        o.stop(ctx.currentTime + i * 0.12 + 0.3);
      });
    } catch(e) {}
  },
  incorrect() {
    try {
      const ctx = this._getCtx();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = 200;
      o.type = 'sawtooth';
      g.gain.setValueAtTime(0.2, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      o.start(ctx.currentTime);
      o.stop(ctx.currentTime + 0.4);
    } catch(e) {}
  },
  levelUp() {
    try {
      const ctx = this._getCtx();
      [523, 659, 784, 1047].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.frequency.value = freq;
        o.type = 'sine';
        g.gain.setValueAtTime(0.35, ctx.currentTime + i * 0.1);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.4);
        o.start(ctx.currentTime + i * 0.1);
        o.stop(ctx.currentTime + i * 0.1 + 0.4);
      });
    } catch(e) {}
  }
};

// Confettis sur bonne réponse
function lancerConfettis() {
  const colors = ['#ff6b9d','#c44dff','#ffe066','#4dffb8','#4db8ff'];
  for (let i = 0; i < 40; i++) {
    const c = document.createElement('div');
    c.style.cssText = `
      position:fixed;pointer-events:none;z-index:9999;
      width:${6+Math.random()*8}px;height:${6+Math.random()*8}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      border-radius:${Math.random()>0.5?'50%':'2px'};
      left:${Math.random()*100}vw;top:-10px;
      animation:confetti-fall ${1.2+Math.random()*1.5}s ease-in forwards;
      transform:rotate(${Math.random()*360}deg);
    `;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

// Injection CSS confettis
(function() {
  const s = document.createElement('style');
  s.textContent = `
    @keyframes confetti-fall {
      to { transform: translateY(105vh) rotate(720deg); opacity:0; }
    }
  `;
  document.head.appendChild(s);
})();
