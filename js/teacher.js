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
        voices.find(v => v.lang === 'fr-FR' && /female|femme|julie|amelie/i.test(v.name)) ||
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

  _nettoyer(texte) {
    // Retire les emojis pour la synthèse vocale (évite "sire ampoule", "étoile", etc.)
    return texte
      .replace(/\p{Extended_Pictographic}/gu, '')
      .replace(/[‍️]/g, '')
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
    this._updateBubble(texte); // la bulle garde les emojis pour l'affichage
  },

  parler(t, cb)     { this._speak(t, 0.95, 1.1, cb); },
  encourager(t, cb) { this._speak(t, 1.05, 1.35, cb); },
  expliquer(t, cb)  { this._speak(t, 0.85, 1.0,  cb); },
  poserQuestion(t, cb){ this._speak(t, 0.92, 1.15, cb); },
  consoler(t, cb)   { this._speak(t, 0.88, 0.9,  cb); },

  ecouter(callback) {
    if (!this.recognition) { alert("Utilise Chrome ou Edge."); return; }
    this.onResult = callback;
    this.isListening = true;
    this._updateMicBtn(true);
    this._setState('listening');
    this.recognition.start();
  },

  arreterEcoute() { if (this.recognition && this.isListening) this.recognition.stop(); },

  _setState(state) {
    const el = document.getElementById('teacher-avatar');
    if (el) el.className = 'avatar-' + state;
  },

  _updateBubble(texte) {
    const b = document.getElementById('teacher-bubble');
    if (b) { b.style.opacity='0'; setTimeout(()=>{ b.textContent=texte; b.style.opacity='1'; }, 150); }
  },

  _updateMicBtn(actif) {
    const btn = document.getElementById('btn-micro');
    if (!btn) return;
    btn.textContent = actif ? '🔴 J\'écoute...' : '🎤 Parler';
    btn.classList.toggle('actif', actif);
  }
};

// Sons via Web Audio API
const SFX = {
  ctx: null,
  _ctx() { return this.ctx || (this.ctx = new (window.AudioContext || window.webkitAudioContext)()); },
  correct() {
    try {
      const c = this._ctx();
      [523,659,784].forEach((f,i) => {
        const o=c.createOscillator(), g=c.createGain();
        o.connect(g); g.connect(c.destination);
        o.frequency.value=f; o.type='sine';
        g.gain.setValueAtTime(0.25, c.currentTime+i*0.13);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime+i*0.13+0.35);
        o.start(c.currentTime+i*0.13); o.stop(c.currentTime+i*0.13+0.35);
      });
    } catch(e){}
  },
  incorrect() {
    try {
      const c=this._ctx(), o=c.createOscillator(), g=c.createGain();
      o.connect(g); g.connect(c.destination);
      o.frequency.value=180; o.type='sawtooth';
      g.gain.setValueAtTime(0.18, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime+0.45);
      o.start(c.currentTime); o.stop(c.currentTime+0.45);
    } catch(e){}
  },
  levelUp() {
    try {
      const c=this._ctx();
      [523,659,784,1047].forEach((f,i) => {
        const o=c.createOscillator(), g=c.createGain();
        o.connect(g); g.connect(c.destination);
        o.frequency.value=f; o.type='sine';
        g.gain.setValueAtTime(0.3, c.currentTime+i*0.1);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime+i*0.1+0.4);
        o.start(c.currentTime+i*0.1); o.stop(c.currentTime+i*0.1+0.4);
      });
    } catch(e){}
  }
};

// Confettis
function lancerConfettis() {
  const cols = ['#a5b4fc','#fb7185','#fde68a','#6ee7b7','#93c5fd','#f9a8d4'];
  for (let i=0; i<50; i++) {
    const d = document.createElement('div');
    const size = 5 + Math.random()*9;
    d.style.cssText = `position:fixed;pointer-events:none;z-index:9999;
      width:${size}px;height:${size}px;
      background:${cols[Math.floor(Math.random()*cols.length)]};
      border-radius:${Math.random()>.5?'50%':'3px'};
      left:${Math.random()*100}vw;top:-12px;
      animation:cffall ${1.3+Math.random()*1.6}s ease-in forwards;
      transform:rotate(${Math.random()*360}deg);opacity:0.9;`;
    document.body.appendChild(d);
    setTimeout(()=>d.remove(), 3200);
  }
}
(()=>{ const s=document.createElement('style'); s.textContent='@keyframes cffall{to{transform:translateY(110vh) rotate(800deg);opacity:0}}'; document.head.appendChild(s); })();

// Speech bubble fade
(()=>{ const s=document.createElement('style'); s.textContent='#teacher-bubble{transition:opacity 0.15s ease;}'; document.head.appendChild(s); })();
