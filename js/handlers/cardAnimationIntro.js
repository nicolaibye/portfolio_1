export function cardAnimationIntro(container) {
    const cardContainer = document.getElementById(container);

    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            cardContainer.style.animation = "slideInBottom 1.5s ease-in-out forwards";
        }, 11300);
    });
}