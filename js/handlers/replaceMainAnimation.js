export function replaceMainAnimation(videoElementId, videoSourceId) {
    const videoSource = document.getElementById(videoSourceId);
    const videoElement = document.getElementById(videoElementId);

    document.addEventListener("DOMContentLoaded", () => {
        if  (window.innerWidth < 896) {
            videoSource.src  = "assets/vid/MainAnimationTablet_VP9_high.webm";
            videoElement.load();
        }
        if (window.innerWidth < 600) {
            videoSource.src = "assets/vid/MainAnimationMobile_VP9_high.webm";
            videoElement.load();
        }
    });
}