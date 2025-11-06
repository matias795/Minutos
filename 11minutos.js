// Seleccionamos filtros y productos
const filtros = document.querySelectorAll(".filtro");
const productos = document.querySelectorAll(".producto");

// Agregamos evento de click a cada filtro
filtros.forEach(filtro => {
  filtro.addEventListener("click", () => {
    const categoria = filtro.getAttribute("data-categoria");

    productos.forEach(producto => {
      if (producto.classList.contains(categoria)) {
        producto.style.display = "flex"; // mostrar
      } else {
        producto.style.display = "none"; // ocultar
      }
    });
  });
});
