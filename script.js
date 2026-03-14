// =============================================
// Hamburger Menu
// =============================================
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

// =============================================
// Active nav link on scroll
// =============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

// =============================================
// Navbar background on scroll
// =============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  setActiveNav();
  navbar.style.background = window.scrollY > 40
    ? 'rgba(14,14,14,0.95)'
    : 'rgba(14,14,14,0.85)';

  // Back to top
  document.getElementById('backTop').classList.toggle('visible', window.scrollY > 350);
}, { passive: true });

// =============================================
// Back to top click
// =============================================
document.getElementById('backTop').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =============================================
// Typewriter effect
// =============================================
const phrases = [
  'Cloud & DevOps Enthusiast',
  'Python Developer',
  'AWS Practitioner',
  'CI/CD Pipeline Builder'
];

let pi = 0, ci = 0, del = false;
const el = document.getElementById('typed');

function typeLoop() {
  const phrase = phrases[pi];
  if (!del) {
    el.textContent = phrase.slice(0, ci + 1);
    ci++;
    if (ci === phrase.length) {
      del = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    el.textContent = phrase.slice(0, ci - 1);
    ci--;
    if (ci === 0) {
      del = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, del ? 55 : 85);
}
typeLoop();

// Initial call
setActiveNav();
