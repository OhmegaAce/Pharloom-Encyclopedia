document.addEventListener("DOMContentLoaded", () => {
  // List of all section prefixes that need the folding functionality.
  const sectionNames = ["merchant", "wanderer", "questnpc", "miscellaneous"];

  // Loop through each section name and set up the toggle.
  sectionNames.forEach((name) => {
    const section = document.querySelector(`.${name}-section`);
    const toggle = section?.querySelector(`.${name}-toggle`);

    // Add the click listener only if both the section and toggle exist.
    toggle?.addEventListener("click", () => {
      section.classList.toggle("active");
    });
  });
});
