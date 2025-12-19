// js/loader.js
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-container");

  if (loader) {
    // Attendre un peu pour laisser l’animation visuelle se jouer
    setTimeout(() => {
      loader.style.animation = "fadeOut 2.5s ease-in-out forwards";
    }, 1200); // ajustable
  }
});
