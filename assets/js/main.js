import { createFooter } from './components/footer.js';

// Inyectar el navbar en todas las páginas
document.addEventListener('DOMContentLoaded', () => {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = createFooter();
  }
});