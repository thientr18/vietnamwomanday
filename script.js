// ===== TYPING EFFECT =====
const typingText = document.getElementById('typingText');
const text = "Happy Women's Day 20/10 💖";
let charIndex = 0;

function typeText() {
    if (charIndex < text.length) {
        typingText.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 150);
    } else {
        // Add blinking effect after typing is complete
        setTimeout(() => {
            typingText.classList.add('blinking-title');
        }, 500);
    }
}

// Start typing when page loads
window.addEventListener('load', () => {
    setTimeout(typeText, 500);
});

// ===== MUSIC TOGGLE =====
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        isPlaying = false;
    } else {
        bgMusic.play();
        musicToggle.classList.add('playing');
        isPlaying = true;
    }
});

// Auto-play music (with user interaction)
document.body.addEventListener('click', () => {
    if (!isPlaying) {
        bgMusic.play();
        musicToggle.classList.add('playing');
        isPlaying = true;
    }
}, { once: true });

// ===== FLOATING EMOJIS =====
const floatingEmojisContainer = document.getElementById('floatingEmojis');
const emojis = ['❤️', '🌸', '✨', '🐰', '🥰', '💖', '🌹', '💕', '🦋', '🌺'];

function createFloatingEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + '%';
    emoji.style.top = Math.random() * 100 + '%';
    emoji.style.animationDelay = Math.random() * 2 + 's';
    emoji.style.animationDuration = (Math.random() * 3 + 4) + 's';
    floatingEmojisContainer.appendChild(emoji);
}

// Create multiple floating emojis
for (let i = 0; i < 20; i++) {
    createFloatingEmoji();
}

// ===== COUNTDOWN DAYS =====
const daysCounter = document.getElementById('daysCounter');
// Ngày bắt đầu yêu nhau - BẠN CÓ THỂ THAY ĐỔI NGÀY NÀY
const startDate = new Date('2022-07-10'); // Thay đổi thành ngày của bạn
const today = new Date();
const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

let currentCount = 0;
const countInterval = setInterval(() => {
    if (currentCount <= diffDays) {
        daysCounter.textContent = currentCount;
        currentCount++;
    } else {
        clearInterval(countInterval);
    }
}, 20);

// ===== SCROLL FADE-IN ANIMATION =====
const fadeInElements = document.querySelectorAll('.fade-in');
const timelineItems = document.querySelectorAll('.timeline-item');

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    fadeInElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            element.classList.add('show');
        }
    });

    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            item.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Initial check

// ===== BOUQUET POPUP =====
const bouquetButton = document.getElementById('bouquetButton');
const popupOverlay = document.getElementById('popupOverlay');
const closePopup = document.getElementById('closePopup');
const fallingEmojisContainer = document.getElementById('fallingEmojis');

bouquetButton.addEventListener('click', () => {
    popupOverlay.classList.add('active');
    createFallingEmojis();
});

closePopup.addEventListener('click', () => {
    popupOverlay.classList.remove('active');
});

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.classList.remove('active');
    }
});

// ===== FALLING EMOJIS =====
function createFallingEmojis() {
    const fallingEmojis = ['❤️', '🌸', '✨', '💖', '🌹', '💕', '🥰', '🐰'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'falling-emoji';
            emoji.textContent = fallingEmojis[Math.floor(Math.random() * fallingEmojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.animationDuration = (Math.random() * 3 + 2) + 's';
            emoji.style.animationDelay = '0s';
            fallingEmojisContainer.appendChild(emoji);

            // Remove emoji after animation
            setTimeout(() => {
                emoji.remove();
            }, 5000);
        }, i * 100);
    }
}

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== LOVE MESSAGE REVEAL =====
const revealTexts = document.querySelectorAll('.reveal-text');
const loveSection = document.querySelector('.love-section');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.5 });

revealTexts.forEach(text => {
    text.style.animationPlayState = 'paused';
    revealObserver.observe(text);
});

// ===== ADDITIONAL ANIMATIONS =====
// Add glow effect to timeline images on scroll
const timelineImages = document.querySelectorAll('.timeline-image');

timelineImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.boxShadow = '0 0 40px rgba(255, 105, 180, 0.8)';
    });
    
    image.addEventListener('mouseleave', () => {
        image.style.boxShadow = '0 10px 40px rgba(255, 105, 180, 0.4)';
    });
});

// ===== PARTICLE EFFECT (OPTIONAL BOKEH) =====
function createBokehParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = Math.random() * 10 + 5 + 'px';
    particle.style.height = particle.style.width;
    particle.style.borderRadius = '50%';
    particle.style.background = `rgba(255, ${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${Math.random() * 0.5 + 0.3})`;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '0';
    particle.style.filter = 'blur(3px)';
    particle.style.animation = `bokehFloat ${Math.random() * 10 + 10}s ease-in-out infinite`;
    document.body.appendChild(particle);

    // Remove after some time to prevent memory leak
    setTimeout(() => {
        particle.remove();
    }, 20000);
}

// Create bokeh particles periodically
setInterval(createBokehParticle, 300);

// Add bokeh float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes bokehFloat {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
        }
        25% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 0.6;
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 0.8;
        }
        75% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 0.6;
        }
    }
`;
document.head.appendChild(style);

// ===== PREVENT CONTEXT MENU (OPTIONAL) =====
// Uncomment if you want to prevent right-click
// document.addEventListener('contextmenu', e => e.preventDefault());

console.log('💖 Website loaded successfully! Happy Women\'s Day 20/10! 💖');
