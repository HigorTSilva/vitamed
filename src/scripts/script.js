const navbar = document.getElementById("navbar");

window.addEventListener('scroll', function () {
  if (this.window.scrollY > 0) return navbar.classList.add('shadow-navbarShadow');
  return navbar.classList.remove('shadow-navbarShadow');
});

let slideIndex = 0;
showSlide(slideIndex);

function prevSlide() {
  showSlide(slideIndex -= 1);
  resetTimer();
}

function nextSlide() {
  showSlide(slideIndex += 1);
  resetTimer();
}

function showSlide(n) {
  const slides = document.getElementsByClassName("carousel-item");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

let timer = setInterval(autoAdvance, 15000)
function autoAdvance() {
  nextSlide();
}

function resetTimer(){
  clearInterval(timer);
  timer = setInterval(autoAdvance, 15000);
}


function openNav() {
  const navMobile = document.getElementById("nav-mobile");

  navMobile.classList.remove("hidden");
  navMobile.classList.add("block");
  navMobile.classList.add("w-full");
}

function closeNav() {
  const navMobile = document.getElementById("nav-mobile");

  navMobile.classList.remove("block");
  navMobile.classList.add("hidden");
  navMobile.classList.remove("w-full");
}