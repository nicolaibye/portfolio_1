import { introAnimationHandler } from "./handlers/introAnimationHandler.js";
import { hoverBioInfoHandler } from "./handlers/hoverBioInfo.js";
import { contactClick } from "./handlers/contactClick.js";

introAnimationHandler("intro-video", "logo", "logo-container");
hoverBioInfoHandler("logo", "left-avatar", "right-avatar");
contactClick("contact-container", "contact-icon", "contact-link");