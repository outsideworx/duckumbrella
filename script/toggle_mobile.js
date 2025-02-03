const images = ['img/index_mobile.webp', 'img/index_mobile2.webp'];

const imageElement = document.getElementById('toggleImage');

let currentIndex = 0;

function toggleImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}

toggleImage()
setInterval(toggleImage, 600);
