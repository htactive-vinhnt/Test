var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var images = document.getElementsByClassName("image");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < images.length; i++) {
    images[i].className = images[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  images[slideIndex - 1].className += " active";
  setTimeout(showSlides, 10000);
}

