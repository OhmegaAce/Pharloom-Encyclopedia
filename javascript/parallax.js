// -----------------------------
// Adjustable parameters
// -----------------------------
const TILT_STRENGTH = 40; // max degrees for X and Y rotation
const HOVER_SCALE = 1.25; // image scale on hover

// -----------------------------
// Parallax effect
// -----------------------------
const containers = document.querySelectorAll(".parallax-container");

containers.forEach((container) => {
  const img = container.querySelector("img");

  container.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // normalize mouse position (-0.5 to 0.5)
    const rotateX = (y / height - 0.5) * -TILT_STRENGTH;
    const rotateY = (x / width - 0.5) * TILT_STRENGTH;

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${HOVER_SCALE})`;
  });

  container.addEventListener("mouseleave", () => {
    img.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
});
