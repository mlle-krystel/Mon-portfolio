// Carrousel React 
import React, { useState } from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

function Carousel({ elements }) {
  const [current, setCurrent] = useState(0);
  const total = elements.length;

  if (!total) return null;

  const goNext = () => setCurrent((c) => (c + 1) % total);
  const goPrev = () => setCurrent((c) => (c - 1 + total) % total);

  return React.createElement(
    "div",
    {
      className: "carousel",
      role: "region",
      "aria-label": "Carrousel de projets",
    },

    React.createElement(
      "div",
      { className: "carousel-box" },
      elements.map((el, i) =>
        React.createElement(
          "article",
          {
            key: el.id,
            className: `project-card ${i === current ? "is-active" : ""}`,
          },
          React.createElement(
            "div",
            { className: "project-card-text" },
            React.createElement(
              "h2",
              { className: "project-card-title" },
              el.title
            ),
            React.createElement(
              "p",
              { className: "project-card-presentation" },
              el.description
            ),
            React.createElement(
              "ul",
              { className: "tags" },
              el.tags.map((t) =>
                React.createElement("li", { key: t, className: "tag" }, t)
              )
            ),
            React.createElement(
              "div",
              { className: "gotoproject" },
              React.createElement(
                "a",
                { href: el.link, className: "btn btn-primary" },
                "Voir le projet →"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "project-card-media" },
            React.createElement("img", {
              src: el.imageSrc,
              alt: el.imageAlt,
              loading: "lazy",
            })
          )
        )
      )
    ),

    React.createElement(
      "div",
      { className: "carousel-controls" },
      React.createElement(
        "button",
        { className: "carousel-prev", onClick: goPrev },
        "←"
      ),
      React.createElement(
        "div",
        { className: "carousel-dots" },
        elements.map((_, i) =>
          React.createElement("span", {
            key: i,
            className: `dot ${i === current ? "is-active" : ""}`,
            onClick: () => setCurrent(i),
          })
        )
      ),
      React.createElement(
        "button",
        { className: "carousel-next", onClick: goNext },
        "→"
      )
    )
  );
}

const elements = [
  {
    id: "kasa",
    title: "Kasa — Étude de cas React & architecture SPA",
    description: "Refonte en React d’une plateforme de location immobilière.",
    tags: ["React", "SPA", "Router"],
    link: "kasa.html",
    imageSrc: "./assets/images/kasa/acceuil.png",
    imageAlt: "Projet Kasa",
  },
  {
    id: "ohmyfood",
    title: "Ohmyfood — HTML & CSS",
    description: "Intégration mobile-first avec animations CSS.",
    tags: ["HTML", "CSS", "Animations"],
    link: "ohmyfood.html",
    imageSrc: "./assets/images/ohmyfood/accueil.png",
    imageAlt: "Projet Ohmyfood",
  },
  {
    id: "sophie-bluel",
    title: "Sophie Bluel — JavaScript & API",
    description: "Portfolio dynamique avec API REST.",
    tags: ["JavaScript", "API", "CRUD"],
    link: "sophie-bluel.html",
    imageSrc: "./assets/images/sophie_bluel/screencapture.png",
    imageAlt: "Projet Sophie Bluel",
  },
];

const mountNode = document.getElementById("root-carousel");
if (mountNode) {
  createRoot(mountNode).render(React.createElement(Carousel, { elements }));
}
