document.addEventListener("DOMContentLoaded", async () => {
  const bossContainer = document.getElementById("boss-container");

  try {
    // Fetch the JSON data
    const response = await fetch("/json/bosses.json");
    const data = await response.json();

    // Clear the loading message
    bossContainer.innerHTML = "";

    // Check if we have bosses
    if (!data.bosses || data.bosses.length === 0) {
      bossContainer.innerHTML = "<p>No boss data available.</p>";
      return;
    }

    // Create HTML for each boss
    data.bosses.forEach((boss) => {
      // Create a URL-friendly name (e.g., "Bell Beast" -> "bellbeast")
      const bossPageName = boss.name.toLowerCase().replace(/ /g, "");
      const bossLink = `/html/Bosses/${bossPageName}.html`;

      const bossCard = document.createElement("a");
      bossCard.className = "boss-card";
      bossCard.href = bossLink;

      bossCard.innerHTML = `
        <div class="boss-info">
          ${
            boss.image
              ? `<div class="parallax-container">
                   <img src="${boss.image}" alt="${boss.name}">
                 </div>`
              : ""
          }
          <div class="boss-details">
            <h3>${boss.name}</h3>
            <p><strong>Location:</strong> ${boss.location}</p>
            <p><strong>Health:</strong> ${boss.health || "N/A"}</p>
            <p><strong>Phases:</strong> ${boss.phases || "N/A"}</p>
          </div>
        </div>
      `;

      bossContainer.appendChild(bossCard);
    });
  } catch (error) {
    console.error("Error loading boss data:", error);
    bossContainer.innerHTML = "<p>Error loading boss information.</p>";
  }
});
