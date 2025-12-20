document.addEventListener("DOMContentLoaded", () => {
  if (!window.emailjs) {
    console.error("EmailJS non chargé");
    return;
  }

  emailjs.init("DbkttTP2vEpTCqmqQ");

  const form = document.getElementById("contact-form");

  if (!form) {
    console.warn("Formulaire #contact-form introuvable");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_k5piq3j", "template_sj9of4i", this)
      .then(() => {
        alert("Message envoyé avec succès");
        form.reset();
      })
      .catch((error) => {
        console.error("Erreur EmailJS :", error);
        alert("Une erreur est survenue, veuillez réessayer.");
      });
  });
});
