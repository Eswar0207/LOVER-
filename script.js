/* ==========================================================================
   ROMANTIC LOVE GIFT ENGINE
   State Management, Emotional Soundtrack, 24 Girlfriend Photos Scrapbook,
   Magnificent Blooming Flower Wall, Lightbox, Interactive Wax Seal, and Love Whispers
   ========================================================================== */

(function () {
  'use strict';

  /* ===== Default Configuration ===== */
  const DEFAULT_CONFIG = {
    recipient: 'NAA GAAJU BOOMAAA',
    sender: 'FOREVER MY GAJJU BOMMAAAA ♥ ♾️',
    pin: '7777',
    anniversary: '2026-10-20T00:00:00',
    letter: `Oyy naa gaaju bomma, naa praanam kanna ekkuva ishtam amma nuvvu! Nuvvu naa praanam amma, naa praananiivi. Nee tarvatha evaru ayina, edhi ayina. Nee tarvathe ae vishyam ayina amma! Naa first and main priority nuvve. Nee kosam edhikaina vasta, evarini lekka kuda cheyanu. Avatala evaru unna, naaku nuvve sab kante important amma!

Monna October 20th naaku last year daka bad day laaga undedhi amma. Kani ee year adhi completely maaripoyindhi! Oka 9 years nundi nenu mostunna badha motham nuvvu teerchesav amma. Correct ga aa time ke nuvvu natho unnaw choodu, enno years nundi nenu mostunna badha motham poyindhi! Aa roju nuvvu cheppina maatalu naa life long ala memory laaga undipothayi amma. Naa praanam poyye daka aa maatalu ala gurutundipothayi!

Nenu entha lucky o naku telusu amma. Entha bangaram laaga chusukune ammayi dhorakadam naa adrushtam. Edho janma lo edho punyam chesi unta... ituvanti diamond lanti, caring ammayi naa life loki ravadam kosam! Ee generation lo ilanti ammayi undadam chaala chaala kashtam amma. Nenu chaala proud ga cheppukunta—"Naa chinna papa undhi" ani! Entha bangaram ekkada undhi, nenu entha jagrattha ga chusukovali ani aalochista.

Andhari boyfriends laaga nenu undanu amma. Neeku ela nachithe ala unta! Ala undadam naaku chaala ishtam. Nee maate naa maate! Neeku nachindhi cheyy amma, nee mundhu, nee venakala nenu nunchunta ninnu jagrattha ga chusukovadaniki. No matter what, vere vishyalu nenu lekka kuda cheyanu. Naaku nee happiness e main important amma! Nee happiness kosam edhi ayina chesta, entha varaku ayina veltha!

Nee smile naaku chaala chaala ishtam amma. Aa smile eppudoo pokunda, nenu ninnu jagrattha ga chusukunta. Nenu entha work lo unna, ae pani chestu unna... nee call ki answer cheyali, neetho matladali! Netho matladutunnanu ante, appudu evari call vachina nenu lift cheyanu... nee call ayina tarvathe vaallatho matladtha! Nee tarvathe evaru ayina!

Ninnu kanti ki reppala kapadukunta amma, chaala jagrattha ga chusukunta. Mee parents, naa parents... vaallani chusukovadam mana iddhari badhyatha amma. Vaalla happiness kuda naaku chaala chaala important! Mee parents ni oppinchadaaniki em cheyali anna chesta amma... ela ayina, edhi chesi ayina vaallani oppinchukundham amma! Naa praanam poyye daka nee cheyyi vadalanu amma.

Naa praanam, naa sarvasvam, naa world, naa heart anni nuvve amma... Who am I without my gaaju bomma!

Naa sundari... nuvvu naa shakti kuda amma!

I loveeeee youuuuu, naa gaaju bomma! ❤️♾️💗🧿🫶🫀

FOREVER MY GAJJU BOMMAAAA ♥ ♾️`
  };

  /* ===== All 24 Real Girlfriend Photos ===== */
  const DEFAULT_PHOTOS = [
    {
      id: 'photo_1',
      src: 'assets/gf_01.jpeg',
      caption: 'The radiant smile that makes my entire universe light up',
      date: 'My Sunshine',
      liked: true
    },
    {
      id: 'photo_2',
      src: 'assets/gf_02.jpeg',
      caption: 'In your eyes, I found the home I had always been searching for',
      date: 'Forever in Love',
      liked: true
    },
    {
      id: 'photo_3',
      src: 'assets/gf_03.jpeg',
      caption: 'The prettiest girl in the world, inside and out',
      date: 'Pure Elegance',
      liked: true
    },
    {
      id: 'photo_4',
      src: 'assets/gf_04.jpeg',
      caption: 'Every little glance from you makes my heart race like day one',
      date: 'Butterflies',
      liked: true
    },
    {
      id: 'photo_5',
      src: 'assets/gf_05.jpeg',
      caption: 'How blessed I am to hold your hand through this journey of life',
      date: 'Holding Hands',
      liked: true
    },
    {
      id: 'photo_6',
      src: 'assets/gf_06.jpeg',
      caption: 'Your laughter is the sweetest melody I will ever know',
      date: 'Sweetest Joy',
      liked: true
    },
    {
      id: 'photo_7',
      src: 'assets/gf_07.jpeg',
      caption: 'Falling deeper and deeper in love with you with every single breath',
      date: 'Endless Devotion',
      liked: true
    },
    {
      id: 'photo_8',
      src: 'assets/gf_08.jpeg',
      caption: 'My favorite person, my greatest peace, my beautiful angel',
      date: 'My Angel',
      liked: true
    },
    {
      id: 'photo_9',
      src: 'assets/gf_09.jpeg',
      caption: 'No camera in the world can truly capture how gorgeous you are',
      date: 'Breathtaking',
      liked: true
    },
    {
      id: 'photo_10',
      src: 'assets/gf_10.jpeg',
      caption: 'You turn the most ordinary day into pure magic just by being there',
      date: 'Magic Moments',
      liked: true
    },
    {
      id: 'photo_11',
      src: 'assets/gf_11.jpeg',
      caption: 'The queen of my heart, today, tomorrow, and for all eternity',
      date: 'My Queen',
      liked: true
    },
    {
      id: 'photo_12',
      src: 'assets/gf_12.jpeg',
      caption: 'The cutest face that I could admire endlessly forever',
      date: 'So Adorable',
      liked: true
    },
    {
      id: 'photo_13',
      src: 'assets/gf_13.jpeg',
      caption: 'Thank you for choosing me and giving my heart so much happiness',
      date: 'Grateful for You',
      liked: true
    },
    {
      id: 'photo_14',
      src: 'assets/gf_14.jpeg',
      caption: 'With you by my side, I know I can conquer anything in this world',
      date: 'Together Strong',
      liked: true
    },
    {
      id: 'photo_15',
      src: 'assets/gf_15.jpeg',
      caption: 'My favorite notification, my favorite conversation, my soulmate',
      date: 'Soul Connection',
      liked: true
    },
    {
      id: 'photo_16',
      src: 'assets/gf_16.jpeg',
      caption: 'The gentlest soul and the warmest heart I have ever known',
      date: 'Tender Love',
      liked: true
    },
    {
      id: 'photo_17',
      src: 'assets/gf_17.jpeg',
      caption: 'You are the wish I made on every shooting star that came true',
      date: 'Dream Come True',
      liked: true
    },
    {
      id: 'photo_18',
      src: 'assets/gf_18.jpeg',
      caption: 'Two souls written in the stars to love each other forever',
      date: 'Destiny',
      liked: true
    },
    {
      id: 'photo_19',
      src: 'assets/gf_19.jpeg',
      caption: 'I loved you yesterday, I love you still, I always have, I always will',
      date: 'Forever & Always',
      liked: true
    },
    {
      id: 'photo_20',
      src: 'assets/gf_20.jpeg',
      caption: 'Your warmth is the only shelter my heart will ever desire',
      date: 'My Safe Haven',
      liked: true
    },
    {
      id: 'photo_21',
      src: 'assets/gf_21.jpeg',
      caption: 'Every love song I ever hear now makes complete sense because of you',
      date: 'Our Love Song',
      liked: true
    },
    {
      id: 'photo_22',
      src: 'assets/gf_22.jpeg',
      caption: 'You are my answered prayer, my greatest blessing, and my treasure',
      date: 'My Blessing',
      liked: true
    },
    {
      id: 'photo_23',
      src: 'assets/gf_23.jpeg',
      caption: 'Forever captivated by your sweetness, your grace, and your smile',
      date: 'Precious Gem',
      liked: true
    },
    {
      id: 'photo_24',
      src: 'assets/gf_24.jpeg',
      caption: 'To my forever girl—I promise to love and cherish you every single day',
      date: 'Eternity With You',
      liked: true
    }
  ];

  /* ===== Romantic Whispers for Her ===== */
  const LOVE_WHISPERS = [
    "You are the most beautiful thing that has ever happened to my life, my Naa Gaaju Boomaaa.",
    "My heart chose you, and it will choose you again and again in every lifetime.",
    "No matter how heavy the world feels, one smile from you makes everything alright.",
    "I would walk through fire and rain just to see your eyes light up with joy.",
    "You are not just my love—you are my answered prayer and my greatest blessing.",
    "Every heartbeat of mine has your name written across it forever.",
    "I love you more than words, poetry, or stars in the midnight sky."
  ];

  /* ===== Storage Keys ===== */
  const KEY_CONFIG = 'love_gift_config_v7777_gaaju_bomma_loop_forever_v1';
  const KEY_PHOTOS = 'love_gift_photos_v7777_final_love';

  /* ===== State ===== */
  let config = loadConfig();
  let photos = loadPhotos();
  let enteredPin = '';
  let activeScene = 's1';
  let lightboxIndex = 0;
  let isMuted = false;
  let letterRevealed = false;

  const $ = id => document.getElementById(id);
  const rand = (min, max) => min + Math.random() * (max - min);
  const bgm = $('bgm');
  if (bgm) bgm.loop = true;

  function loadConfig() {
    try {
      const stored = localStorage.getItem(KEY_CONFIG);
      return stored ? { ...DEFAULT_CONFIG, ...JSON.parse(stored) } : { ...DEFAULT_CONFIG };
    } catch (e) {
      return { ...DEFAULT_CONFIG };
    }
  }

  function saveConfig() {
    localStorage.setItem(KEY_CONFIG, JSON.stringify(config));
  }

  function loadPhotos() {
    try {
      const stored = localStorage.getItem(KEY_PHOTOS);
      return stored ? JSON.parse(stored) : [...DEFAULT_PHOTOS];
    } catch (e) {
      return [...DEFAULT_PHOTOS];
    }
  }

  function savePhotos() {
    localStorage.setItem(KEY_PHOTOS, JSON.stringify(photos));
  }

  /* ==========================================================================
     AUDIO MANAGEMENT (Real Soundtrack + Synthesizer Sound Effects)
     ========================================================================== */
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playChime(freq = 880) {
    if (isMuted) return;
    initAudio();
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.1, audioCtx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch (e) {}
  }

  function playHeartbeat() {
    if (isMuted) return;
    initAudio();
    if (!audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const o1 = audioCtx.createOscillator();
      const g1 = audioCtx.createGain();
      o1.frequency.setValueAtTime(65, now);
      o1.frequency.exponentialRampToValueAtTime(45, now + 0.12);
      g1.gain.setValueAtTime(0.2, now);
      g1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      o1.connect(g1).connect(audioCtx.destination);
      o1.start(now);
      o1.stop(now + 0.12);

      const o2 = audioCtx.createOscillator();
      const g2 = audioCtx.createGain();
      o2.frequency.setValueAtTime(80, now + 0.18);
      o2.frequency.exponentialRampToValueAtTime(50, now + 0.3);
      g2.gain.setValueAtTime(0.18, now + 0.18);
      g2.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      o2.connect(g2).connect(audioCtx.destination);
      o2.start(now + 0.18);
      o2.stop(now + 0.3);
    } catch (e) {}
  }

  function startMusic() {
    if (bgm) {
      bgm.loop = true;
      bgm.volume = 0.65;
      bgm.play().then(() => {
        $('audioWidget').classList.add('playing');
      }).catch(() => {});
    }
  }

  $('muteBtn').onclick = () => {
    isMuted = !isMuted;
    if (bgm) bgm.muted = isMuted;
    $('audioWidget').classList.toggle('muted', isMuted);
    $('audioWidget').classList.toggle('playing', !isMuted && !bgm.paused);
    if (!isMuted && bgm.paused && activeScene !== 's1') {
      bgm.play().catch(() => {});
    }
  };

  /* ==========================================================================
     AMBIENT PARTICLES & BOKEH
     ========================================================================== */
  const canvas = $('ambientCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = rand(1.5, 4.5);
      this.speedY = -rand(0.2, 0.7);
      this.speedX = rand(-0.3, 0.3);
      this.opacity = rand(0.1, 0.7);
      this.fade = rand(0.003, 0.008);
      this.isHeart = Math.random() < 0.28;
      this.hue = Math.random() < 0.55 ? 350 : 45;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.opacity -= this.fade;
      if (this.opacity <= 0 || this.y < -20) {
        this.reset();
        this.y = canvas.height + 10;
      }
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.opacity);
      if (this.isHeart) {
        ctx.fillStyle = `hsl(${this.hue}, 90%, 75%)`;
        ctx.font = `${this.size * 3}px serif`;
        ctx.fillText('♥', this.x, this.y);
      } else {
        const rad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        rad.addColorStop(0, `hsla(${this.hue}, 100%, 85%, 1)`);
        rad.addColorStop(1, `hsla(${this.hue}, 100%, 65%, 0)`);
        ctx.fillStyle = rad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < 48; i++) particles.push(new Particle());

  function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateCanvas);
  }
  animateCanvas();

  /* Cursor Heart Trail */
  let lastTrail = 0;
  window.addEventListener('pointermove', e => {
    const now = performance.now();
    if (now - lastTrail < 60) return;
    lastTrail = now;

    const trail = document.createElement('span');
    trail.className = 'trail';
    trail.textContent = Math.random() < 0.35 ? '✦' : '♥';
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    trail.style.fontSize = `${rand(12, 22)}px`;
    trail.style.color = Math.random() < 0.5 ? '#FF8FA3' : '#F5CE66';
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 850);
  });

  /* ==========================================================================
     SCENE TRANSITIONS
     ========================================================================== */
  function showScene(id) {
    activeScene = id;
    document.querySelectorAll('.scene').forEach(s => {
      s.classList.toggle('active', s.id === id);
    });
    $('backBtn').hidden = id !== 's6';
    if (id === 's6') {
      $('s6').scrollTop = 0;
    }
  }

  $('backBtn').onclick = () => {
    playChime(600);
    showScene('s1');
  };

  /* ==========================================================================
     SCENE 1 -> 2: THE MAGNIFICENT DENSE BLOOMING FLOWER WALL
     ========================================================================== */
  const FLOWER_CYCLE = [
    'assets/flowers/flower-1.png',
    'assets/flowers/flower-2.png',
    'assets/flowers/flower-3.png',
    'assets/flowers/flower-1.png',
    'assets/flowers/flower-2.png',
    'assets/flowers/flower-3.png'
  ];

  let flowerCount = 0;

  function spawnFlower(opts, container) {
    const img = document.createElement('img');
    img.src = FLOWER_CYCLE[flowerCount % FLOWER_CYCLE.length];
    img.alt = '';
    img.className = 'bloom-flower in';
    img.loading = 'eager';
    img.draggable = false;
    img.style.width = opts.size + 'px';
    img.style.height = opts.size + 'px';
    img.style.setProperty('--fx', (opts.x - opts.size / 2) + 'px');
    img.style.setProperty('--fy', (opts.y - opts.size / 2) + 'px');
    img.style.setProperty('--fall', opts.fallDist.toFixed(0) + 'px');
    img.style.setProperty('--sway1', opts.sway1.toFixed(1) + 'px');
    img.style.setProperty('--sway2', opts.sway2.toFixed(1) + 'px');
    img.style.setProperty('--rot-start', opts.startRot.toFixed(1) + 'deg');
    img.style.setProperty('--rot-end', opts.restRot.toFixed(1) + 'deg');
    img.style.setProperty('--ldelay', opts.launchDelay.toFixed(2) + 's');
    img.style.setProperty('--rdur', opts.rdur.toFixed(2) + 's');
    img.style.setProperty('--dur', opts.floatDur.toFixed(2) + 's');
    img.style.setProperty('--fdelay', opts.floatDelay.toFixed(2) + 's');
    img.dataset.x = opts.x;
    img.dataset.y = opts.y;
    container.appendChild(img);
    flowerCount++;
    return img;
  }

  function startFlowerWall() {
    const curtain = $('curtain');
    curtain.innerHTML = '';
    curtain.style.display = 'block';

    const w = window.innerWidth;
    const h = window.innerHeight;
    const isMobile = Math.min(w, h) < 640;
    const desiredCount = isMobile ? 220 : 420;
    const hardCap = isMobile ? 280 : 540;
    const rainWindow = isMobile ? 2200 : 2800;
    const speedMin = isMobile ? 230 : 260;
    const speedRange = isMobile ? 90 : 130;

    let spacing = Math.sqrt((w * h) / desiredCount);
    spacing = Math.max(18, Math.min(68, spacing));

    const baseSize = isMobile ? 92 : 135;
    const sizeVar = isMobile ? 48 : 72;

    let cells = [];
    for (let gy = -spacing; gy < h + spacing; gy += spacing) {
      for (let gx = -spacing; gx < w + spacing; gx += spacing) {
        cells.push({
          x: gx + (Math.random() - 0.5) * spacing * 0.85,
          y: gy + (Math.random() - 0.5) * spacing * 0.85
        });
      }
    }

    if (cells.length > hardCap) {
      const stride = Math.ceil(cells.length / hardCap);
      cells = cells.filter((_, i) => i % stride === 0);
    }

    let maxFinish = 0;
    cells.forEach(c => {
      const size = baseSize + Math.random() * sizeVar;
      const restRot = Math.random() * 32 - 16;
      const startRot = (Math.random() < 0.5 ? -1 : 1) * (28 + Math.random() * 35);
      const fallDist = c.y + size + 90 + Math.random() * 260;
      const speed = speedMin + Math.random() * speedRange;
      const rdur = fallDist / speed;
      const launchDelay = Math.random() * (rainWindow / 1000);
      const finish = launchDelay + rdur;
      if (finish > maxFinish) maxFinish = finish;

      const sway1 = (Math.random() < 0.5 ? -1 : 1) * (18 + Math.random() * 32);
      const sway2 = -sway1 * (0.5 + Math.random() * 0.35);
      const floatDur = 3 + Math.random() * 4;
      const floatDelay = finish + Math.random() * 1.5;

      spawnFlower({
        x: c.x,
        y: c.y,
        size,
        fallDist,
        rdur,
        launchDelay,
        sway1,
        sway2,
        restRot,
        startRot,
        floatDur,
        floatDelay
      }, curtain);
    });

    setTimeout(() => {
      partFlowerCurtain(curtain);
    }, (maxFinish * 1000) + 750);
  }

  function partFlowerCurtain(curtain) {
    const w = window.innerWidth;
    const cx = w / 2;
    const shiftX = w / 2 + 280;
    const maxDx = Math.max(cx, w - cx) + 200;
    const flowers = curtain.querySelectorAll('.bloom-flower');

    flowers.forEach(el => {
      const x = parseFloat(el.dataset.x);
      const dir = x < cx ? -1 : 1;
      const dx = Math.abs(x - cx);
      const edgeFactor = Math.min(1, dx / maxDx);
      const cdelay = (1 - edgeFactor) * 0.18;

      el.style.setProperty('--cx', (dir * shiftX) + 'px');
      el.style.setProperty('--cy', (Math.random() * 50 - 25) + 'px');
      el.style.setProperty('--cdelay', cdelay.toFixed(2) + 's');
      el.classList.remove('in');
    });

    void curtain.offsetWidth;

    flowers.forEach(el => {
      el.classList.add('curtain-open');
    });

    setTimeout(() => {
      showScene('s3');
    }, 750);

    setTimeout(() => {
      curtain.innerHTML = '';
      curtain.style.display = 'none';
    }, 2400);
  }

  $('giftBtn').onclick = () => {
    initAudio();
    startMusic();
    playHeartbeat();
    playChime(750);
    startFlowerWall();
  };

  /* ==========================================================================
     SCENE 3 & 4: PASSKEY MODAL (PIN 7777)
     ========================================================================== */
  const keysContainer = $('keys');
  keysContainer.innerHTML = '';
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '⌫'].forEach(k => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = k;
    btn.onclick = () => handleKeyPress(k);
    keysContainer.appendChild(btn);
  });

  function updateDots() {
    const slots = $('dots').children;
    for (let i = 0; i < slots.length; i++) {
      slots[i].classList.toggle('filled', i < enteredPin.length);
    }
  }

  function handleKeyPress(k) {
    initAudio();
    playChime(k === 'C' ? 440 : 660);
    if (navigator.vibrate) navigator.vibrate(15);

    if (k === 'C') {
      enteredPin = '';
    } else if (k === '⌫') {
      enteredPin = enteredPin.slice(0, -1);
    } else if (enteredPin.length < 4) {
      enteredPin += k;
    }
    updateDots();

    if (enteredPin.length === 4) {
      setTimeout(verifyPasskey, 220);
    }
  }

  function verifyPasskey() {
    if (enteredPin === config.pin) {
      $('modal').hidden = true;
      enteredPin = '';
      updateDots();
      playChime(980);
      startLoader();
    } else {
      const pad = $('pad');
      pad.classList.add('shake');
      if (navigator.vibrate) navigator.vibrate([40, 60, 40]);
      setTimeout(() => {
        pad.classList.remove('shake');
        enteredPin = '';
        updateDots();
      }, 500);
    }
  }

  $('lockBtn').onclick = () => {
    playChime(700);
    playHeartbeat();
    $('modal').hidden = false;
  };

  $('closeBtn').onclick = () => {
    $('modal').hidden = true;
    enteredPin = '';
    updateDots();
  };

  $('hintPillBtn').onclick = () => {
    playChime(880);
    enteredPin = config.pin;
    updateDots();
    setTimeout(verifyPasskey, 250);
  };

  window.addEventListener('keydown', e => {
    if ($('modal').hidden) return;
    if (/^\d$/.test(e.key)) {
      handleKeyPress(e.key);
    } else if (e.key === 'Backspace') {
      handleKeyPress('⌫');
    } else if (e.key === 'Escape') {
      $('closeBtn').click();
    }
  });

  /* ==========================================================================
     SCENE 5: FLORAL RING LOADER (Heart-Melting Anticipation)
     ========================================================================== */
  function createRoseSvg(size, color) {
    let petals = '';
    for (let i = 0; i < 5; i++) {
      petals += `<ellipse cx="30" cy="30" rx="${26 - i * 4.5}" ry="${22 - i * 4}" fill="${color}" stroke="rgba(124,45,55,.25)" transform="rotate(${i * 38} 30 30)" opacity="${1 - i * 0.08}"/>`;
    }
    return `<svg viewBox="0 0 60 60" width="${size}" height="${size}">${petals}<circle cx="30" cy="30" r="3" fill="#7C2D37" opacity=".5"/></svg>`;
  }

  const LOADER_PHRASES = [
    "Gathering every smile you've given me...",
    "Remembering October 20, 2026—the day my life truly began...",
    "Opening the deepest vault of my heart...",
    "Welcome home, my Naa Gaaju Boomaaa ♥"
  ];

  function startLoader() {
    showScene('s5');
    const ring = $('ring');
    ring.innerHTML = '';
    for (let i = 0; i < 16; i++) {
      const node = document.createElement('div');
      node.className = 'rose-loader-node';
      const angle = (i / 16) * 2 * Math.PI;
      const radius = 95;
      node.style.transform = `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`;
      node.innerHTML = createRoseSvg(40, i % 2 ? '#FFE4E6' : '#FF8FA3');
      ring.appendChild(node);
    }

    $('loadTxt').textContent = 'UNLOCKING OUR MEMORIES';
    let phraseIdx = 0;
    $('loadQuote').textContent = LOADER_PHRASES[0];

    const phraseInterval = setInterval(() => {
      phraseIdx = (phraseIdx + 1) % LOADER_PHRASES.length;
      $('loadQuote').textContent = LOADER_PHRASES[phraseIdx];
    }, 750);

    setTimeout(() => {
      $('loadTxt').textContent = 'UNLOCKED WITH ALL MY LOVE ♥';
    }, 2400);

    setTimeout(() => {
      clearInterval(phraseInterval);
      revealScrapbook();
    }, 3400);
  }

  /* ==========================================================================
     SCENE 6: THE GRAND SCRAPBOOK & 24 REAL GIRLFRIEND PHOTOS
     ========================================================================== */
  function renderAll() {
    applyConfig();
    renderWall();
    updateCounter();
  }

  function applyConfig() {
    $('heroPartnerTitle').textContent = `OUR LOVE STORY • ${config.recipient}`;
    $('quoteAuthor').textContent = `— Yours for eternity, FOREVER MY GAJJU BOMMAAAA ♥ ♾️`;
    $('signoffName').textContent = config.sender;
    const footerTitle = $('footerTitle');
    if (footerTitle) footerTitle.textContent = 'FOREVER MY GAJJU BOMMAAAA ♥ ♾️';
    $('hintPillBtn').innerHTML = `<span>💡 Code Hint: ${config.pin}</span><span class="quick-unlock">(Tap to auto-fill)</span>`;
  }

  function renderWall() {
    const wall = $('wall');
    wall.innerHTML = '';

    photos.forEach((photo, idx) => {
      const pol = document.createElement('div');
      pol.className = 'pol';
      pol.style.setProperty('--rot', `${rand(-4.5, 4.5).toFixed(1)}deg`);
      pol.style.setProperty('--tape-rot', `${rand(-5, 5).toFixed(1)}deg`);

      pol.innerHTML = `
        <div class="pol-img-wrap">
          <img src="${photo.src}" alt="${escapeHtml(photo.caption)}" loading="lazy">
          <span class="pol-badge">#${idx + 1}</span>
        </div>
        <p class="pol-caption">${escapeHtml(photo.caption)}</p>
        <div class="pol-footer">
          <span class="pol-date">${escapeHtml(photo.date || 'My Angel')}</span>
          <button class="pol-heart-btn" title="Loved by my heart">${photo.liked ? '♥' : '♡'}</button>
        </div>
      `;

      // 3D Tilt interaction on hover
      const handleTilt = (x, y) => {
        const rect = pol.getBoundingClientRect();
        const rx = -((y - rect.top) / rect.height - 0.5) * 22;
        const ry = ((x - rect.left) / rect.width - 0.5) * 22;
        pol.style.setProperty('--rx', `${rx}deg`);
        pol.style.setProperty('--ry', `${ry}deg`);
      };
      const resetTilt = () => {
        pol.style.setProperty('--rx', '0deg');
        pol.style.setProperty('--ry', '0deg');
      };

      pol.addEventListener('mousemove', e => handleTilt(e.clientX, e.clientY));
      pol.addEventListener('mouseleave', resetTilt);

      // Heart like button
      const heartBtn = pol.querySelector('.pol-heart-btn');
      heartBtn.onclick = e => {
        e.stopPropagation();
        photo.liked = !photo.liked;
        heartBtn.textContent = photo.liked ? '♥' : '♡';
        playHeartbeat();
        savePhotos();
      };

      pol.onclick = () => openLightbox(idx);
      wall.appendChild(pol);
    });
  }

  /* ==========================================================================
     LIVE LOVE JOURNEY COUNTER & HEARTBEAT CALCULATOR
     ========================================================================== */
  function updateCounter() {
    const startDate = new Date(config.anniversary);
    const now = new Date();
    let diff = Math.max(0, now - startDate);

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const mins = Math.floor(diff / (1000 * 60));
    diff -= mins * (1000 * 60);

    const secs = Math.floor(diff / 1000);

    $('cntDays').textContent = days;
    $('cntHours').textContent = hours.toString().padStart(2, '0');
    $('cntMins').textContent = mins.toString().padStart(2, '0');
    $('cntSecs').textContent = secs.toString().padStart(2, '0');

    // Average ~75 bpm -> 1.25 beats per second
    const heartbeats = Math.floor(totalSeconds * 1.25);
    $('cntHeartbeats').textContent = heartbeats.toLocaleString();

    $('counterDateFooter').textContent = `Falling deeper in love since October 20, 2026.`;
  }
  setInterval(updateCounter, 1000);

  /* ==========================================================================
     WAX SEAL & HANDWRITTEN LOVE LETTER
     ========================================================================== */
  $('waxSealBtn').onclick = () => {
    playChime(520);
    playHeartbeat();
    $('waxSealWrapper').classList.add('broken');
    $('letterPaper').classList.remove('sealed');
    typewriterLetter();
  };

  let letterTypingTimer = null;
  function typewriterLetter() {
    if (letterRevealed) return;
    letterRevealed = true;

    const el = $('letter');
    const text = config.letter;
    el.textContent = '';
    el.classList.add('typing');

    let i = 0;
    clearInterval(letterTypingTimer);
    letterTypingTimer = setInterval(() => {
      el.textContent = text.slice(0, ++i);
      if (i >= text.length) {
        clearInterval(letterTypingTimer);
        el.classList.remove('typing');
      }
    }, 18);

    // Tap paper to instantly reveal full letter without waiting
    $('letterPaper').onclick = () => {
      clearInterval(letterTypingTimer);
      el.textContent = text;
      el.classList.remove('typing');
    };
  }

  function revealScrapbook() {
    showScene('s6');
    renderAll();
    $('letterPaper').classList.add('sealed');
  }

  /* ==========================================================================
     INTERACTIVE LOVE WHISPERS TOAST
     ========================================================================== */
  let toastEl = null;

  function showLoveWhisper() {
    playChime(850);
    playHeartbeat();

    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'whisper-toast';
      document.body.appendChild(toastEl);
      toastEl.onclick = () => toastEl.classList.remove('show');
    }

    const whisper = LOVE_WHISPERS[Math.floor(Math.random() * LOVE_WHISPERS.length)];
    toastEl.innerHTML = `
      <div style="font-size:2rem;margin-bottom:8px;">💌</div>
      <p class="whisper-toast-text">“${whisper}”</p>
      <p class="whisper-toast-sub">— Always thinking of you, Naa Gaaju Boomaaa</p>
    `;

    toastEl.classList.add('show');
    clearTimeout(showLoveWhisper.timer);
    showLoveWhisper.timer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 5500);
  }

  $('whisperBtn').onclick = showLoveWhisper;

  /* ==========================================================================
     LIGHTBOX VIEWER
     ========================================================================== */
  function openLightbox(index) {
    lightboxIndex = index;
    updateLightbox();
    $('lightboxModal').hidden = false;
    playChime(700);
  }

  function updateLightbox() {
    const photo = photos[lightboxIndex];
    if (!photo) return;
    $('lightboxImg').src = photo.src;
    $('lightboxTitle').textContent = `Moment #${lightboxIndex + 1}`;
    $('lightboxDate').textContent = photo.date || 'My Naa Gaaju Boomaaa';
    $('lightboxCaption').textContent = photo.caption;
    $('likeCountTxt').textContent = photo.liked ? 'Loved ♥' : 'Love This ♡';
    $('lightboxLikeBtn').style.background = photo.liked ? '#E88390' : '#FFF0F3';
    $('lightboxLikeBtn').style.color = photo.liked ? '#FFF' : '#D05B6C';
  }

  $('lightboxCloseBtn').onclick = () => {
    $('lightboxModal').hidden = true;
  };

  $('lightboxPrevBtn').onclick = () => {
    lightboxIndex = (lightboxIndex - 1 + photos.length) % photos.length;
    updateLightbox();
    playChime(650);
  };

  $('lightboxNextBtn').onclick = () => {
    lightboxIndex = (lightboxIndex + 1) % photos.length;
    updateLightbox();
    playChime(650);
  };

  $('lightboxLikeBtn').onclick = () => {
    const photo = photos[lightboxIndex];
    photo.liked = !photo.liked;
    updateLightbox();
    renderWall();
    playHeartbeat();
    savePhotos();
  };

  window.addEventListener('keydown', e => {
    if (!$('lightboxModal').hidden) {
      if (e.key === 'ArrowLeft') $('lightboxPrevBtn').click();
      else if (e.key === 'ArrowRight') $('lightboxNextBtn').click();
      else if (e.key === 'Escape') $('lightboxCloseBtn').click();
    }
  });

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  applyConfig();
})();
