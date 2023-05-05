import "./goingdark.css";

export function applyGoingDarkAnimation(targetElement) {
  targetElement.classList.add("going-dark");
  setTimeout(() => {
    targetElement.classList.remove("going-dark");
  }, 1500);
}
