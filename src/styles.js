export function getOriginalStyles(targetElement) {
  return {
    backgroundColor: targetElement.style.backgroundColor,
    color: targetElement.style.color,
  };
}

export function applyColors(targetElement, colorTheme) {
  let backgroundColor, textColor;

  switch (colorTheme) {
    case "original":
      backgroundColor = "";
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

  targetElement.style.backgroundColor = backgroundColor;
  targetElement.style.color = textColor;
}
