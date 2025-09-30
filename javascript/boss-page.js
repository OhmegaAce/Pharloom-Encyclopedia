document.addEventListener("DOMContentLoaded", async () => {
  const header = document.getElementById("boss-name-header");
  const contentContainer = document.getElementById("boss-content-container");
  const title = document.querySelector("title");

  // Get boss ID from URL query parameter (e.g., ?id=1)
  const params = new URLSearchParams(window.location.search);
  const bossId = params.get("id");

  if (!bossId) {
    contentContainer.innerHTML = "<p>No boss specified.</p>";
    return;
  }

  try {
    const response = await fetch("/json/bosses.json");
    const data = await response.json();

    // Find the boss by its ID
    const boss = data.bosses.find((b) => b.id == bossId);

    if (!boss) {
      contentContainer.innerHTML = `<p>Boss with ID ${bossId} not found.</p>`;
      return;
    }

    // Update page title and header
    title.textContent = `Pharloom Encyclopedia :: Enemies :: ${boss.name}`;
    header.textContent = boss.name;

    // Helper function to generate the 'Behaviour and Tactics' section
    const createTacticsHtml = (information) => {
      if (!information || !information["behavior and tactics"]) {
        return ""; // Return empty string if no tactics data
      }

      const tactics = information["behavior and tactics"];
      let html = `<div class="tactics-section">`;

      if (tactics.summary) {
        html += `<h3>Behaviour and Tactics</h3><p>${tactics.summary}</p>`;
      }

      if (tactics.phases && tactics.phases.length > 0) {
        tactics.phases.forEach((phase) => {
          html += `<div class="phase-section"><h4>${phase.name}</h4>`;
          if (phase.trigger) html += `<p><em>${phase.trigger}</em></p>`;
          if (phase.description) html += `<p>${phase.description}</p>`;

          if (phase.attacks && phase.attacks.length > 0) {
            html += `<ul class="attack-list">`;
            phase.attacks.forEach((attack) => {
              html += `<li class="attack-item"><strong>${attack.name}:</strong> ${attack.description}</li>`;
            });
            html += `</ul>`;
          }

          if (phase.notes)
            html += `<p class="phase-notes"><strong>Note:</strong> ${phase.notes}</p>`;
          html += `</div>`;
        });
      }

      if (tactics.strategy) {
        html += `<h4>Strategy</h4><p>${tactics.strategy}</p>`;
      }

      html += `</div>`;
      return html;
    };

    // Populate the content container with data from bosses.json
    contentContainer.innerHTML = `
       <div class="character-entry">
         <div class="character-body" style="display: flex; align-items: flex-start; gap: 20px;">
           <div class="parallax-container">
             <img src="${boss.image.replace("../", "/")}" alt="${boss.name}">
           </div>
           <div class="information">
             <p><strong>Location:</strong> ${boss.location}</p>
             <p><strong>Health:</strong> ${boss.health || "N/A"}</p>
             <p><strong>Phases:</strong> ${boss.phases || "N/A"}</p>
             ${createTacticsHtml(boss.information)}
           </div>
         </div>
       </div>
     `;
  } catch (error) {
    console.error("Error loading boss page data:", error);
    contentContainer.innerHTML =
      "<p>Error loading boss information. Please try again later.</p>";
  }
});
