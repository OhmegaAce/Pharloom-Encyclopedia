document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector("nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      // Toggle a class on the body to control menu state
      document.body.classList.toggle("nav-open");

      // Toggle the aria-expanded attribute for accessibility
      const isExpanded = document.body.classList.contains("nav-open");
      menuToggle.setAttribute("aria-expanded", isExpanded);
    });
  }
});
