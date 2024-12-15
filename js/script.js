import { introAnimationHandler } from "./handlers/introAnimationHandler.js";
import { hoverBioInfoHandler } from "./handlers/hoverBioInfo.js";
import { contactClick } from "./handlers/contactClick.js";
import { enterClick } from "./handlers/enterClick.js";
import { cardAnimationIntro } from "./handlers/cardAnimationIntro.js";
import { myTimeBio } from "./handlers/myTimeBio.js";
import { clickBioInfoHandler } from "./handlers/clickBioInfoHandler.js";
import { replaceMainAnimation } from "./handlers/replaceMainAnimation.js";

introAnimationHandler("intro-video", "logo-container");
contactClick("contact-container", "contact-icon", "contact-link");
enterClick("#contact-icon");
cardAnimationIntro("portfolio-wrapper");
myTimeBio("timer");
replaceMainAnimation("intro-video", "intro-video-source");

window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 896) {
    clickBioInfoHandler("logo", "bio-info-mobile", "portfolio");
    myTimeBio("timer-small");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 896) {
    hoverBioInfoHandler("logo", "left-avatar", "right-avatar");
  }
});
