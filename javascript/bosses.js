document.addEventListener("DOMContentLoaded", async () => {
  const bossContainer = document.getElementById("boss-container");

  try {
    // Fetch the JSON data

    // Clear the loading message
    bossContainer.innerHTML = "";

    // Check if we have bosses
    if (
      typeof bossData === "undefined" ||
      !bossData.bosses ||
      bossData.bosses.length === 0
    ) {
      bossContainer.innerHTML = "<p>No boss data available.</p>";
      return;
    }

    // Create HTML for each boss
    bossData.bosses.forEach((boss) => {
      // Use the unique ID for the link
      const bossLink = `boss-template.html?id=${boss.id}`;

      const bossLinkCard = document.createElement("a");
      bossLinkCard.className = "boss-link-card"; // New class for grid layout
      bossLinkCard.href = bossLink;

      bossLinkCard.innerHTML = `
        <div class="parallax-container">
            <img src="${boss.image}" alt="${boss.name}">
        </div>
        <span class="boss-link-name">${boss.name}</span>
      `;

      bossContainer.appendChild(bossLinkCard);
    });
  } catch (error) {
    console.error("Error loading boss data:", error);
    bossContainer.innerHTML = "<p>Error loading boss information.</p>";
  }
});
