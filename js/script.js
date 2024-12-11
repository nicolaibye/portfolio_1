import { introAnimationHandler } from "./handlers/introAnimationHandler.js";
import { hoverBioInfoHandler } from "./handlers/hoverBioInfo.js";
import { contactClick } from "./handlers/contactClick.js";
import { enterClick } from "./handlers/enterClick.js";

introAnimationHandler("intro-video", "logo", "logo-container");
contactClick("contact-container", "contact-icon", "contact-link");
enterClick("#contact-icon");

window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 896) {
    hoverBioInfoHandler("logo", "left-avatar", "right-avatar");
  }
});
