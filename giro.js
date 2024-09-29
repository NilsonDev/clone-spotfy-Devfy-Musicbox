const images = document.querySelectorAll('.artists-grid img');

images.forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('rotate');
  });
});