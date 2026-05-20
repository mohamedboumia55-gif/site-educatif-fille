// Moteur vocal du professeur virtuel
const Teacher = {
  synth: window.speechSynthesis,
  recognition: null,
  voiceFR: null,
  onResult: null,
  isListening: false,

  init() {
    // Charger la voix française
    const loadVoice = () => {
      const voices = this.synth.getVoices();
      this.voiceFR =
        voices.find(v => v.lang === 'fr-FR' && v.name.toLowerCase().includes('female')) ||
        voices.find(v => v.lang === 'fr-FR') ||
        voices.find(v => v.lang.startsWith('fr')) ||
        null;
    };
    loadVoice();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoice;
    }

    // Reconnaissance vocale
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

      this.recognition.onend = () => {
        this.isListening = false;
        this._updateMicBtn(false);
      };

      this.recognition.onerror = (e) => {
        console.warn('Erreur micro :', e.error);
        this.isListening = false;
        this._updateMicBtn(false);
      };
    }
  },

  // Le professeur parle
  parler(texte, callback) {
    this.synth.cancel();
    const utterance = new SpeechSynthesisUtterance(texte);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    if (this.voiceFR) utterance.voice = this.voiceFR;
    if (callback) utterance.onend = callback;
    this._animerAvatar(true);
    utterance.onend = () => {
      this._animerAvatar(false);
      if (callback) callback();
    };
    this.synth.speak(utterance);
  },

  // Écouter la fille
  ecouter(callback) {
    if (!this.recognition) {
      alert("Ton navigateur ne supporte pas la reconnaissance vocale. Utilise Chrome ou Edge.");
      return;
    }
    this.onResult = callback;
    this.isListening = true;
    this._updateMicBtn(true);
    this.recognition.start();
  },

  // Arrêter d'écouter
  arreterEcoute() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
  },

  _animerAvatar(actif) {
    const avatar = document.getElementById('teacher-avatar');
    if (!avatar) return;
    if (actif) avatar.classList.add('parle');
    else avatar.classList.remove('parle');
  },

  _updateMicBtn(actif) {
    const btn = document.getElementById('btn-micro');
    if (!btn) return;
    btn.textContent = actif ? '🔴 J\'écoute...' : '🎤 Parler';
    btn.classList.toggle('actif', actif);
  }
};
