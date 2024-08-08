let index = 0;
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;

function showSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(() => {
  index = (index + 1) % slideCount;
  showSlide();
}, 3000); // 슬라이드를 3초마다 변경
