/* ------------------------------------ */
/* Pharloom Encyclopedia - area-page.js */
/* Author: Kole Fiala                   */
/* ------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("area-name-header");
  const contentContainer = document.getElementById("area-content-container");
  const title = document.querySelector("title");

  // Get area name from URL query parameter (e.g., ?name=bellheart)
  const params = new URLSearchParams(window.location.search);
  const areaQueryName = params.get("name");

  if (!areaQueryName) {
    contentContainer.innerHTML = "<p>No area specified.</p>";
    return;
  }

  try {
    // Find the area by matching the query name
    const area = areaData.areas.find(
      (a) => a.name.toLowerCase().replace(/ /g, "") === areaQueryName
    );

    if (!area) {
      contentContainer.innerHTML = `<p>Area "${areaQueryName}" not found.</p>`;
      return;
    }

    // Update page title and header
    title.textContent = `Pharloom Encyclopedia :: Areas :: ${area.name}`;
    header.textContent = area.name;

    // --- Create and populate the content ---
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
    // Correctly construct the relative path from the template's location
    img.src = `../../${area.image.substring(3)}`;
    img.alt = area.name;
    parallaxContainer.appendChild(img);
    imageContainer.appendChild(parallaxContainer);

    // If the area has music, create the audio player
    if (area.music) {
      const audioPlayerContainer = document.createElement("div");
      audioPlayerContainer.className = "audio-player-container";

      const themeName = document.createElement("p");
      themeName.className = "theme-name";
      const trackName = area.theme || area.name;
      themeName.textContent = `Theme: "${trackName}"`;
      audioPlayerContainer.appendChild(themeName);

      const audio = new Audio(`../../${area.music.substring(3)}`);
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

      audio.addEventListener("timeupdate", () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
      });

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
      <h3>Information</h3>
      <p>${area.information || "No information available."}</p>
      <h3>Description</h3>
      <p>${area.description || "No description available."}</p>
    `;

    bodyDiv.append(imageContainer, infoDiv);
    entryDiv.appendChild(bodyDiv);
    contentContainer.appendChild(entryDiv);
  } catch (error) {
    console.error("Error loading area page data:", error);
    contentContainer.innerHTML =
      "<p>Error loading area information. Please try again later.</p>";
  }
});
