document.addEventListener("DOMContentLoaded", () => {
  const carruseles = document.querySelectorAll(".carrusel");

  carruseles.forEach(carrusel => {
    const imagenes = carrusel.querySelectorAll(".carrusel-imagenes img");
    const btnAnterior = carrusel.querySelector(".anterior");
    const btnSiguiente = carrusel.querySelector(".siguiente");
    let indiceActual = 0;

    // Oculta todas las imágenes menos la primera
    function mostrarImagen(index) {
      imagenes.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
      });
    }

    // Mostrar primera imagen
    mostrarImagen(indiceActual);

    // Botón siguiente
    btnSiguiente.addEventListener("click", () => {
      indiceActual = (indiceActual + 1) % imagenes.length;
      mostrarImagen(indiceActual);
    });

    // Botón anterior
    btnAnterior.addEventListener("click", () => {
      indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
      mostrarImagen(indiceActual);
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const carruseles = document.querySelectorAll(".carrusel");

  carruseles.forEach(carrusel => {
    const imagenes = carrusel.querySelectorAll(".carrusel-imagenes img");
    const btnAnterior = carrusel.querySelector(".anterior");
    const btnSiguiente = carrusel.querySelector(".siguiente");
    let indiceActual = 0;

    function mostrarImagen(index) {
      imagenes.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
      });
    }

    mostrarImagen(indiceActual);

    btnSiguiente.addEventListener("click", () => {
      indiceActual = (indiceActual + 1) % imagenes.length;
      mostrarImagen(indiceActual);
    });

    btnAnterior.addEventListener("click", () => {
      indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
      mostrarImagen(indiceActual);
    });
  });
});
