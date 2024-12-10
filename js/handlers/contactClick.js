export function contactClick(container, svg, a) {
  const contactIcon = document.getElementById(svg);
  const contactLink = document.getElementById(a);

  document.addEventListener("DOMContentLoaded", () => {
    const contactContainer = document.getElementById(container);

    setTimeout(() => {
      contactContainer.classList.remove("hidden");
      contactContainer.style.animation = "slideInRight 0.5s ease-in-out forwards";
    }, 11000);

    contactIcon.addEventListener("click", () => {
      contactLink.classList.toggle("hidden");
    });
  });
}
