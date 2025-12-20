window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-container");
  if (!loader) return;

  setTimeout(() => {
    loader.style.animation = "fadeOut 0.8s ease forwards";

    setTimeout(() => {
      loader.style.display = "none";
    }, 800);
  }, 1200);
});
