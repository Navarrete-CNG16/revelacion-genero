const images = document.querySelectorAll('.banner-img');
let currentIndex = 0;

// Función para cambiar la imagen
function changeImage() {
  // Quita la clase 'active' de la imagen actual
  images[currentIndex].classList.remove('active');

  // Calcula el siguiente índice
  currentIndex = (currentIndex + 1) % images.length;

  // Añade la clase 'active' a la nueva imagen
  images[currentIndex].classList.add('active');
}

// Inicia el carrusel automáticamente al cargar la página
window.onload = function () {
  // Cambia la imagen cada 5 segundos
  setInterval(changeImage, 5000);
};
