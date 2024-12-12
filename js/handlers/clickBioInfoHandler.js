export function clickBioInfoHandler(logoContainerId, bioInfoId) {
    const logo = document.getElementById(logoContainerId);
    const bioInfo = document.getElementById(bioInfoId);
    console.log(bioInfo);

    logo.addEventListener("click", () => {
        logo.classList.toggle("logo_highlight");
        bioInfo.classList.toggle("hidden");
    });
}