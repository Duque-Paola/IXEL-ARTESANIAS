// assets/js/components/navbar.js
// Puro: retorna HTML string. No toca DOM. No ejecuta código al importar.
// initNavbar() se llama desde main.js DESPUÉS de inyectar el HTML.
//
// CAMBIOS vs versión rota:
//   1. Rutas absolutas desde raíz (/assets/...) en imágenes y hrefs de nav.
//      Las rutas relativas (../../) fallan cuando el navbar se inyecta
//      desde páginas a distintas profundidades. Las absolutas funcionan
//      igual desde /index.html, /pages/public/products.html, etc.
//   2. Bug HTML corregido: el botón de carrito abría con <button> y
//      cerraba con </a> — DOM inválido que el parser repara de forma
//      impredecible, rompiendo el layout y los event listeners.

export function createNavbar() {
  return `
    <div class="navbar-border" role="presentation" aria-hidden="true">
      <img src="/assets/img/icons/cenefa.png" alt="" class="navbar-border__image">
    </div>

    <header class="navbar" role="banner">

      <div class="navbar__logo">
        <a href="/index.html" aria-label="Ir al inicio">
          <img
            src="/assets/img/icons/Marca-de-agua2_negro.png"
            alt="IXEL Artesanías"
            class="navbar__logo-image navbar__logo-image--desktop"
          >
          <img
            src="/assets/img/icons/x.png"
            alt="IXEL"
            class="navbar__logo-image navbar__logo-image--mobile"
          >
        </a>
      </div>

      <button
        class="navbar__hamburger"
        aria-label="Abrir menú"
        aria-expanded="false"
        aria-controls="navbar-nav"
        type="button"
      >
        <span class="navbar__hamburger-line"></span>
        <span class="navbar__hamburger-line"></span>
        <span class="navbar__hamburger-line"></span>
      </button>

      <nav class="navbar__nav" id="navbar-nav" aria-label="Navegación principal">
        <ul class="navbar__links" role="list">
          <li><a href="/index.html"                 class="navbar__link" data-section ="navbar" data-value="home">Inicio</a></li>
          <li><a href="/pages/public/products.html" class="navbar__link" data-section="navbar" data-value="products">Productos</a></li>
          <li><a href="/pages/public/about.html"    class="navbar__link" data-section="navbar" data-value="about">Nosotros</a></li>
          <li><a href="/pages/public/contact.html"  class="navbar__link" data-section="navbar" data-value="contact">Contacto</a></li>

          <li class="navbar__mobile-actions" role="none">
            <button class="navbar__mobile-action" data-action="search" aria-label="Buscar" type="button">
              <svg class="navbar__mobile-action-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
                <path d="M16.5 16.5L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span class="navbar__mobile-action-text" data-section="navbar" data-value="search">Buscar</span>
            </button>

            <a href="/pages/public/car.html" class="navbar__mobile-action" aria-label="Mi carrito">
              <svg class="navbar__mobile-action-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="navbar__mobile-action-text" data-section="navbar" data-value="cart">Mi carrito</span>
              <span id="cart-count-mobile" class="navbar__mobile-badge" aria-label="artículos en el carrito" >0</span>
            </a>
            <a href="/pages/public/profile.html" class="navbar__mobile-action" aria-label="Mi perfil">
              <svg class="navbar__mobile-action-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="navbar__mobile-action-text" data-section="navbar" data-value="profile">Mi perfil</span>
            </a>
            <div class="languages-mobile">
               <button class="lang-button" data-language="es"><img width="48" height="48" src="https://img.icons8.com/color/48/mexico.png" alt="mexico"/></button>
               <button class="lang-button" data-language="en"><img width="48" height="48" src="https://img.icons8.com/color/48/usa.png" alt="usa"/></button>
            </div>
          </li>
        </ul>
      </nav>

      <div class="navbar__actions navbar__actions--desktop" role="group" aria-label="Acciones">

      <div class="languages">
          <button class="lang-button" data-language="es" aria-label="Cambiar a español"><img width="48" height="48" src="https://img.icons8.com/color/48/mexico.png" alt="mexico"/></button>
          <button class="lang-button" data-language="en" aria-label="Change to English"><img width="48" height="48" src="https://img.icons8.com/color/48/usa.png" alt="usa"/></button>
      </div>

        <button
          class="navbar__bubble navbar__bubble--search"
          aria-label="Buscar producto"
          data-action="search"
          type="button"
        >
          <svg class="navbar__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
            <path d="M16.5 16.5L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>

        <!--
          CORRECCIÓN CRÍTICA: este elemento era <button> que cerraba con </a>.
          DOM inválido → el parser movía nodos de forma impredecible →
          el badge quedaba fuera del botón y los listeners se perdían.
          Ahora es <button> que cierra con </button>.
        -->
        <button
          class="navbar__bubble navbar__bubble--cart header-cart"
          aria-label="Abrir carrito de compras"
          type="button">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="500.000000pt" height="499.000000pt" viewBox="0 0 500.000000 499.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,499.000000) scale(0.100000,-0.100000)" fill="rgb(255, 255, 255)" stroke="none">
<path d="M2205 4524 c-291 -72 -480 -247 -554 -511 -15 -57 -20 -107 -21 -245 -1 -95 -1 -188 -1 -205 l1 -33 105 0 105 0 0 170 c0 93 5 193 11 222 53 252 307 431 552 388 106 -18 190 -62 268 -139 119 -119 149 -212 149 -468 l0 -173 104 0 c85 0 105 3 110 16 9 25 7 218 -4 337 -28 292 -207 519 -485 616 -57 20 -93 25 -195 27 -69 2 -134 1 -145 -2z"/>
<path d="M1126 3448 c-2 -7 -9 -71 -16 -143 -15 -163 -26 -282 -40 -410 -6 -55 -15 -144 -20 -197 -6 -54 -14 -142 -20 -195 -5 -54 -14 -143 -20 -198 -11 -108 -65 -630 -80 -785 -5 -52 -14 -140 -20 -195 -6 -55 -15 -143 -20 -195 -23 -235 -31 -306 -36 -322 -5 -17 47 -18 1000 -18 553 0 1006 3 1006 6 0 3 -14 25 -31 50 -30 44 -79 154 -93 206 l-6 28 -155 0 c-125 0 -155 3 -155 14 0 9 18 16 55 21 59 7 63 13 44 62 -37 90 -97 231 -115 267 -20 42 -18 53 14 62 36 10 42 11 41 1 -1 -14 34 -36 57 -37 31 0 34 9 11 36 -16 19 -30 24 -68 24 -37 0 -48 4 -51 18 -2 11 -6 13 -11 5 -4 -6 0 -19 9 -27 14 -15 13 -16 -8 -16 -19 0 -27 8 -37 37 -13 36 -13 38 18 65 l31 28 -47 0 c-76 0 -92 -8 -99 -47 -10 -51 4 -53 46 -5 39 44 71 59 48 23 -7 -11 -16 -19 -22 -18 -5 1 -17 -18 -27 -43 -18 -48 -46 -63 -75 -39 -12 10 -13 9 -8 -5 3 -9 17 -16 30 -16 30 0 30 -3 -6 -86 -17 -38 -35 -78 -39 -89 -5 -11 -16 -37 -25 -57 -34 -77 -46 -122 -37 -131 6 -6 33 -12 60 -15 34 -3 51 -9 51 -18 0 -12 -49 -14 -275 -14 -225 0 -275 2 -275 14 0 9 18 15 56 19 39 4 64 13 80 28 21 19 154 272 154 292 0 3 13 34 29 69 122 260 149 343 123 374 -5 5 -15 25 -22 44 -8 19 -26 63 -42 98 -15 34 -28 65 -28 67 0 3 -18 44 -40 91 -22 47 -40 88 -40 91 0 15 -99 210 -113 221 -8 7 -45 18 -81 24 -36 6 -66 15 -66 19 0 8 470 18 518 11 35 -5 26 -20 -18 -27 -22 -4 -42 -11 -45 -15 -7 -11 17 -80 71 -207 24 -57 44 -104 44 -107 0 -2 -12 -1 -27 1 -27 4 -27 4 5 -13 18 -9 41 -33 51 -53 l19 -35 21 47 c11 26 30 66 40 90 43 94 101 249 101 267 0 15 -10 20 -45 26 -106 15 -28 24 225 24 149 0 270 -4 270 -8 0 -5 -31 -14 -69 -21 -98 -18 -108 -30 -197 -238 -25 -59 -54 -126 -64 -148 -64 -142 -110 -259 -110 -280 0 -24 12 -54 69 -178 17 -37 31 -70 31 -72 0 -2 11 -28 24 -57 13 -29 34 -77 46 -106 24 -55 40 -55 40 -1 0 30 33 133 63 199 60 130 198 284 317 354 175 103 341 131 573 100 47 -7 48 -6 43 17 -3 13 -15 114 -26 224 -11 110 -25 243 -31 295 -32 315 -53 515 -68 665 l-16 170 -203 3 -202 2 0 -350 0 -350 -250 0 -250 0 0 350 0 350 -350 0 -350 0 0 -350 0 -350 -250 0 -250 0 0 350 0 350 -170 0 c-128 0 -172 -3 -174 -12z m1164 -1868 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m224 -76 c4 -9 4 -19 1 -22 -6 -6 -35 18 -35 29 0 16 28 10 34 -7z"/>
<path d="M1540 3325 l0 -135 110 0 110 0 0 75 0 75 -34 0 c-34 0 -35 -1 -38 -47 -3 -48 -3 -48 -38 -48 l-35 0 -3 78 -3 78 113 -3 113 -3 0 -230 c1 -126 -1 -242 -3 -257 l-4 -28 -109 0 -109 0 0 100 0 100 40 0 40 0 0 -65 0 -65 35 0 36 0 -3 93 -3 92 -107 3 -108 3 0 -161 0 -160 180 0 180 0 0 320 0 320 -180 0 -180 0 0 -135z"/>
<path d="M2742 3143 l3 -318 178 -3 178 -2 -3 157 -3 158 -105 0 -105 0 -3 -92 -3 -93 41 0 40 0 0 66 0 65 38 -3 37 -3 3 -97 3 -98 -116 0 -115 0 0 260 0 260 115 0 116 0 -3 -77 -3 -78 -37 -3 -37 -3 -3 48 c-3 48 -3 48 -38 48 l-35 0 -3 -72 -3 -73 111 0 110 0 0 28 c0 15 2 75 3 135 l2 107 -183 0 -182 0 2 -317z"/>
<path d="M2100 2400 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z"/>
<path d="M2058 2373 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
<path d="M2135 2320 c4 -6 11 -8 16 -5 14 9 11 15 -7 15 -8 0 -12 -5 -9 -10z"/>
<path d="M2125 2249 c-4 -6 -5 -13 -2 -16 7 -7 27 6 27 18 0 12 -17 12 -25 -2z"/>
<path d="M2110 2209 c0 -5 14 -15 31 -21 19 -7 28 -15 25 -24 -8 -20 12 -17 36 6 l21 19 -27 11 c-34 13 -39 13 -31 0 3 -5 2 -10 -3 -10 -6 0 -12 7 -16 15 -6 17 -36 21 -36 4z"/>
<path d="M2446 2186 c5 -13 -1 -16 -30 -16 -35 0 -36 -1 -36 -40 0 -38 2 -40 29 -40 46 0 62 -9 50 -28 -12 -19 4 -72 21 -72 13 0 13 27 0 35 -15 9 -12 25 5 25 8 0 15 8 15 18 0 10 6 24 13 31 10 11 6 12 -22 6 l-33 -7 7 33 c12 54 11 63 -7 67 -13 2 -16 -1 -12 -12z m4 -33 c-1 -31 -15 -53 -34 -53 -16 0 -21 7 -23 30 -2 27 1 30 27 30 17 0 30 -3 30 -7z"/>
<path d="M2492 2158 c3 -7 14 -14 26 -16 16 -3 20 1 16 12 -7 19 -48 22 -42 4z"/>
<path d="M2220 2146 c0 -2 9 -6 20 -9 11 -3 20 -1 20 4 0 5 -9 9 -20 9 -11 0 -20 -2 -20 -4z"/>
<path d="M2203 2117 c-13 -5 -23 -14 -23 -19 0 -4 -7 -8 -15 -8 -22 0 -18 -27 7 -44 12 -9 23 -26 23 -38 0 -19 6 -24 38 -26 35 -3 38 -1 32 17 -8 26 15 37 44 21 26 -14 27 -40 2 -40 -29 0 -33 -15 -11 -43 22 -27 27 -48 8 -29 -7 7 -23 12 -37 12 -24 0 -24 1 -5 14 10 8 15 18 11 22 -4 5 -12 2 -16 -5 -7 -11 -10 -11 -14 0 -4 12 -7 11 -16 -1 -16 -23 -14 -28 19 -35 17 -4 30 -10 30 -15 0 -4 11 -7 25 -7 28 0 28 0 16 44 -7 24 -6 31 3 27 7 -3 17 6 23 19 9 20 8 28 -5 41 -15 14 -15 16 0 16 8 0 18 8 21 19 3 14 0 17 -15 13 -13 -3 -16 -7 -8 -12 7 -4 -4 -10 -26 -15 -53 -10 -77 -24 -70 -41 4 -11 0 -15 -17 -12 -16 2 -21 9 -20 26 2 16 -5 26 -22 34 -27 12 -33 28 -11 28 8 0 21 6 28 13 15 13 78 19 78 6 0 -5 10 -13 21 -20 21 -11 21 -11 3 15 -13 17 -26 25 -38 21 -11 -2 -25 0 -30 4 -6 5 -21 4 -33 -2z"/>
<path d="M2381 2026 c3 -31 1 -42 -8 -39 -13 5 -33 -54 -25 -74 5 -16 32 -17 32 -2 0 5 -4 7 -10 4 -6 -3 -7 1 -4 9 3 9 12 16 20 16 9 0 14 11 14 28 0 15 4 34 9 41 6 10 8 1 4 -26 -4 -33 -1 -45 16 -62 29 -29 38 -26 33 8 -3 20 -8 28 -18 24 -10 -4 -14 4 -14 30 0 48 -16 87 -36 87 -13 0 -15 -9 -13 -44z"/>
<path d="M4109 1862 c-206 -217 -436 -459 -514 -543 -49 -53 -95 -99 -101 -102 -5 -3 -77 60 -159 140 l-149 144 -104 -105 -105 -104 253 -249 c138 -136 255 -249 259 -251 4 -1 70 64 147 145 76 81 186 197 244 258 58 60 146 153 196 205 49 52 135 141 190 198 54 57 103 110 108 119 6 12 -15 39 -90 114 -54 55 -101 99 -105 99 -3 0 -35 -30 -70 -68z"/>
<path d="M2284 1866 c-12 -9 -14 -15 -6 -20 7 -4 12 -2 12 3 0 19 83 12 109 -8 l25 -19 -25 -26 c-13 -14 -30 -26 -36 -26 -7 0 -13 -7 -13 -15 0 -8 5 -15 10 -15 6 0 10 5 10 10 0 6 7 10 15 10 8 0 15 5 15 12 0 6 7 20 16 30 14 15 15 20 4 33 -31 37 -104 54 -136 31z"/>
<path d="M2303 1833 c4 -6 0 -19 -8 -29 -8 -10 -15 -27 -15 -37 0 -22 27 -34 43 -17 9 9 8 11 -8 8 -13 -2 -20 3 -20 12 0 11 11 15 42 14 23 0 40 3 37 8 -3 4 -16 8 -28 8 -16 0 -23 5 -22 16 0 9 -5 19 -13 22 -8 2 -11 0 -8 -5z"/>
<path d="M2355 1830 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7 -4 -4 -10z"/>
<path d="M2230 1781 c0 -5 -8 -12 -17 -14 -10 -3 -1 -5 20 -6 27 -1 37 3 37 14 0 8 -9 15 -20 15 -11 0 -20 -4 -20 -9z"/>
<path d="M2406 1734 c-12 -31 -5 -45 27 -59 18 -8 25 -14 15 -15 -10 0 -18 -5 -18 -11 0 -6 8 -9 18 -7 25 5 21 27 -7 41 -36 18 -41 42 -7 33 32 -8 33 -3 2 17 -22 15 -25 15 -30 1z"/>
<path d="M2350 1731 c-14 -4 -20 -10 -15 -13 10 -6 55 7 55 17 0 6 -7 5 -40 -4z"/>
<path d="M2200 1721 c0 -5 9 -13 21 -16 17 -6 18 -9 7 -22 -11 -14 -9 -15 21 -8 l33 7 -21 -21 c-22 -22 -27 -41 -11 -41 6 0 10 9 10 20 0 13 7 20 20 20 33 0 23 18 -22 39 -28 13 -36 20 -23 20 11 1 26 -3 34 -8 7 -5 23 -6 35 -3 17 5 13 8 -19 14 -56 10 -85 10 -85 -1z"/>
<path d="M2175 1680 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6 0 -7 -4 -4 -10z"/>
<path d="M2177 1609 c-25 -25 -27 -30 -15 -50 7 -13 19 -29 26 -37 20 -23 14 -36 -10 -19 -13 8 -22 23 -20 33 2 18 2 18 -9 0 -10 -15 -7 -22 17 -41 34 -27 44 -18 38 34 -3 28 -2 32 5 16 9 -19 10 -19 10 3 1 17 -4 22 -16 20 -41 -6 -44 13 -7 43 20 16 31 28 23 28 -8 -1 -27 -14 -42 -30z"/>
<path d="M2486 1625 c16 -12 17 -16 4 -24 -12 -9 -12 -11 3 -17 24 -9 21 -22 -5 -27 -17 -3 -14 -5 10 -6 23 -1 32 3 32 14 0 9 -7 18 -15 21 -8 4 -12 10 -9 15 7 12 -14 39 -29 39 -6 0 -2 -7 9 -15z"/>
<path d="M2100 1472 c0 -5 7 -17 16 -28 14 -17 15 -17 10 -1 -3 10 -6 23 -6 28 0 5 -4 9 -10 9 -5 0 -10 -4 -10 -8z"/>
<path d="M2160 1450 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z"/>
<path d="M2518 1443 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
<path d="M2095 1340 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0 -13 -4 -16 -10z"/>
<path d="M2025 1320 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6 0 -7 -4 -4 -10z"/>
</g>
</svg>
          <span id="cart-count" class="navbar__badge quantity">0</span>
        </button>

        <div style="position:relative;">
          <button id="user-btn" class="navbar__bubble" aria-label="Mi cuenta" type="button">
            <svg class="navbar__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div id="user-menu" style="display:none;position:absolute;top:calc(100% + 8px);right:0;background:#fff;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,0.15);min-width:160px;z-index:1100;overflow:hidden;">
            <a href="/pages/users/users.html" style="display:block;padding:13px 20px;font-family:Nunito,sans-serif;font-size:15px;font-weight:600;color:#683531;text-decoration:none;">Mi perfil</a>
            <button id="logout-btn" type="button" style="display:block;width:100%;padding:13px 20px;font-family:Nunito,sans-serif;font-size:15px;font-weight:600;color:#a0191e;background:none;border:none;border-top:1px solid rgba(104,53,49,0.1);cursor:pointer;text-align:left;">Cerrar sesión</button>
          </div>
        </div>

      </div>
    </header>

    <div class="navbar__search-modal" id="search-modal" role="dialog" aria-modal="true" aria-label="Buscar productos">
      <div class="navbar__search-modal-content">
        <input
          type="search"
          class="navbar__search-input"
          placeholder="Buscar productos…"
          data-section="navbar" data-value="searchPlaceholder"
          id="search-input"
          autocomplete="off"
        >
        <button class="navbar__search-close" aria-label="Cerrar búsqueda" type="button">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  `;
}

/**
 * Inicializa comportamiento del navbar.
 * Se llama desde main.js DESPUÉS de inyectar createNavbar() en el DOM.
 */
export function initNavbar() {
  const navbar         = document.querySelector('.navbar');
  const hamburger      = document.querySelector('.navbar__hamburger');
  const nav            = document.querySelector('.navbar__nav');
  const searchModal    = document.getElementById('search-modal');
  const searchInput    = document.getElementById('search-input');
  const searchClose    = document.querySelector('.navbar__search-close');
  const searchTriggers = document.querySelectorAll('[data-action="search"]');

  // ── Scroll ───────────────────────────────────────────────────
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('navbar--scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Hamburguesa ──────────────────────────────────────────────
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      hamburger.classList.toggle('navbar__hamburger--active');
      nav.classList.toggle('navbar__nav--open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    nav.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  function closeMenu() {
    hamburger?.setAttribute('aria-expanded', 'false');
    hamburger?.classList.remove('navbar__hamburger--active');
    nav?.classList.remove('navbar__nav--open');
    document.body.style.overflow = '';
  }

  // ── Búsqueda ─────────────────────────────────────────────────
  function openSearch(e) {
    e?.preventDefault();
    searchModal?.classList.add('navbar__search-modal--open');
    searchInput?.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    searchModal?.classList.remove('navbar__search-modal--open');
    document.body.style.overflow = '';
    if (searchInput) searchInput.value = '';
  }

  searchTriggers.forEach(t => t.addEventListener('click', openSearch));
  searchClose?.addEventListener('click', closeSearch);
  searchModal?.addEventListener('click', e => { if (e.target === searchModal) closeSearch(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });

  // ── Dropdown usuario ────────────────────────────────────────
  const userBtn  = document.getElementById('user-btn');
  const userMenu = document.getElementById('user-menu');
  const logoutBtn = document.getElementById('logout-btn');

  userBtn?.addEventListener('click', e => {
    e.stopPropagation();
    const isLoggedIn = !!localStorage.getItem('currentUser');
    if (!isLoggedIn) {
      window.location.href = '/pages/auth/login.html';
      return;
    }
    userMenu.style.display = userMenu.style.display === 'none' ? 'block' : 'none';
  });

  document.addEventListener('click', () => {
    if (userMenu) userMenu.style.display = 'none';
  });

  logoutBtn?.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '/pages/auth/login.html';
  });

  // ── Link activo ──────────────────────────────────────────────
  highlightActiveLink();
}

function highlightActiveLink() {
  const current = window.location.pathname;
  document.querySelectorAll('.navbar__link').forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname;
    const isRoot   = linkPath === '/' || linkPath.endsWith('/index.html');
    const isActive = isRoot
      ? current === '/' || current.endsWith('/index.html')
      : current === linkPath;
    link.classList.toggle('navbar__link--active', isActive);
  });
}