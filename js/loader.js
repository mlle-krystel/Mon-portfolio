document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader-container");
  if (!loader) return;

  // Durée de l’animation texte (trackingIn = 1.2s)
  const ANIMATION_DURATION = 1200;
  const FADE_DURATION = 800;

  // On laisse l’animation se jouer
  setTimeout(() => {
    loader.style.animation = "fadeOut 0.8s ease forwards";

    // On retire complètement le loader après le fade
    setTimeout(() => {
      loader.style.display = "none";
    }, FADE_DURATION);
  }, ANIMATION_DURATION);
});
