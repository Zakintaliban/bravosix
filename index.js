import { getOriginalStyles, applyColors } from "./src/styles.js";
import { applyGoingDarkAnimation } from "./src/goingdark";
class BravoSix {
  constructor(targetElement) {
    this.targetElement = targetElement || document.body;
  }

  getOriginalStyles() {
    return getOriginalStyles(this.targetElement);
  }

  applyColors(colorTheme) {
    applyColors(this.targetElement, colorTheme);
  }

  goingDark() {
    applyGoingDarkAnimation(this.targetElement);
  }
}

export default BravoSix;
