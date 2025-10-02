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
    // Find the boss by its ID
    const boss = bossData.bosses.find((b) => b.id == bossId);

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

    // --- Create and populate the content using DOM methods for better security and structure ---
    contentContainer.innerHTML = ""; // Clear any previous content

    const entryDiv = document.createElement("div");
    entryDiv.className = "character-entry";

    const bodyDiv = document.createElement("div");
    bodyDiv.className = "character-body";

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-audio-container";

    const parallaxContainer = document.createElement("div");
    parallaxContainer.className = "parallax-container";
    const img = document.createElement("img");
    img.src = boss.image;
    img.alt = boss.name;
    parallaxContainer.appendChild(img);
    imageContainer.appendChild(parallaxContainer);

    // If the boss has music, create the audio player and button
    if (boss.music) {
      const audioPlayerContainer = document.createElement("div");
      audioPlayerContainer.className = "audio-player-container";

      const themeName = document.createElement("p");
      themeName.className = "theme-name";
      // Use the specific theme name if available, otherwise default to the boss's name
      const trackName = boss.theme || boss.name;
      themeName.textContent = `Theme: "${trackName}"`;
      audioPlayerContainer.appendChild(themeName);

      const audio = new Audio(boss.music);
      audio.loop = true;

      const playButton = document.createElement("button");
      playButton.className = "play-button";
      playButton.textContent = "▶ Play Theme";

      playButton.addEventListener("click", () => {
        if (audio.paused) {
          audio.play();
          playButton.textContent = "❚❚ Pause Theme";
        } else {
          audio.pause();
          playButton.textContent = "▶ Play Theme";
        }
      });

      const progressBarContainer = document.createElement("div");
      progressBarContainer.className = "progress-bar-container";

      const progressBar = document.createElement("div");
      progressBar.className = "progress-bar";
      progressBarContainer.appendChild(progressBar);

      // Update progress bar as music plays
      audio.addEventListener("timeupdate", () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
      });

      // Allow seeking by clicking on the progress bar
      progressBarContainer.addEventListener("click", (e) => {
        const width = progressBarContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
      });

      audioPlayerContainer.appendChild(playButton);
      audioPlayerContainer.appendChild(progressBarContainer);
      imageContainer.appendChild(audioPlayerContainer);
    }

    const infoDiv = document.createElement("div");
    infoDiv.className = "information";
    infoDiv.innerHTML = `
      <p><strong>Location:</strong> ${boss.location}</p>
      <p><strong>Health:</strong> ${boss.health || "N/A"}</p>
      <p><strong>Phases:</strong> ${boss.phases || "N/A"}</p>
      ${createTacticsHtml(boss.information)}
    `;

    bodyDiv.append(imageContainer, infoDiv);
    entryDiv.appendChild(bodyDiv);
    contentContainer.appendChild(entryDiv);
  } catch (error) {
    console.error("Error loading boss page data:", error);
    contentContainer.innerHTML =
      "<p>Error loading boss information. Please try again later.</p>";
  }
});
