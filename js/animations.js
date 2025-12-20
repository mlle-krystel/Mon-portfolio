document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".project-section");

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  sections.forEach((section) => observer.observe(section));
});
