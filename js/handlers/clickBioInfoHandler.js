export function clickBioInfoHandler(logoContainerId, bioInfoId, containerId, wrapperId) {
  const logo = document.getElementById(logoContainerId);
  const bioInfo = document.getElementById(bioInfoId);
  const portfolio = document.getElementById(containerId);
  const wrapper = document.getElementById(wrapperId);

  logo.addEventListener("click", () => {
    logo.classList.toggle("logo_highlight");

    if (bioInfo.classList.contains("active")) {
      bioInfo.classList.remove("active");
      wrapper.style.pointerEvents = "auto";
      setTimeout(() => {
        bioInfo.classList.add("hidden");
        portfolio.classList.remove("moved");
      }, 500);
    } else {
      bioInfo.classList.remove("hidden");
      wrapper.style.pointerEvents = "none";
      requestAnimationFrame(() => {
        bioInfo.classList.add("active");
        portfolio.classList.add("moved");
      });
    }
  });
}