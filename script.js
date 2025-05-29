const imagenes = document.querySelector('.carrusel-imagenes');
const total = imagenes.children.length;
let indice = 0;

document.querySelector('.siguiente').addEventListener('click', () => {
  indice = (indice + 1) % total;
  actualizarCarrusel();
});

document.querySelector('.anterior').addEventListener('click', () => {
  indice = (indice - 1 + total) % total;
  actualizarCarrusel();
});

function actualizarCarrusel() {
  imagenes.style.transform = `translateX(-${indice * 100}%)`;
}

document.querySelectorAll('.carrusel').forEach(carrusel => {
  const contenedor = carrusel.querySelector('.carrusel-imagenes');
  const imagenes = carrusel.querySelectorAll('img');
  const btnAnterior = carrusel.querySelector('.anterior');
  const btnSiguiente = carrusel.querySelector('.siguiente');

  let index = 0;

  const mostrarImagen = () => {
    const ancho = carrusel.clientWidth;
    contenedor.style.transform = `translateX(-${index * ancho}px)`;
  };

  btnSiguiente.addEventListener('click', () => {
    if (index < imagenes.length - 1) {
      index++;
      mostrarImagen();
    }
  });

  btnAnterior.addEventListener('click', () => {
    if (index > 0) {
      index--;
      mostrarImagen();
    }
  });

  window.addEventListener('resize', mostrarImagen);
});
