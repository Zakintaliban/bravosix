import { applyGoingDarkAnimation } from "./src/goingdark.js";
import { getOriginalStyles, applyColors } from "./src/styles.js";

class BravoSix {
  constructor(targetElement) {
    this.targetElement = targetElement || document.body;
    this.originalStyles = getOriginalStyles(this.targetElement);
  }

  applyColors(colorTheme) {
    applyColors(this.targetElement, colorTheme);
  }

  goingDark(duration) {
    applyGoingDarkAnimation(this.targetElement, duration);
  }
}

export default BravoSix;
