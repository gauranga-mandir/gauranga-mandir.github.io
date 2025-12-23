// Barakar Siddheswari Mandir - Main JavaScript

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

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
  } else {
    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});
