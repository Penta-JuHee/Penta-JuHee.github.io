document.addEventListener("DOMContentLoaded", () => {
  new TypeIt("#title") //
    .pause(1000)
    .delete(4, { delay: 1000 })
    .type("구교환 닮은 신선임님")
    .go();
});

ScrollOut({
  onShown: (element) => {
    new TypeIt(element.querySelector(".title"), {
      startDelay: 500,
      cursor: false,
    })
      .pause(2000)
      .go();
  },
});

/** Carousel slider */
const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider__item:first-child");
function slide() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}

setInterval(slide, 2000);
