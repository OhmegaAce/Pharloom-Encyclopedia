// -----------------------------
// Adjustable parameters
// -----------------------------
const TILT_STRENGTH = 40; // max degrees for X and Y rotation
const HOVER_SCALE = 1.25; // image scale on hover

// -----------------------------
// Parallax effect
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  let lastHoveredContainer = null;

  document.body.addEventListener("mousemove", (e) => {
    // Find the closest parallax container to the mouse cursor
    const container = e.target.closest(".parallax-container");

    // If we are over a parallax container
    if (container) {
      const img = container.querySelector("img");
      if (!img) return;

      const { left, top, width, height } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      // normalize mouse position (-0.5 to 0.5)
      const rotateX = (y / height - 0.5) * -TILT_STRENGTH;
      const rotateY = (x / width - 0.5) * TILT_STRENGTH;

      img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${HOVER_SCALE})`;
      lastHoveredContainer = container;
    } else if (lastHoveredContainer) {
      // If we've moved off the last hovered container, reset its image
      const img = lastHoveredContainer.querySelector("img");
      if (img) {
        img.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      }
      lastHoveredContainer = null;
    }
  });
});
