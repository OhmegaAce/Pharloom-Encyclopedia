document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector("nav");
  // const searchInput = document.getElementById("nav-search"); // Example search input

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      // Toggle a class on the body to control menu state
      document.body.classList.toggle("nav-open");

      // Toggle the aria-expanded attribute for accessibility
      const isExpanded = document.body.classList.contains("nav-open");
      menuToggle.setAttribute("aria-expanded", isExpanded);
    });
  }

  // if (searchInput) {
  //   searchInput.addEventListener("input", (e) => {
  //     const query = e.target.value;
  //     // Add logic here to search through your data objects and display results
  //   });
  // }

  // --- Back to Top Button Logic ---
  const backToTopButton = document.getElementById("back-to-top-btn");

  if (backToTopButton) {
    // Show or hide the button based on scroll position
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document smoothly
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
