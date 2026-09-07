// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close nav after tapping a link (mobile)
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== Photo gallery lightbox =====
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

if (gallery && lightbox && lightboxImg) {
  gallery.querySelectorAll('.gallery-item img').forEach((img) => {
    img.addEventListener('click', () => {
      // Skip opening the lightbox for photos that haven't been added yet
      if (img.parentElement.classList.contains('img-fallback')) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}
