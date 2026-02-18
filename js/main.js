// Barakar Gauranga Mandir - Main JavaScript

// Mobile menu toggle
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');

  // Close any open dropdowns when closing menu
  if (!navMenu.classList.contains('active')) {
    const dropdowns = document.querySelectorAll('.dropdown.active');
    dropdowns.forEach(d => d.classList.remove('active'));
  }
}

// Dropdown toggle for mobile
function toggleDropdown(event) {
  event.preventDefault();
  event.stopPropagation();

  // Only toggle on mobile
  if (window.innerWidth <= 768) {
    const dropdown = event.target.closest('.dropdown');
    if (dropdown) {
      dropdown.classList.toggle('active');
    }
  }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const navMenu = document.getElementById('nav-menu');
  const menuToggle = document.querySelector('.menu-toggle');

  if (navMenu && menuToggle) {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navMenu.classList.remove('active');
      // Also close dropdowns
      const dropdowns = document.querySelectorAll('.dropdown.active');
      dropdowns.forEach(d => d.classList.remove('active'));
    }
  }
});

// Lightbox for gallery
var lightboxItems = [];
var lightboxIndex = 0;

function openLightbox(el) {
  lightboxItems = Array.from(document.querySelectorAll('.gallery-item[onclick]'));
  lightboxIndex = lightboxItems.indexOf(el);
  var img = el.querySelector('img');
  var caption = el.querySelector('.gallery-caption');
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-img').alt = img.alt;
  document.getElementById('lightbox-caption').textContent = caption ? caption.textContent : '';
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  if (event.target === document.getElementById('lightbox') || event.target.classList.contains('lightbox-close')) {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
  }
}

function navigateLightbox(event, direction) {
  event.stopPropagation();
  lightboxIndex = (lightboxIndex + direction + lightboxItems.length) % lightboxItems.length;
  var el = lightboxItems[lightboxIndex];
  var img = el.querySelector('img');
  var caption = el.querySelector('.gallery-caption');
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-img').alt = img.alt;
  document.getElementById('lightbox-caption').textContent = caption ? caption.textContent : '';
}

document.addEventListener('keydown', function(e) {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox || !lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') { lightbox.classList.remove('active'); document.body.style.overflow = ''; }
  if (e.key === 'ArrowLeft') navigateLightbox(e, -1);
  if (e.key === 'ArrowRight') navigateLightbox(e, 1);
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
  } else {
    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});
