export function introAnimationHandler(videoId, logoContainerId) {
    const video = document.getElementById(videoId)
    const logoContainer = document.getElementById(logoContainerId)

    video.addEventListener("ended", () => {
        video.style.display = "none";
        logoContainer.classList.remove("hidden");
        logoContainer.style.animation = "logoAnimation 1.5s ease-in-out forwards";
    });
}