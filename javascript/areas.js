document.addEventListener("DOMContentLoaded", async () => {
  const areaContainer = document.getElementById("area-content-container");

  if (!areaContainer) {
    console.error("Area container not found!");
    return;
  }

  if (
    typeof areaData === "undefined" ||
    !areaData.areas ||
    areaData.areas.length === 0
  ) {
    areaContainer.innerHTML = "<p>No area data available.</p>";
    return;
  }

  // Clear the loading message and prepare for grid
  areaContainer.innerHTML = `<h2>Areas</h2>`; // Keep the heading
  const grid = document.createElement("div");
  grid.className = "area-grid"; // New class for the grid
  areaContainer.appendChild(grid);

  // Create HTML for each area
  areaData.areas.forEach((area) => {
    // Create a URL-friendly name for the query parameter
    const areaQueryName = area.name.toLowerCase().replace(/ /g, "");
    const areaLink = `templates/area-template.html?name=${areaQueryName}`;

    const areaLinkCard = document.createElement("a");
    areaLinkCard.className = "area-link-card"; // Use a new class for styling links
    areaLinkCard.href = areaLink;

    areaLinkCard.innerHTML = `
        <div class="parallax-container">
            <img src="${area.image}" alt="${area.name}">
        </div>
        <span class="area-name">${area.name}</span>
      `;
    grid.appendChild(areaLinkCard);
  });
});
