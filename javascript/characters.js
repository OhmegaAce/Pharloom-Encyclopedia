document.addEventListener("DOMContentLoaded", async () => {
  // Get the container elements for each character type
  const merchantContainer = document.querySelector(".merchant-section-body");
  const wandererContainer = document.querySelector(".wanderer-section-body");
  const questNpcContainer = document.querySelector(".questnpc-section-body");
  const miscContainer = document.querySelector(".miscellaneous-section-body");

  // Helper function to create and append character HTML
  const createCharacterHTML = (character, container, index) => {
    const characterDiv = document.createElement("div");

    // Create a URL-friendly class name from the character's name
    const className = character.name.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Add a general class for styling, plus the specific character name class
    characterDiv.className = `character-entry ${className}`;

    characterDiv.innerHTML = `
      <div class="character-body" style="display: flex; align-items: flex-start; gap: 20px; ${
        index % 2 !== 0 ? "flex-direction: row-reverse;" : ""
      }">
        <div class="parallax-container">
          <img src="${character.image}" alt="${character.name}">
        </div>
        <div class="information">
          <h2>${character.name}</h2>
          <p>${character.description}</p>
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
    `;
    container.appendChild(characterDiv);
  };

  try {
    const response = await fetch("../json/characters.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Clear the loading messages before populating
    merchantContainer.innerHTML = "";
    wandererContainer.innerHTML = "";
    questNpcContainer.innerHTML = "";
    miscContainer.innerHTML = "";

    // Populate each section
    data.merchants.forEach((char, index) =>
      createCharacterHTML(char, merchantContainer, index)
    );
    data.wanderers.forEach((char, index) =>
      createCharacterHTML(char, wandererContainer, index)
    );
    data.questNpcs.forEach((char, index) =>
      createCharacterHTML(char, questNpcContainer, index)
    );
    data.miscellaneous.forEach((char, index) =>
      createCharacterHTML(char, miscContainer, index)
    );
  } catch (error) {
    console.error("Error loading character data:", error);
    const errorMessage =
      "<p>Error loading character information. Please try again later.</p>";
    merchantContainer.innerHTML = errorMessage;
    wandererContainer.innerHTML = errorMessage;
    questNpcContainer.innerHTML = errorMessage;
    miscContainer.innerHTML = errorMessage;
  }
});
