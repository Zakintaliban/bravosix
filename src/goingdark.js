export function applyGoingDarkAnimation(targetElement, duration = 1000) {
  if (!document.getElementById("going-dark-styles")) {
    const style = document.createElement("style");
    style.id = "going-dark-styles";
    style.innerText = `
      .going-dark-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background-color: white;
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
        animation: going-dark-animation ${duration}ms forwards;
        z-index: -1;
      }

      @keyframes going-dark-animation {
        0% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(0);
        }
        50% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(1);
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Create overlay element
  const overlayElement = document.createElement("div");
  overlayElement.className = "going-dark-overlay";

  // Add overlay element to target element
  targetElement.appendChild(overlayElement);

  // Remove overlay element after animation
  setTimeout(() => {
    targetElement.removeChild(overlayElement);
  }, duration);
}
