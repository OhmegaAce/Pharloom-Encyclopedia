document.addEventListener("DOMContentLoaded", async () => {
  const header = document.getElementById("character-name-header");
  const contentContainer = document.getElementById(
    "character-content-container"
  );
  const title = document.querySelector("title");

  // Get character category and name from URL query parameters
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const characterNameQuery = params.get("name");

  if (!category || !characterNameQuery) {
    contentContainer.innerHTML = "<p>No character specified.</p>";
    return;
  }

  try {
    const response = await fetch("/json/characters.json");
    const data = await response.json();

    // Find the character by category and URL-friendly name
    const character = data[category]?.find(
      (c) =>
        c.name.toLowerCase().replace(/ /g, "") ===
        characterNameQuery.toLowerCase()
    );

    if (!character) {
      contentContainer.innerHTML = `<p>Character not found: ${characterNameQuery}</p>`;
      return;
    }

    // Update page title and header
    title.textContent = `Pharloom Encyclopedia :: Characters :: ${character.name}`;
    header.textContent = character.name;

    // Populate the content container
    contentContainer.innerHTML = `
            <div class="character-entry">
                <div class="character-body" style="display: flex; align-items: flex-start; gap: 20px;">
                    <div class="parallax-container">
                        <img src="${character.image.replace("..", "")}" alt="${
      character.name
    }">
                    </div>
                    <div class="information">
                        <p><strong>Description:</strong> ${
                          character.description
                        }</p>
                        <hr style="border-color: rgba(255, 255, 255, 0.3); border-style: dashed;">
                        <h3>Background</h3>
                        ${
                          character.background.startsWith("<p>")
                            ? character.background
                            : `<p>${character.background}</p>`
                        }
                        <h3>In-Game Events</h3>
                        ${
                          character.events.startsWith("<p>")
                            ? character.events
                            : `<p>${character.events}</p>`
                        }
                    </div>
                </div>
            </div>
        `;

    // Re-initialize parallax for the newly added image
    const newParallaxContainer = contentContainer.querySelector(
      ".parallax-container"
    );
    if (newParallaxContainer) {
      // This part is a bit tricky as parallax.js runs on load.
      // For simplicity, we'll just log it. A more robust solution might involve a dedicated function in parallax.js.
      console.log(
        "Parallax effect should be re-initialized for the new image if it's not working automatically."
      );
    }
  } catch (error) {
    console.error("Error loading character page data:", error);
    contentContainer.innerHTML =
      "<p>Error loading character information. Please try again later.</p>";
  }
});
