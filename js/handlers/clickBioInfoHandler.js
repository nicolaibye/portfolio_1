export function clickBioInfoHandler(logoContainerId, bioInfoId, containerId) {
  const logo = document.getElementById(logoContainerId);
  const bioInfo = document.getElementById(bioInfoId);
  const portfolio = document.getElementById(containerId);

  logo.addEventListener("click", () => {
    logo.classList.toggle("logo_highlight");

    if (bioInfo.classList.contains("active")) {
      bioInfo.classList.remove("active");
      setTimeout(() => {
        bioInfo.classList.add("hidden");
        portfolio.classList.remove("moved");
      }, 500);
    } else {
      console.log("Showing bio-info...");
      bioInfo.classList.remove("hidden");
      requestAnimationFrame(() => {
        bioInfo.classList.add("active");
        portfolio.classList.add("moved");
      });
    }
  });
}