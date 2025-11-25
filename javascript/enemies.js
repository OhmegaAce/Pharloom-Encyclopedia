/* ---------------------------------- */
/* Pharloom Encyclopedia - enemies.js */
/* Author: Kole Fiala                 */
/* ---------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const enemyContainer = document.getElementById("enemy-container");

  if (!enemyContainer) {
    console.error("Enemy container not found.");
    return;
  }

  const displayEnemies = () => {
    if (
      typeof enemyData === "undefined" ||
      !enemyData.enemies ||
      enemyData.enemies.length === 0
    ) {
      enemyContainer.innerHTML = "<p>No enemy data available.</p>";
      return;
    }

    // Clear the loading message
    enemyContainer.innerHTML = "";

    // Create HTML for each enemy
    enemyData.enemies.forEach((enemy, index) => {
      const enemyCard = document.createElement("a");
      enemyCard.className = "character-link-card"; // Reusing the character card style
      // This makes the card a clickable link to a future enemy detail page.
      enemyCard.href = `templates/enemy-template.html?name=${enemy.name.toLowerCase().replace(/ /g, "")}`;

      enemyCard.innerHTML = `
        <div class="parallax-container">
            <img src="${enemy.thumbnail}" alt="${enemy.name}">
        </div>
        <span class="character-link-name">${enemy.name}</span>
      `;

      enemyContainer.appendChild(enemyCard);

      // Stagger the fade-in animation for each card
      setTimeout(() => {
        enemyCard.classList.add("visible");
      }, index * 50); // 50ms delay between each card
    });
  };

  // Check if enemyData is loaded and then display
  if (typeof enemyData !== "undefined") {
    displayEnemies();
  } else {
    // Fallback for if the data script loads after this one
    const dataScript = document.querySelector('script[src*="enemy-data.js"]');
    if (dataScript) {
      dataScript.addEventListener("load", displayEnemies);
    } else {
      console.error("Could not find the enemy-data.js script tag.");
      enemyContainer.innerHTML = "<p>Error loading enemy data script.</p>";
    }
  }
});