import { applyGoingDarkAnimation } from "./src/goingdark.js";
import { getOriginalStyles, applyColors } from "./src/styles.js";
import tombolCSS from "./src/tombol.js";

class BravoSix {
  constructor(targetElement) {
    this.targetElement = targetElement || document.body;
    this.originalStyles = getOriginalStyles(this.targetElement);
    this.applyButtonStyle();
  }

  applyButtonStyle() {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = tombolCSS;
    this.targetElement.appendChild(styleElement);
  }

  applyColors(colorTheme) {
    applyColors(this.targetElement, colorTheme);
  }

  goingDark(duration) {
    applyGoingDarkAnimation(this.targetElement, duration);
  }
}

export default BravoSix;
