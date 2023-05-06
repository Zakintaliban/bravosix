export function applyGoingDarkAnimation(targetElement) {
  const animationStyle = document.createElement("style");
  animationStyle.innerHTML = `
    @keyframes going-dark {
      0% {
        opacity: 0;
        transform: scale(0);
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: scale(100);
        opacity: 0;
      }
    }

    .going-dark::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: white;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
      z-index: 1000;
      animation: going-dark 1.5s;
    }
  `;
  document.head.appendChild(animationStyle);

  targetElement.classList.add("going-dark");
  setTimeout(() => {
    targetElement.classList.remove("going-dark");
    document.head.removeChild(animationStyle);
  }, 1500);
}
