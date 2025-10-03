document.addEventListener("DOMContentLoaded", async () => {
  // Function to display characters in a given container
  const displayCharacters = (category, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id ${containerId} not found.`);
      return;
    }

    try {
      const characters = characterData[category];
      if (!characters || characters.length === 0) {
        container.innerHTML = "<p>No characters found in this category.</p>";
        return;
      }

      // Clear loading message
      container.innerHTML = "";

      characters.forEach((character) => {
        container.appendChild(createCharacterEntry(character, category));
      });
    } catch (error) {
      console.error(`Error loading ${category} data:`, error);
      container.innerHTML = "<p>Error loading character information.</p>";
    }
  };

  // Function to create character link cards
  const createCharacterEntry = (character, category) => {
    // Create a URL-friendly name
    const characterQueryName = character.name.toLowerCase().replace(/ /g, "");
    const characterLink = `character-template.html?category=${category}&name=${characterQueryName}`;

    const entry = document.createElement("a");
    entry.className = "character-link-card";
    entry.href = characterLink;

    entry.innerHTML = `
      <div class="parallax-container">
          <img src="${character.image}" alt="${character.name}">
      </div>
      <span class="character-link-name">${character.name}</span>
    `;
    return entry;
  };

  // --- Load data script and then render all categories ---
  try {
    // Load the data script dynamically
    const dataScript = document.createElement("script");
    dataScript.src = "../javascript/data/character-data.js";
    document.head.appendChild(dataScript);

    // Wait for the script to load before proceeding
    await new Promise((resolve, reject) => {
      dataScript.onload = resolve;
      dataScript.onerror = reject;
    });

    // Now that data is loaded, display all character categories
    displayCharacters("merchants", "merchants-container");
    displayCharacters("wanderers", "wanderers-container");
    displayCharacters("questNpcs", "quest-npcs-container");
    displayCharacters("miscellaneous", "miscellaneous-container");
  } catch (error) {
    console.error("Failed to load character data script:", error);
    // You could display an error message on the page here if you wanted
  }
});
