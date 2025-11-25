/* --------------------------------------- */
/* Pharloom Encyclopedia - enemies-page.js */
/* Author: Kole Fiala                      */
/* --------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const enemyNameQuery = params.get("name");

  const enemyNameTitle = document.getElementById("enemy-name");
  const detailsContainer = document.getElementById("enemy-details-container");

  if (!enemyNameQuery) {
    detailsContainer.innerHTML = "<p>No enemy specified.</p>";
    return;
  }

  if (typeof enemyData === "undefined" || !enemyData.enemies) {
    detailsContainer.innerHTML = "<p>Enemy data is not available.</p>";
    return;
  }

  const enemy = enemyData.enemies.find(
    (e) => e.name.toLowerCase().replace(/ /g, "") === enemyNameQuery
  );

  if (enemy) {
    enemyNameTitle.textContent = enemy.name;
    document.title = `Pharloom Encyclopedia :: ${enemy.name}`; // Update page title

    // Format the drops information to handle ranges or single values
    let shardsText;
    if (Array.isArray(enemy.drops.shards)) {
      shardsText = `${enemy.drops.shards[0]} - ${enemy.drops.shards[1]}`;
    } else {
      shardsText = enemy.drops.shards;
    }

    let loreHTML = `
            <div class="character-body">
                <div class="image-audio-container">
                    <div class="parallax-container">
                        <img src="${
                          "../" +
                          (enemy.image || "../images/image-coming-soon.png")
                        }" alt="${enemy.name}" class="parallax-image">
                    </div>
                    <div class="enemy-stats">
                        <div class="stat-item">
                            <h4>Health</h4>
                            <p>${enemy.health}</p>
                        </div>
                        <div class="stat-item">
                            <h4>Drops</h4>
                            <p>
                                <img src="../../images/icons/shard.png" class="icon" alt="Shards"> ${shardsText}
                                <img src="../../images/icons/rosary.png" class="icon" alt="Rosary Beads"> ${
                                  enemy.drops.beads
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div class="information">
                    <h2>Lore</h2>
                    <h3>Hunter's Note</h3>
                    <p>${enemy.lore.huntersnote || "No notes available."}</p>
                    <h3>Hornet's Note</h3>
                    <p>${enemy.lore.hornetnote || "No notes available."}</p>
                </div>
            </div>
        `;
    detailsContainer.innerHTML = loreHTML;
  } else {
    enemyNameTitle.textContent = "Enemy Not Found";
    detailsContainer.innerHTML = `<p>Could not find details for an enemy named "${enemyNameQuery}".</p>`;
  }
});
