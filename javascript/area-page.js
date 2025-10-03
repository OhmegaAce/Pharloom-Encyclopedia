document.addEventListener("DOMContentLoaded", async () => {
  const header = document.getElementById("area-name-header");
  const contentContainer = document.getElementById("area-content-container");
  const title = document.querySelector("title");

  // Get area name from URL query parameter
  const params = new URLSearchParams(window.location.search);
  const areaNameQuery = params.get("name");

  if (!areaNameQuery) {
    contentContainer.innerHTML = "<p>No area specified.</p>";
    return;
  }

  try {
    // Load the data script dynamically
    const dataScript = document.createElement("script");
    dataScript.src = "../javascript/data/area-data.js";
    document.head.appendChild(dataScript);

    await new Promise((resolve, reject) => {
      dataScript.onload = resolve;
      dataScript.onerror = reject;
    });

    // Find the area by its URL-friendly name
    const area = areaData.areas.find(
      (a) => a.name.toLowerCase().replace(/ /g, "") === areaNameQuery
    );

    if (!area) {
      contentContainer.innerHTML = `<p>Area not found: ${areaNameQuery}</p>`;
      return;
    }

    // Update page title and header
    title.textContent = `Pharloom Encyclopedia :: Areas :: ${area.name}`;
    header.textContent = area.name;

    // --- Create and populate the content using DOM methods ---
    contentContainer.innerHTML = ""; // Clear loading message

    const entryDiv = document.createElement("div");
    entryDiv.className = "character-entry";

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-audio-container";

    const parallaxContainer = document.createElement("div");
    parallaxContainer.className = "parallax-container";
    const img = document.createElement("img");
    img.src = area.image;
    img.alt = area.name;
    parallaxContainer.appendChild(img);
    imageContainer.appendChild(parallaxContainer);

    // If the area has music, create the audio player
    if (area.music) {
      const audioPlayerContainer = document.createElement("div");
      audioPlayerContainer.className = "audio-player-container";

      const themeName = document.createElement("p");
      themeName.className = "theme-name";
      themeName.textContent = `Theme: "${area.theme || area.name}"`;
      audioPlayerContainer.appendChild(themeName);

      const audio = new Audio(area.music);
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
        progressBar.style.width = `${
          (audio.currentTime / audio.duration) * 100
        }%`;
      });

      progressBarContainer.addEventListener("click", (e) => {
        audio.currentTime =
          (e.offsetX / progressBarContainer.clientWidth) * audio.duration;
      });

      audioPlayerContainer.append(playButton, progressBarContainer);
      imageContainer.appendChild(audioPlayerContainer);
    }

    const infoDiv = document.createElement("div");
    infoDiv.className = "information";

    // Build the information HTML string, including all available data
    let infoHtml = "";
    if (
      area.information &&
      area.information.toLowerCase() !== "missing information"
    ) {
      infoHtml += `<h3>Information</h3><p>${area.information}</p>`;
    }
    if (
      area.description &&
      area.description.toLowerCase() !== "missing information"
    ) {
      // Add a separator if there was already information
      if (infoHtml) {
        infoHtml += `<hr style="border-color: rgba(255, 255, 255, 0.3); border-style: dashed; margin: 20px 0;">`;
      }
      infoHtml += `<h3>Description</h3><p>${area.description}</p>`;
    }

    infoDiv.innerHTML =
      infoHtml || "<p>No detailed information available for this area.</p>";

    entryDiv.append(imageContainer, infoDiv);
    contentContainer.appendChild(entryDiv);
  } catch (error) {
    console.error("Error loading area page data:", error);
    contentContainer.innerHTML = "<p>Error loading area information.</p>";
  }
});
