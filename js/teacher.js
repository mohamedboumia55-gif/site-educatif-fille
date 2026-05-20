const Teacher = {
  synth: window.speechSynthesis,
  recognition: null,
  voiceFR: null,
  onResult: null,
  isListening: false,

  init() {
    const loadVoice = () => {
      const voices = this.synth.getVoices();
      this.voiceFR =
        voices.find(v => v.lang === 'fr-FR' && /female|femme|julie|amelie|audrey|hortense/i.test(v.name)) ||
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
      this.recognition.onresult = e => { if (this.onResult) this.onResult(e.results[0][0].transcript.trim()); };
      this.recognition.onend  = () => { this.isListening = false; this._updateMicBtn(false); this._setState('idle'); };
      this.recognition.onerror= () => { this.isListening = false; this._updateMicBtn(false); this._setState('idle'); };
    }
  },

  // ── Utilitaires ─────────────────────────────────────────────

  _pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; },

  _nettoyer(texte) {
    return texte
      .replace(/\p{Extended_Pictographic}/gu, '')
      .replace(/\s+/g, ' ')
      .trim();
  },

  _speak(texte, rate, pitch, callback) {
    this.synth.cancel();
    const tts = this._nettoyer(texte) || texte;
    const u = new SpeechSynthesisUtterance(tts);
    u.lang = 'fr-FR'; u.rate = rate; u.pitch = pitch;
    if (this.voiceFR) u.voice = this.voiceFR;
    this._setState('talking');
    u.onend = u.onerror = () => { this._setState('idle'); if (callback) callback(); };
    this.synth.speak(u);
    this._updateBubble(texte);
  },

  // ── Méthodes de base ─────────────────────────────────────────
  parler(t, cb)       { this._speak(t, 0.95, 1.10, cb); },
  encourager(t, cb)   { this._speak(t, 1.00, 1.30, cb); },
  expliquer(t, cb)    { this._speak(t, 0.85, 1.00, cb); },
  poserQuestion(t,cb) { this._speak(t, 0.92, 1.15, cb); },
  consoler(t, cb)     { this._speak(t, 0.88, 0.95, cb); },

  // ── Méthodes pédagogiques réactives ─────────────────────────

  /**
   * Réaction après une bonne réponse.
   * @param {string} name     - prénom de l'élève
   * @param {number} streak   - nb de bonnes réponses consécutives
   * @param {string} expl     - explication pédagogique (expl_bravo)
   */
  reagirCorrect(name, streak, expl) {
    let msg;
    if (streak >= 5) {
      msg = this._pick([
        `${streak} bonnes réponses d'affilée ${name} ! Tu es vraiment incroyable !`,
        `Waou ! ${streak} de suite ! ${name}, tu maîtrises parfaitement ça !`,
        `${name}, je suis bluffée ! ${streak} bonnes réponses sans faute !`,
      ]);
    } else if (streak === 3) {
      msg = this._pick([
        `3 bonnes réponses d'affilée ${name} ! Tu es en feu ! ${expl}`,
        `Bravo, bravo, bravo ${name} ! 3 sur 3 ! ${expl}`,
        `${name}, quelle série ! 3 d'affilée ! ${expl}`,
      ]);
    } else {
      msg = this._pick([
        `Excellent ${name} ! ${expl}`,
        `Parfait ! ${expl}`,
        `Bravo ${name}, c'est exactement ça ! ${expl}`,
        `Super ! Tu as très bien compris ${name} ! ${expl}`,
        `C'est ça ! Magnifique ${name} ! ${expl}`,
        `Oui ! ${name} a trouvé ! ${expl}`,
      ]);
    }
    this._setState('celebrate');
    this.encourager(msg);
  },

  /**
   * Réaction après une mauvaise réponse.
   * @param {string} name     - prénom de l'élève
   * @param {number} nbWrong  - nb d'erreurs consécutives
   * @param {string} expl     - explication pédagogique (expl_erreur)
   */
  reagirErreur(name, nbWrong, expl) {
    let msg;
    if (nbWrong >= 3) {
      msg = this._pick([
        `${name}, je vois que cette règle est difficile. Pas de panique, c'est normal ! Rappelons bien ensemble : ${expl}`,
        `Ce point est compliqué ${name}, mais on va y arriver ! Voici comment retenir : ${expl}`,
        `${name}, on s'arrête un moment. Cette règle mérite qu'on l'explique bien : ${expl}`,
      ]);
    } else if (nbWrong === 2) {
      msg = this._pick([
        `Encore une petite erreur ${name}. Attention à cette règle : ${expl}`,
        `${name}, souviens-toi bien de ça : ${expl}`,
        `Deux erreurs de suite ${name}. Retenons bien : ${expl}`,
      ]);
    } else {
      msg = this._pick([
        `Pas tout à fait ${name}. ${expl}`,
        `Presque ! Mais attention : ${expl}`,
        `${name}, souviens-toi : ${expl}`,
        `Ce n'est pas ça ${name}. ${expl}`,
        `Attention ${name} ! ${expl}`,
      ]);
    }
    this.consoler(msg);
  },

  /**
   * Introduire un exercice de façon naturelle.
   * @param {string} name   - prénom
   * @param {number} num    - numéro de l'exercice (1-based)
   * @param {number} total  - total d'exercices
   * @param {string} rappel - texte rappel/indice (sans emoji)
   */
  introduire(name, num, total, rappel) {
    const intro = this._pick([
      ``,
      ``,
      `Question ${num} sur ${total} ${name}. `,
      `Voici la question ${num}, ${name}. `,
    ]);
    const msg = rappel
      ? intro + rappel
      : intro + "Lis bien et choisis la bonne réponse.";
    this.poserQuestion(msg);
  },

  /**
   * Encouragement si l'élève hésite trop longtemps (>15s sans répondre).
   */
  encouragerDelai(name) {
    this._speak(this._pick([
      `Prends ton temps ${name}. Relis bien l'indice et fais confiance à toi !`,
      `Tu hésites ${name} ? C'est normal. Relis la question doucement.`,
      `${name}, relis calmement. La réponse est dans les mots de la question !`,
      `Pas de stress ${name} ! Réfléchis bien, tu peux y arriver.`,
    ]), 0.88, 1.0);
  },

  /**
   * Message de fin de thème, personnalisé selon le score.
   */
  celebrerFin(name, correct, total) {
    const pct = total > 0 ? Math.round(correct / total * 100) : 0;
    let msg;
    if (pct === 100) {
      msg = this._pick([
        `PARFAIT ${name} ! 100 pourcent ! Tu as tout réussi ! Je suis très fière de toi !`,
        `Incroyable ${name} ! Zéro faute ! Tu maîtrises parfaitement ce thème !`,
      ]);
    } else if (pct >= 80) {
      msg = this._pick([
        `Excellent ${name} ! ${correct} exercices sur ${total} réussis ! Tu te débrouilles vraiment bien !`,
        `Bravo ${name} ! ${pct} pourcent de réussite ! C'est du très bon travail !`,
        `${name}, je suis fière de toi ! ${correct} sur ${total}, c'est excellent !`,
      ]);
    } else if (pct >= 50) {
      msg = this._pick([
        `Bien joué ${name} ! ${correct} sur ${total}. Tu progresses, continue à t'entraîner !`,
        `${name}, tu as réussi ${correct} exercices sur ${total}. C'est bien ! Encore un peu d'entraînement et tu vas maîtriser ça !`,
      ]);
    } else {
      msg = this._pick([
        `${name}, tu as fait ${correct} bonnes réponses sur ${total}. Ce n'est pas grave ! On peut recommencer et tu vas progresser. L'important c'est de pratiquer !`,
        `${correct} sur ${total} ${name}. Ce thème est difficile, mais avec de la pratique tu vas y arriver ! On recommence ?`,
      ]);
    }
    this._setState('celebrate');
    this.encourager(msg);
  },

  /**
   * Accueil au début d'un thème (sur l'écran de leçon).
   */
  accueillir(name, topicName) {
    const msgs = [
      `Bonjour ${name} ! Aujourd'hui on travaille sur ${topicName}. Lis bien la leçon avant de commencer !`,
      `${name}, on va découvrir ${topicName} ensemble. Prends le temps de bien lire avant les exercices !`,
      `Prête ${name} ? On commence ${topicName} ! Lis bien la leçon, puis clique sur commencer.`,
    ];
    this.parler(this._pick(msgs));
  },

  // ── Reconnaissance vocale ────────────────────────────────────
  ecouter(callback) {
    if (!this.recognition) {
      this._speak("Désolée, la reconnaissance vocale n'est disponible que sur Chrome ou Edge.", 0.9, 1.0);
      return;
    }
    this.onResult = callback;
    this.isListening = true;
    this._updateMicBtn(true);
    this._setState('listening');
    this.recognition.start();
  },

  arreterEcoute() {
    if (this.recognition && this.isListening) this.recognition.stop();
  },

  // ── DOM ──────────────────────────────────────────────────────
  _setState(state) {
    const el = document.getElementById('teacher-avatar');
    if (el) el.className = 'avatar-' + state;
  },

  _updateBubble(texte) {
    const b = document.getElementById('teacher-bubble');
    if (b) {
      b.style.opacity = '0';
      setTimeout(() => { b.textContent = texte; b.style.opacity = '1'; }, 150);
    }
  },

  _updateMicBtn(actif) {
    const btn = document.getElementById('btn-micro');
    if (!btn) return;
    btn.textContent = actif ? '🔴 J\'écoute...' : '🎤 Parler';
    btn.classList.toggle('actif', actif);
  }
};

// ── Effets sonores ───────────────────────────────────────────────
const SFX = {
  ctx: null,
  _ctx() { return this.ctx || (this.ctx = new (window.AudioContext || window.webkitAudioContext)()); },
  correct() {
    try {
      const c = this._ctx();
      [523, 659, 784].forEach((f, i) => {
        const o = c.createOscillator(), g = c.createGain();
        o.connect(g); g.connect(c.destination);
        o.frequency.value = f; o.type = 'sine';
        g.gain.setValueAtTime(0.25, c.currentTime + i * 0.13);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.13 + 0.35);
        o.start(c.currentTime + i * 0.13); o.stop(c.currentTime + i * 0.13 + 0.35);
      });
    } catch(e) {}
  },
  incorrect() {
    try {
      const c = this._ctx(), o = c.createOscillator(), g = c.createGain();
      o.connect(g); g.connect(c.destination);
      o.frequency.value = 180; o.type = 'sawtooth';
      g.gain.setValueAtTime(0.18, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.45);
      o.start(c.currentTime); o.stop(c.currentTime + 0.45);
    } catch(e) {}
  },
  levelUp() {
    try {
      const c = this._ctx();
      [523, 659, 784, 1047].forEach((f, i) => {
        const o = c.createOscillator(), g = c.createGain();
        o.connect(g); g.connect(c.destination);
        o.frequency.value = f; o.type = 'sine';
        g.gain.setValueAtTime(0.3, c.currentTime + i * 0.1);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.1 + 0.4);
        o.start(c.currentTime + i * 0.1); o.stop(c.currentTime + i * 0.1 + 0.4);
      });
    } catch(e) {}
  }
};

// ── Confettis ────────────────────────────────────────────────────
function lancerConfettis() {
  const cols = ['#a5b4fc', '#fb7185', '#fde68a', '#6ee7b7', '#93c5fd', '#f9a8d4', '#fbbf24'];
  for (let i = 0; i < 60; i++) {
    const d = document.createElement('div');
    const size = 5 + Math.random() * 9;
    d.style.cssText = `position:fixed;pointer-events:none;z-index:9999;
      width:${size}px;height:${size}px;
      background:${cols[Math.floor(Math.random() * cols.length)]};
      border-radius:${Math.random() > .5 ? '50%' : '3px'};
      left:${Math.random() * 100}vw;top:-12px;
      animation:cffall ${1.2 + Math.random() * 1.5}s ease-in forwards;
      animation-delay:${Math.random() * 0.5}s;
      transform:rotate(${Math.random() * 360}deg);`;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 3000);
  }
}
(()=>{
  const s = document.createElement('style');
  s.textContent = `
    @keyframes cffall { to { transform: translateY(110vh) rotate(800deg); opacity:0; } }
    #teacher-bubble { transition: opacity 0.15s ease; }
  `;
  document.head.appendChild(s);
})();
