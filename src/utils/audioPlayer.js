/**
 * Wedding Audio Controller for Mubi & Sana Wedding.
 * Plays the uploaded wedding music on repeat.
 * Completely replaces old synthesized tones.
 */

class WeddingSongPlayer {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.listeners = new Set();
    this.audioSrc = '/wedding-music.mp3';
  }

  init() {
    if (!this.audio && typeof window !== 'undefined') {
      this.audio = new Audio(this.audioSrc);
      this.audio.loop = true; // PLAY ON REPEAT
      this.audio.preload = 'auto';

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notifyListeners();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notifyListeners();
      });

      this.audio.addEventListener('ended', () => {
        // Fallback for seamless loop
        if (this.audio) {
          this.audio.currentTime = 0;
          this.audio.play().catch(() => {});
        }
      });
    }
  }

  notifyListeners() {
    this.listeners.forEach((cb) => {
      try {
        cb(this.isPlaying);
      } catch (err) {
        console.error('Audio listener error:', err);
      }
    });
  }

  subscribe(callback) {
    this.listeners.add(callback);
    callback(this.isPlaying);
    return () => this.listeners.delete(callback);
  }

  start() {
    this.init();
    if (!this.audio) return false;
    this.audio.loop = true;
    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
          this.notifyListeners();
        })
        .catch((err) => {
          console.warn('Autoplay prevented by browser, waiting for user gesture:', err);
        });
    }
    return true;
  }

  play() {
    return this.start();
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
      this.notifyListeners();
    }
  }

  pause() {
    this.stop();
  }

  toggle() {
    this.init();
    if (!this.audio) return false;
    if (this.audio.paused) {
      this.start();
      return true;
    } else {
      this.stop();
      return false;
    }
  }

  // Triggered on envelope opening - starts the song playing on repeat
  playPaperUnfoldSound() {
    this.start();
  }
}

export const weddingAudio = new WeddingSongPlayer();
export default weddingAudio;
