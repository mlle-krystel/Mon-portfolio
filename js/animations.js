document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".project-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  sections.forEach((section) => observer.observe(section));
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-container");
  if (loader) {
    loader.style.animation = "fadeOut 0.6s ease forwards";
    setTimeout(() => {
      loader.style.display = "none";
    }, 600); // attend que l'animation se termine
  }
});
