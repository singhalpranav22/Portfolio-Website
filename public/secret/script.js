/* ========================================
   Valentine's Day Experience - Enhanced Script
   ======================================== */

// Photo configuration for the game (shagun folder)
const gamePhotos = [
    '../shagun/20250717_184738.jpg',
    '../shagun/20250804_175846.jpg',
    '../shagun/20250804_180339.jpg',
    '../shagun/20250914_135354.jpg',
    '../shagun/20250930_222717.jpg',
    '../shagun/20251001_000751.jpg',
    '../shagun/20251002_173714 (1).jpg',
    '../shagun/Screenshot 2026-01-31 175338.png',
    '../shagun/Screenshot_20251225_165633_WhatsApp.jpg'
];

// Photos for the final slideshow with captions (shagunme folder)
const slideshowPhotos = [
    { src: '../shagunme/Phool_for_my_fool.jpg', caption: 'Phool for my Fool 🌸' },
    { src: '../shagunme/amusement_park_ho_ho.jpg', caption: 'Amusement Park Ho Ho! 🎢' },
    { src: '../shagunme/birthday_on_top_of_the_world.jpg', caption: 'Birthday on Top of the World 🎂' },
    { src: '../shagunme/does_it_look_real.jpg', caption: 'Does it Look Real? 👀' },
    { src: '../shagunme/first_metro_ride.jpg', caption: 'First Metro Ride Together 🚇' },
    { src: '../shagunme/kissing_an_angel.jpg', caption: 'Kissing an Angel 😇' },
    { src: '../shagunme/marine_drive_mumumbai_dream_roz_ek_rose_yojna.jpg', caption: 'Marine Drive Mumbai Dream - Roz Ek Rose Yojna 🌹' },
    { src: '../shagunme/shagun_first_beach_experience.jpg', caption: 'Shagun\'s First Beach Experience 🏖️' },
    { src: '../shagunme/some_new_hot_chicks_detected_in_goa.jpg', caption: 'Some New Hot Chicks Detected in Goa 🐥' },
    { src: '../shagunme/tipsy_mode_on.jpg', caption: 'Tipsy Mode: ON 🍷' },
    { src: '../shagunme/whiskey_and_ours_first_flight.png', caption: 'Whiskey & Our First Flight ✈️' }
];

// Game state
let selectedGamePhotos = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let canFlip = true;

// DOM Elements
const screens = {
    welcome: document.getElementById('welcome-screen'),
    game: document.getElementById('game-screen'),
    transition: document.getElementById('transition-screen'),
    question: document.getElementById('question-screen'),
    celebration: document.getElementById('celebration-screen')
};

const startBtn = document.getElementById('start-btn');
const gameBoard = document.getElementById('game-board');
const moveCount = document.getElementById('move-count');
const matchCount = document.getElementById('match-count');
const encouragement = document.getElementById('encouragement');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Music controls
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
let isMusicPlaying = false;

// Encouraging messages for the game
const encouragingMessages = [
    "You're doing great! 💕",
    "Almost there! 🌟",
    "That's my girl! ✨",
    "Keep going, love! 💖",
    "You're amazing! 🎀",
    "So close! 💗"
];

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
    createFloatingHearts();
    createParticles();
    setupMusicControl();
    startBtn.addEventListener('click', startGame);
    yesBtn.addEventListener('click', celebrate);
    setupNoButton();
    setupSlideshow();
}

// ========================================
// Welcome Screen - Floating Hearts & Particles
// ========================================

function createFloatingHearts() {
    const container = document.getElementById('welcome-hearts');
    const hearts = ['💕', '💖', '💗', '💓', '❤️', '🩷', '💘', '💝', '🌸', '✨'];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.animationDuration = (6 + Math.random() * 6) + 's';
        heart.style.fontSize = (1 + Math.random() * 2) + 'rem';
        container.appendChild(heart);
    }
}

function createParticles() {
    const container = document.getElementById('welcome-particles');

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
        particle.style.animationDelay = Math.random() * 4 + 's';
        particle.style.background = Math.random() > 0.5 ? 'var(--gold)' : 'var(--pink-hot)';
        container.appendChild(particle);
    }
}

// ========================================
// Music Control
// ========================================

function setupMusicControl() {
    musicToggle.addEventListener('click', toggleMusic);

    // Set initial volume
    bgMusic.volume = 0.5;

    // Check if music is already playing (autoplay success)
    if (!bgMusic.paused) {
        musicToggle.classList.remove('muted');
        isMusicPlaying = true;
    } else {
        musicToggle.classList.add('muted');
        isMusicPlaying = false;

        // Try strict autoplay
        bgMusic.play().then(() => {
            musicToggle.classList.remove('muted');
            isMusicPlaying = true;
        }).catch(err => {
            console.log('Autoplay blocked');
            musicToggle.classList.add('muted');
        });
    }
}

function toggleMusic() {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.classList.add('muted');
        isMusicPlaying = false;
    } else {
        bgMusic.play().then(() => {
            musicToggle.classList.remove('muted');
            isMusicPlaying = true;
        }).catch(err => {
            console.log('Audio play failed:', err);
        });
    }
}

// ========================================
// Screen Transitions
// ========================================

function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenName].classList.add('active');
}

// ========================================
// Memory Match Game
// ========================================

function startGame() {
    showScreen('game');
    initializeGame();

    // Start music on first user interaction (browsers allow this)
    if (!isMusicPlaying) {
        bgMusic.play().then(() => {
            musicToggle.classList.remove('muted');
            isMusicPlaying = true;
        }).catch(err => {
            console.log('Audio play failed:', err);
        });
    }
}

function initializeGame() {
    // Use 8 photos for 16 cards (8 pairs)
    const photosForGame = gamePhotos.slice(0, 8);

    // Create pairs and shuffle
    selectedGamePhotos = [...photosForGame, ...photosForGame];
    shuffleArray(selectedGamePhotos);

    // Reset state
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    canFlip = true;
    updateStats();

    // Create cards
    gameBoard.innerHTML = '';
    selectedGamePhotos.forEach((photo, index) => {
        const card = createCard(photo, index);
        gameBoard.appendChild(card);
    });
}

function createCard(photo, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.index = index;
    card.dataset.photo = photo;
    card.tabIndex = 0;
    card.style.animationDelay = (index * 0.05) + 's';

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-face card-front">
                <svg class="card-front-icon"><use href="#heart-icon"/></svg>
            </div>
            <div class="card-face card-back">
                <img src="${photo}" alt="Memory" loading="lazy">
            </div>
        </div>
    `;

    card.addEventListener('click', () => flipCard(card));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            flipCard(card);
        }
    });

    return card;
}

function flipCard(card) {
    if (!canFlip ||
        card.classList.contains('flipped') ||
        card.classList.contains('matched') ||
        flippedCards.length >= 2) {
        return;
    }

    // Flip the card
    card.classList.add('flipped');
    flippedCards.push(card);

    // Check for match when two cards are flipped
    if (flippedCards.length === 2) {
        moves++;
        updateStats();
        checkMatch();
    }
}

function checkMatch() {
    canFlip = false;
    const [card1, card2] = flippedCards;
    const isMatch = card1.dataset.photo === card2.dataset.photo;

    setTimeout(() => {
        if (isMatch) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedPairs++;
            updateStats();

            // Show encouragement
            showEncouragement();

            // Create mini celebration
            createMatchCelebration(card1);
            createMatchCelebration(card2);

            if (matchedPairs === 8) {
                setTimeout(triggerTransition, 1000);
            }
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }

        flippedCards = [];
        canFlip = true;
    }, 1000);
}

function showEncouragement() {
    const message = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
    encouragement.textContent = message;
    encouragement.style.animation = 'none';
    encouragement.offsetHeight; // Trigger reflow
    encouragement.style.animation = 'fadeInOut 2s ease forwards';
}

function createMatchCelebration(card) {
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            font-size: 1.5rem;
            pointer-events: none;
            z-index: 1000;
            animation: sparkleOut 0.8s ease-out forwards;
        `;
        sparkle.style.setProperty('--angle', (i * 45) + 'deg');
        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 800);
    }
}

function updateStats() {
    moveCount.textContent = moves;
    matchCount.textContent = matchedPairs;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ========================================
// Transition Screen with Fireworks
// ========================================

function triggerTransition() {
    showScreen('transition');
    spawnFloatingElements();
    createTransitionFireworks();

    setTimeout(() => {
        showScreen('question');
    }, 4500);
}

function spawnFloatingElements() {
    const container = document.getElementById('floating-container');
    container.innerHTML = '';

    const elements = ['💕', '💖', '💗', '❤️', '✨', '🌟', '💫', '🎀', '🩷', '💘', '🌸', '💝', '🎉'];

    for (let i = 0; i < 60; i++) {
        const el = document.createElement('span');
        el.className = 'floating-element';
        el.textContent = elements[Math.floor(Math.random() * elements.length)];
        el.style.left = Math.random() * 100 + '%';
        el.style.animationDelay = Math.random() * 2.5 + 's';
        el.style.fontSize = (1.5 + Math.random() * 2.5) + 'rem';
        container.appendChild(el);
    }
}

function createTransitionFireworks() {
    const container = document.getElementById('transition-fireworks');
    container.innerHTML = '';

    const colors = ['#FF69B4', '#FF1493', '#FFD700', '#FF6B6B', '#E91E63', '#FFC0CB'];

    for (let f = 0; f < 5; f++) {
        setTimeout(() => {
            createSingleFirework(container, colors, Math.random() * 80 + 10, Math.random() * 60 + 10);
        }, f * 600);
    }
}

function createSingleFirework(container, colors, x, y) {
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        particle.style.background = color;
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        particle.style.boxShadow = `0 0 6px ${color}, 0 0 12px ${color}`;

        const angle = (i / 20) * 360;
        const distance = 80 + Math.random() * 60;
        const tx = Math.cos(angle * Math.PI / 180) * distance;
        const ty = Math.sin(angle * Math.PI / 180) * distance;

        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');

        container.appendChild(particle);

        setTimeout(() => particle.remove(), 1500);
    }
}

// ========================================
// The Runaway "No" Button
// ========================================

function setupNoButton() {
    const moveAway = (e) => {
        e.preventDefault();

        const btn = noBtn;
        const container = screens.question;
        const containerRect = container.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();

        const maxX = containerRect.width - btnRect.width - 40;
        const maxY = containerRect.height - btnRect.height - 40;

        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;

        const currentX = btnRect.left - containerRect.left;
        const currentY = btnRect.top - containerRect.top;

        const distance = Math.sqrt(Math.pow(newX - currentX, 2) + Math.pow(newY - currentY, 2));
        if (distance < 150) {
            newX = (newX + maxX / 2) % maxX;
            newY = (newY + maxY / 2) % maxY;
        }

        btn.style.position = 'fixed';
        btn.style.left = (containerRect.left + newX) + 'px';
        btn.style.top = (containerRect.top + newY) + 'px';
        btn.style.transform = 'scale(0.85) rotate(' + (Math.random() * 20 - 10) + 'deg)';

        const messages = [
            "Nope! 😜",
            "Can't catch me!",
            "Try again! 💕",
            "Not happening!",
            "Hehe! 😏",
            "Nice try!",
            "Too slow! 🏃‍♀️",
            "I don't think so!",
            "Wrong button! 💖",
            "Lol nope!",
            "Keep trying! 🤭"
        ];
        btn.textContent = messages[Math.floor(Math.random() * messages.length)];
    };

    noBtn.addEventListener('mouseenter', moveAway);
    noBtn.addEventListener('touchstart', moveAway, { passive: false });
    noBtn.addEventListener('focus', (e) => {
        setTimeout(() => yesBtn.focus(), 100);
    });
}

// ========================================
// Celebration with Fireworks!
// ========================================

function celebrate() {
    showScreen('celebration');
    createConfetti();
    createCelebrationFireworks();
    startSlideshow();
}

function createConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';

    const colors = [
        '#FF69B4', '#FF1493', '#E91E63', '#FF6B6B',
        '#FFD700', '#FFA500', '#98FB98', '#87CEEB',
        '#DDA0DD', '#F0E68C', '#FF1744', '#FF4081'
    ];

    const shapes = ['square', 'circle', 'triangle'];

    for (let i = 0; i < 250; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];

        confetti.style.backgroundColor = color;
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = -20 + 'px';

        const size = 6 + Math.random() * 12;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';

        if (shape === 'circle') {
            confetti.style.borderRadius = '50%';
        } else if (shape === 'triangle') {
            confetti.style.width = '0';
            confetti.style.height = '0';
            confetti.style.backgroundColor = 'transparent';
            confetti.style.borderLeft = (size / 2) + 'px solid transparent';
            confetti.style.borderRight = (size / 2) + 'px solid transparent';
            confetti.style.borderBottom = size + 'px solid ' + color;
        }

        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (3 + Math.random() * 3) + 's';

        container.appendChild(confetti);
    }

    setTimeout(() => container.innerHTML = '', 7000);
}

function createCelebrationFireworks() {
    const container = document.getElementById('fireworks-container');
    container.innerHTML = '';

    const colors = ['#FF69B4', '#FFD700', '#FF1493', '#00CED1', '#FF6B6B', '#98FB98', '#DDA0DD'];

    // Create multiple waves of fireworks
    for (let wave = 0; wave < 4; wave++) {
        for (let f = 0; f < 4; f++) {
            setTimeout(() => {
                const x = 15 + Math.random() * 70;
                const y = 10 + Math.random() * 50;
                createSingleFirework(container, colors, x, y);
            }, wave * 1500 + f * 300);
        }
    }
}

// ========================================
// Photo Slideshow with Captions
// ========================================

let currentSlide = 0;
let slideshowInterval = null;

function setupSlideshow() {
    prevBtn.addEventListener('click', () => changeSlide(-1));
    nextBtn.addEventListener('click', () => changeSlide(1));
}

function startSlideshow() {
    const slideshow = document.getElementById('slideshow');
    const dotsContainer = document.getElementById('slideshow-dots');
    const captionEl = document.getElementById('photo-caption');

    slideshow.innerHTML = '';
    dotsContainer.innerHTML = '';

    slideshowPhotos.forEach((photo, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'slide' + (index === 0 ? ' active' : '');
        slide.innerHTML = `<img src="${photo.src}" alt="${photo.caption}">`;
        slideshow.appendChild(slide);

        // Create dot
        const dot = document.createElement('div');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    currentSlide = 0;
    updateCaption();

    // Auto-advance slideshow
    slideshowInterval = setInterval(() => {
        changeSlide(1);
    }, 4000);
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (slides.length === 0) return;

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + direction + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    updateCaption();

    // Reset auto-advance timer
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(() => {
            changeSlide(1);
        }, 4000);
    }
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (slides.length === 0 || index === currentSlide) return;

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    updateCaption();

    // Reset auto-advance timer
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(() => {
            changeSlide(1);
        }, 4000);
    }
}

function updateCaption() {
    const captionEl = document.getElementById('photo-caption');
    const caption = slideshowPhotos[currentSlide].caption;

    // Animate caption change
    captionEl.style.opacity = '0';
    setTimeout(() => {
        captionEl.textContent = caption;
        captionEl.style.opacity = '1';
    }, 200);
}

// ========================================
// Preload Images
// ========================================

function preloadImages() {
    [...gamePhotos, ...slideshowPhotos.map(p => p.src)].forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

preloadImages();

// ========================================
// Dynamic Sparkle Animation Style
// ========================================

const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleOut {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(
                calc(-50% + cos(var(--angle)) * 50px),
                calc(-50% + sin(var(--angle)) * 50px)
            ) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(10px); }
        20% { opacity: 1; transform: translateY(0); }
        80% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-10px); }
    }
`;
document.head.appendChild(sparkleStyle);
