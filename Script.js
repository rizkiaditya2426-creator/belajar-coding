// Scroll Reveal (Fade-in saat scroll)
const sections = document.querySelectorAll('.section, .hero-text, .hero-image');

function revealOnScroll() {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
}

sections.forEach(section => section.classList.add('fade-in'));
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Smooth Scroll untuk navigasi
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Efek hover tombol
const buttons = document.querySelectorAll('.btn, .btn-outline');
buttons.forEach(btn => {
  btn.addEventListener('mouseover', () => {
    btn.style.transform = 'scale(1.05)';
  });
  btn.addEventListener('mouseout', () => {
    btn.style.transform = 'scale(1)';
  });
});

// Efek klik foto hero
const heroImage = document.querySelector('.hero-image img');
if (heroImage) {
  heroImage.addEventListener('click', () => {
    heroImage.style.transform = 'scale(1.1)';
    setTimeout(() => {
      heroImage.style.transform = 'scale(1)';
    }, 300);
  });
}