// ============================================
// ROMANTIC GIFT WEBSITE — JAVASCRIPT
// Card data, rendering, and modal interactions
// ============================================

// --- Cards Data ---
const cardsData = [
  {
    id: 'just-because',
    title: 'Just Because',
    tagline: 'No Reason Needed',
    category: 'Everyday Love',
    emoji: '💌',
    theme: 'rose',
    envelopeEmoji: '💌',
    message: '"Some days I love you because of something you did. Most days, I love you for no reason at all — just because you exist, and the world is softer with you in it."',
    signOff: '— Yours, always'
  },
  {
    id: 'your-smile',
    title: 'Your Smile',
    tagline: 'My Favorite Sight',
    category: 'A celebration of you',
    emoji: '🌸',
    theme: 'rose',
    envelopeEmoji: '🌸',
    message: '"Your smile is the first thing I think about in the morning and the last thing I picture before I fall asleep. It\'s quietly become the shape of my happiness."',
    signOff: '— Forever charmed'
  },
  {
    id: 'thank-you',
    title: 'Thank You',
    tagline: 'For Everything, and the Little Things',
    category: 'Gratitude',
    emoji: '✨',
    theme: 'rose',
    envelopeEmoji: '✨',
    message: '"Thank you for staying when the days were heavy. For laughing at my worst jokes. For choosing me again and again, even on the ordinary days. You make everything a little more beautiful."',
    signOff: '— Gratefully yours'
  },
  {
    id: 'our-story',
    title: 'Our Story',
    tagline: 'Still Being Written',
    category: 'Us',
    emoji: '📖',
    theme: 'rose',
    envelopeEmoji: '📖',
    message: '"We started somewhere between a glance and a feeling, and now we\'re chapters deep into something I never want to end. Every page with you is my favorite."',
    signOff: '— Your co-author'
  },
  {
    id: 'good-morning',
    title: 'Good Morning',
    tagline: 'A Note for the Day Ahead',
    category: 'Sunrise',
    emoji: '🌤️',
    theme: 'rose',
    envelopeEmoji: '🌤️',
    message: '"Good morning, love. I hope today is gentle with you. I hope it brings you small joys, warm coffee, and the quiet kind of happiness. And if it doesn\'t — I\'m here."',
    signOff: '— Your morning light'
  },
  {
    id: 'i-miss-you',
    title: 'I Miss You',
    tagline: 'Even When You\'re Close',
    category: 'Longing',
    emoji: '🌙',
    theme: 'rose',
    envelopeEmoji: '🌙',
    message: '"I miss you in ways that don\'t make sense — even when you\'re right beside me. It\'s like my heart forgot how to be quiet about you. Every distance feels too far."',
    signOff: '— Counting the moments'
  },
  {
    id: 'celebrate-you',
    title: 'Celebrate You',
    tagline: 'Today Is About Everything You Are',
    category: 'Celebration',
    emoji: '🎉',
    theme: 'rose',
    envelopeEmoji: '🎉',
    message: '"Today isn\'t about what you\'ve done — it\'s about who you are. The kindness you carry, the way you light up a room, the way you love so fiercely. The world doesn\'t celebrate you enough. So let me."',
    signOff: '— Your biggest fan'
  },
  {
    id: 'a-promise',
    title: 'A Promise',
    tagline: 'Quiet and Certain',
    category: 'Vows of the everyday',
    emoji: '🤍',
    theme: 'rose',
    envelopeEmoji: '🤍',
    message: '"I promise to keep choosing you — on the bright days and the hard ones. To hold your hand through the mess and the magic. To love you out loud and in silence. Always."',
    signOff: '— Promised and meant'
  },
  {
    id: 'you-are',
    title: 'You Are',
    tagline: 'Just a Few of the Things',
    category: 'All of you',
    emoji: '💫',
    theme: 'rose',
    envelopeEmoji: '💫',
    message: '"You are brave, even when you don\'t feel it. You are beautiful, even when you can\'t see it. You are enough — always have been, always will be. And you are deeply, impossibly loved."',
    signOff: '— With all my heart'
  },
  {
    id: 'dream-with-me',
    title: 'Dream With Me',
    tagline: 'Of Houses and Cities and Small Sundays',
    category: 'The future',
    emoji: '🏡',
    theme: 'rose',
    envelopeEmoji: '🏡',
    message: '"Let\'s dream about a little house with warm light, lazy Sunday mornings, and a kitchen that smells like home. Let\'s dream about growing old and still holding hands. Every dream I have starts with you."',
    signOff: '— Your dreamer'
  },
  {
    id: 'youre-enough',
    title: "You're Enough",
    tagline: 'Exactly As You Are',
    category: 'For hard days',
    emoji: '🌷',
    theme: 'rose',
    envelopeEmoji: '🌷',
    message: '"On the days when everything feels too heavy, I want you to remember this: you don\'t need to be more. You don\'t need to try harder. You are already enough — exactly as you are, right now."',
    signOff: '— Holding you gently'
  },
  {
    id: 'i-love-you',
    title: 'I Love You',
    tagline: 'Simply, Completely',
    category: 'The truest one',
    emoji: '❤️',
    theme: 'rose',
    envelopeEmoji: '❤️',
    message: '"I love you. Not just in the big, sweeping, movie-moment kind of way — but in the small, quiet, everyday way. In the way that stays. In the way that means it. I love you, completely."',
    signOff: '— Now and always'
  }
];


// --- DOM Elements ---
const cardsGrid = document.getElementById('cardsGrid');
const modalOverlay = document.getElementById('modalOverlay');
const modalCard = document.getElementById('modalCard');
const modalClose = document.getElementById('modalClose');
const modalEnvelope = document.getElementById('modalEnvelope');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalTagline = document.getElementById('modalTagline');
const modalMessage = document.getElementById('modalMessage');
const modalSignOff = document.getElementById('modalSignOff');

// --- Floating Hearts & Roses ---
const floatingHeartsContainer = document.getElementById('floatingHearts');
const symbols = ['💗', '💕', '🌸', '✨', '🌷', '🌹', '💖', '💝', '🌺', '❤️', '🩷'];
const numElements = 50;

if (floatingHeartsContainer) {
  for (let i = 0; i < numElements; i++) {
    const el = document.createElement('span');
    el.className = 'floating-heart';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    
    // Randomize position, delay, and size
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const size = 0.6 + Math.random() * 1.5;
    const duration = 10 + Math.random() * 15;
    
    el.style.left = `${left}%`;
    el.style.animationDelay = `${delay}s`;
    el.style.animationDuration = `${duration}s`;
    el.style.fontSize = `${size}rem`;
    
    floatingHeartsContainer.appendChild(el);
  }
}


// --- Render Cards ---
function renderCards() {
  cardsGrid.innerHTML = '';

  cardsData.forEach((card, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = `greeting-card theme-${card.theme}`;
    cardEl.setAttribute('data-card-id', card.id);
    cardEl.setAttribute('role', 'button');
    cardEl.setAttribute('tabindex', '0');
    cardEl.setAttribute('aria-label', `Open card: ${card.title}`);
    cardEl.style.animationDelay = `${0.1 + index * 0.1}s`;

    cardEl.innerHTML = `
      <p class="card-category">${card.category}</p>
      <span class="card-emoji" aria-hidden="true">${card.emoji}</span>
      <h3 class="card-title">${card.title}</h3>
      <p class="card-tagline">${card.tagline}</p>
      <button class="card-open-btn" aria-label="Open ${card.title} card">
        OPEN CARD <span class="arrow">→</span>
      </button>
    `;

    // Click event
    cardEl.addEventListener('click', () => openModal(card));

    // Keyboard accessibility
    cardEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card);
      }
    });

    cardsGrid.appendChild(cardEl);
  });
}


// --- Open Modal ---
function openModal(card) {
  // Set theme class
  modalCard.className = `modal-card modal-theme-${card.theme}`;

  // Fill content
  modalEnvelope.textContent = card.envelopeEmoji;
  modalCategory.textContent = card.category;
  modalTitle.textContent = card.title;
  modalTagline.textContent = card.tagline;
  modalMessage.textContent = card.message;
  modalSignOff.textContent = card.signOff;

  // Show modal
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Focus the close button
  setTimeout(() => modalClose.focus(), 300);
}


// --- Close Modal ---
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});


// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
});
