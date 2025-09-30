// -----------------------------
// Adjustable parameters
// -----------------------------
const IMG_TILT_STRENGTH = 40; // max degrees for image rotation
const NAV_TILT_STRENGTH = 15; // max degrees for nav button rotation
const IMG_HOVER_SCALE = 1.25; // image scale on hover
const NAV_HOVER_SCALE = 1.1; // nav button scale on hover

// -----------------------------
// Parallax effect
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  let lastHoveredEl = null;

  document.body.addEventListener("mousemove", (e) => {
    // Find the closest element with a parallax effect
    const targetEl = e.target.closest(".parallax-container, .parallax-nav");

    // If we are over a parallax element
    if (targetEl) {
      const isNav = targetEl.classList.contains("parallax-nav");
      const elementToTransform = isNav
        ? targetEl
        : targetEl.querySelector("img");

      if (!elementToTransform) return;

      const { left, top, width, height } = targetEl.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Determine strength and scale based on the element type
      const tiltStrength = isNav ? NAV_TILT_STRENGTH : IMG_TILT_STRENGTH;
      const hoverScale = isNav ? NAV_HOVER_SCALE : IMG_HOVER_SCALE;

      // normalize mouse position (-0.5 to 0.5)
      const rotateX = (y / height - 0.5) * -tiltStrength;
      const rotateY = (x / width - 0.5) * tiltStrength;

      elementToTransform.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${hoverScale})`;
      elementToTransform.style.transition = "transform 0.1s ease-out"; // Smoother follow
      lastHoveredEl = targetEl;
    } else if (lastHoveredEl) {
      // If we've moved off the last hovered element, reset it
      const isNav = lastHoveredEl.classList.contains("parallax-nav");
      const elementToReset = isNav
        ? lastHoveredEl
        : lastHoveredEl.querySelector("img");

      if (elementToReset) {
        elementToReset.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
        elementToReset.style.transition = "transform 0.3s ease-in-out"; // Slower reset
      }
      lastHoveredEl = null;
    }
  });
});
