const images = document.querySelectorAll(".gallery img");
let index = 0;

function openLightbox(i) {
  index = i;
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = images[index].src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function next() {
  index = (index + 1) % images.length;
  openLightbox(index);
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  openLightbox(index);
}