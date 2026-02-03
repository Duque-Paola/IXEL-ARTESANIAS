import { createFooter } from './components/footer.js';
import { createNavbar } from './components/navbar.js';

// Inyectar el navbar en todas las páginas
document.addEventListener('DOMContentLoaded', () => {
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    navbarContainer.innerHTML = createNavbar();
  }
});

// Inyectar el footer en todas las páginas
document.addEventListener('DOMContentLoaded', () => {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = createFooter();
  }
});