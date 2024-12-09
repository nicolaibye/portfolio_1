import { introAnimationHandler } from "./handlers/introAnimationHandler.js";
import { hoverBioInfoHandler } from "./handlers/hoverBioInfo.js";

introAnimationHandler("intro-video", "logo", "logo-container");
hoverBioInfoHandler("logo-container", "left-avatar", "right-avatar");
