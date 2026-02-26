// assets/js/components/footer.js
// Puro: retorna HTML string. No toca DOM. No ejecuta código al importar.

export function createFooter() {
  return `
    <footer class="footer" role="contentinfo">
      <div class="footer__container">

        <div class="footer__left">
          <section class="footer__section">
            <h4 class="footer__title">Enlaces Rápidos</h4>
            <ul class="footer__list" role="list">
              <li class="footer__list-item"><a href="../../index.html"                 class="footer__link">Inicio</a></li>
              <li class="footer__list-item"><a href="../../pages/public/products.html" class="footer__link">Productos</a></li>
              <li class="footer__list-item"><a href="../../pages/public/about.html"    class="footer__link">Nosotros</a></li>
              <li class="footer__list-item"><a href="../../pages/public/contact.html"  class="footer__link">Contacto</a></li>
            </ul>
          </section>

          <section class="footer__section">
            <h4 class="footer__title">Información</h4>
            <ul class="footer__list" role="list">
              <li class="footer__list-item"><a href="../../pages/public/about.html" class="footer__link">Sobre nosotros</a></li>
              <li class="footer__list-item"><a href="#" class="footer__link">Términos y condiciones</a></li>
              <li class="footer__list-item"><a href="#" class="footer__link">Política de privacidad</a></li>
            </ul>
          </section>

          <section class="footer__section">
            <h4 class="footer__title">Contacto</h4>
            <ul class="footer__list" role="list">
              <li class="footer__list-item"><a href="tel:+523346675957"                   class="footer__link">+52 1 33 4667 5957</a></li>
              <li class="footer__list-item"><a href="mailto:ixelartesanias@gmail.com"  class="footer__link">ixelartesanias@gmail.com</a></li>
              <li class="footer__list-item"><span class="footer__link">Jalisco, México</span></li>
            </ul>
          </section>
        </div>

        <div class="footer__right">
          <nav class="footer__social" aria-label="Redes sociales">
            <a href="https://www.facebook.com/profile.php?id=61578116663335"
               target="_blank" rel="noopener noreferrer"
               class="footer__social-link" aria-label="Facebook">
              <svg width="36" height="36" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path fill="#F2D5C1" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"/>
              </svg>
            </a>

            <a href="https://www.instagram.com/ixel.mx/"
               target="_blank" rel="noopener noreferrer"
               class="footer__social-link" aria-label="Instagram">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#F2D5C1" stroke-width="2"/>
                <circle cx="12" cy="12" r="4" stroke="#F2D5C1" stroke-width="2"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#F2D5C1"/>
              </svg>
            </a>

            <a href="mailto:ixelartesanias@gmail.com"
               class="footer__social-link" aria-label="Correo electrónico">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="#F2D5C1" stroke-width="2"/>
                <path d="M2 7l10 7 10-7" stroke="#F2D5C1" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </a>

            <a href="http://wa.me/523330336808"
                target="_blank" rel="noopener noreferrer"
                class="footer__social-link" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#F2D5C1" width="600px" height="800px" viewBox="-1.66 0 740.824 740.824"><path fill-rule="evenodd" clip-rule="evenodd" d="M630.056 107.658C560.727 38.271 468.525.039 370.294 0 167.891 0 3.16 164.668 3.079 367.072c-.027 64.699 16.883 127.855 49.016 183.523L0 740.824l194.666-51.047c53.634 29.244 114.022 44.656 175.481 44.682h.151c202.382 0 367.128-164.689 367.21-367.094.039-98.088-38.121-190.32-107.452-259.707m-259.758 564.8h-.125c-54.766-.021-108.483-14.729-155.343-42.529l-11.146-6.613-115.516 30.293 30.834-112.592-7.258-11.543c-30.552-48.58-46.689-104.729-46.665-162.379C65.146 198.865 202.065 62 370.419 62c81.521.031 158.154 31.81 215.779 89.482s89.342 134.332 89.311 215.859c-.07 168.242-136.987 305.117-305.211 305.117m167.415-228.514c-9.176-4.591-54.286-26.782-62.697-29.843-8.41-3.061-14.526-4.591-20.644 4.592-6.116 9.182-23.7 29.843-29.054 35.964-5.351 6.122-10.703 6.888-19.879 2.296-9.175-4.591-38.739-14.276-73.786-45.526-27.275-24.32-45.691-54.36-51.043-63.542-5.352-9.183-.569-14.148 4.024-18.72 4.127-4.11 9.175-10.713 13.763-16.07 4.587-5.356 6.116-9.182 9.174-15.303 3.059-6.122 1.53-11.479-.764-16.07-2.294-4.591-20.643-49.739-28.29-68.104-7.447-17.886-15.012-15.466-20.644-15.746-5.346-.266-11.469-.323-17.585-.323-6.117 0-16.057 2.296-24.468 11.478-8.41 9.183-32.112 31.374-32.112 76.521s32.877 88.763 37.465 94.885c4.587 6.122 64.699 98.771 156.741 138.502 21.891 9.45 38.982 15.093 52.307 19.323 21.981 6.979 41.983 5.994 57.793 3.633 17.628-2.633 54.285-22.19 61.932-43.616 7.646-21.426 7.646-39.791 5.352-43.617-2.293-3.826-8.41-6.122-17.585-10.714"/></svg>

            </a>
          </nav>
          <div class="footer__monogram" aria-hidden="true">
            <img src="../../assets/img/icons/x.png" alt="ixel_monogram" class="footer__monogram-image">
          </div>
        </div>
      </div>
    </footer>

    <div class="footer__border" role="presentation" aria-hidden="true">
      <img src="../../assets/img/icons/cenefa.png" alt="" class="footer__border-image">
    </div>
  `;
}