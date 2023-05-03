const BravoSix = require("../index");

describe("BravoSix", () => {
  let bravoSix;
  let targetElement;

  beforeEach(() => {
    targetElement = document.createElement("div");
    bravoSix = new BravoSix(targetElement);
  });

  test("should set light color theme", () => {
    bravoSix.applyColors("light");
    expect(targetElement.style.backgroundColor).toBe("white");
    expect(targetElement.style.color).toBe("black");
  });

  test("should set dark color theme", () => {
    bravoSix.applyColors("dark");
    expect(targetElement.style.backgroundColor).toBe("black");
    expect(targetElement.style.color).toBe("white");
  });

  test("should set night-vision color theme", () => {
    bravoSix.applyColors("night-vision");
    expect(targetElement.style.backgroundColor).toBe("rgb(54, 121, 120)");
    expect(targetElement.style.color).toBe("white");
  });

  test("should not set invalid color theme", () => {
    const initialBackgroundColor = targetElement.style.backgroundColor;
    const initialTextColor = targetElement.style.color;

    bravoSix.applyColors("invalid-theme");

    expect(targetElement.style.backgroundColor).toBe(initialBackgroundColor);
    expect(targetElement.style.color).toBe(initialTextColor);
  });
});
