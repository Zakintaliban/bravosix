import { applyGoingDarkAnimation } from "./src/goingdark.js";
import { getOriginalStyles, applyColors } from "./src/styles.js";
import fs from "fs";

const tombolCSS = fs.readFileSync(__dirname + "/src/tombol.css", "utf8");
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
