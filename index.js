class BravoSix {
  constructor(targetElement) {
    this.targetElement = targetElement || document.body;
  }

  getOriginalStyles() {
    return {
      backgroundColor: this.targetElement.style.backgroundColor,
      color: this.targetElement.style.color,
    };
  }

  applyColors(colorTheme) {
    console.log("Applying color theme:", colorTheme);
    let backgroundColor, textColor;

    switch (colorTheme) {
      case "original":
        backgroundColor = ""; // Kosongkan nilai untuk kembali ke nilai CSS awal
        textColor = "";
        break;
      case "dark":
        backgroundColor = "black";
        textColor = "white";
        break;
      case "light":
        backgroundColor = "white";
        textColor = "black";
        break;
      case "night-vision":
        backgroundColor = "#367978";
        textColor = "white";
        break;
      default:
        console.error("Invalid color theme");
        return;
    }

    this.targetElement.style.backgroundColor = backgroundColor;
    this.targetElement.style.color = textColor;
  }
}

module.exports = BravoSix;
