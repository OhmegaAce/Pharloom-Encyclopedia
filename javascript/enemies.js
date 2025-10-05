document.addEventListener("DOMContentLoaded", () => {
  const enemyContainer = document.getElementById("enemy-container");

  if (!enemyContainer) {
    console.error("Enemy container not found!");
    return;
  }

  if (typeof enemyData === "undefined" || !enemyData.enemies) {
    enemyContainer.innerHTML = "<p>Enemy data is not available.</p>";
    console.error("enemyData is not defined or has no enemies property.");
    return;
  }

  // Clear the loading message
  enemyContainer.innerHTML = "";

  enemyData.enemies.forEach((enemy) => {
    // Only display enemies that have a name and a thumbnail
    if (enemy.name && enemy.thumbnail) {
      const enemyCard = createEnemyCard(enemy);
      enemyContainer.appendChild(enemyCard);
    }
  });

  function createEnemyCard(enemy) {
    const enemyQueryName = enemy.name.toLowerCase().replace(/ /g, "");
    const enemyLink = `templates/enemy-template.html?name=${enemyQueryName}`;

    const card = document.createElement("a");
    card.className = "character-link-card"; // Re-using existing style
    card.href = enemyLink;

    card.innerHTML = `
      <div class="parallax-container">
          <img src="${enemy.thumbnail}" alt="${enemy.name}" class="parallax-image">
      </div>
      <span class="character-link-name">${enemy.name}</span>
    `;
    return card;
  }
});
