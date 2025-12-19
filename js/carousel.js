document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-secondary");
  if (!carousels.length) return;

  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll(".project-card");
    const dots = carousel.querySelectorAll(".dot");
    const prevBtn = carousel.querySelector(".carousel-prev");
    const nextBtn = carousel.querySelector(".carousel-next");

    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("is-active", i === index);
        dots[i].classList.toggle("is-active", i === index);
      });
    }

    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentSlide = i;
        showSlide(currentSlide);
      });
    });

    showSlide(currentSlide);
  });
});
