import { applyGoingDarkAnimation } from "./src/goingdark.js";
import { getOriginalStyles, applyColors } from "./src/styles.js";
import tombolCSS from "./src/tombol.js"; // Import tombolCSS as a string
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

export { BravoSix, tombolCSS };
