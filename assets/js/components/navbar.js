export function createNavbar() {

  return `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="../../../index.html">Inicio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="../../../index.html">Inicio</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="../../pages/public/products.html">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/public/about.html">about</a>
            </li>
                  <!-- Carrito de compras -->
            <li class="nav-item position-relative">
              <a class="nav-link" href="../../pages/public/cart.html">
                🛒
                <span id="cart-count" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </a>
            </li>
            <!-- Carrito de compras -->

          </ul>
        </div>
      </div>
    </nav>
  `;
}