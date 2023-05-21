let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
const navLinks = document.querySelectorAll('.hero .nav li a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const destination = document.querySelector(href);
      const offsetTop = destination.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
function getTimeSinceBirth() {
    const birthDate = new Date('2002-12-01');
    const currentDate = new Date();
    const diff = currentDate.getTime() - birthDate.getTime();
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const timeSinceBirth = document.getElementById('time-since-birth');
    timeSinceBirth.textContent = `${years} years, ${months} months, and ${days} days`;
  }
getTimeSinceBirth();