export function hoverBioInfoHandler(logoId, leftAvatarId, rightAvatarId) {
  const logo = document.getElementById(logoId);
  const leftAvatar = document.getElementById(leftAvatarId);
  const rightAvatar = document.getElementById(rightAvatarId);

  const resetAnimation = (element) => {
    element.style.animation = "none"; // Reset the animation
    element.offsetHeight; // Trigger a reflow to restart the animation
    element.style.animation = ""; // Clear the inline animation style
  };

  logo.addEventListener("mouseover", () => {
    resetAnimation(leftAvatar);
    leftAvatar.classList.remove("hidden");
    leftAvatar.style.animation = "slideInRight 0.5s ease-in-out forwards";

    resetAnimation(rightAvatar);
    rightAvatar.classList.remove("hidden");
    rightAvatar.style.animation = "slideInLeft 0.5s ease-in-out forwards";
  });

  logo.addEventListener("mouseout", () => {
    resetAnimation(leftAvatar);
    leftAvatar.classList.add("hidden");
    leftAvatar.style.animation = "slideInRight 0.5s ease-in-out reverse";

    resetAnimation(rightAvatar);
    rightAvatar.classList.add("hidden");
    rightAvatar.style.animation = "slideInLeft 0.5s ease-in-out reverse";
  });
}
