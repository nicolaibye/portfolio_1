export function introAnimationHandler(videoId, logoId, logoContainerId) {
    const video = document.getElementById(videoId)
    const logo = document.getElementById(logoId)
    const logoContainer = document.getElementById(logoContainerId)

    video.addEventListener("ended", () => {
        video.style.display = "none";
        logoContainer.classList.remove("hidden");
        logoContainer.style.animation = "logoAnimation 2s ease-in-out forwards";
    });
}