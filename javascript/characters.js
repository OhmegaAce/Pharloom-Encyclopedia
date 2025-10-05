document.addEventListener("DOMContentLoaded", () => {
  // This function will run once the main logic is ready to execute.
  const initializePage = () => {
    // Data is now guaranteed to be loaded.
    displayCharacters("merchants", "merchants-container");
    displayCharacters("wanderers", "wanderers-container");
    displayCharacters("questNpcs", "quest-npcs-container");
    displayCharacters("miscellaneous", "miscellaneous-container");
  };

  // --- Core Functions ---

  /**
   * Displays characters of a specific category in a given container.
   */
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

  /**
   * Creates an HTML anchor element (a card) for a single character.
   */
  const createCharacterEntry = (character, category) => {
    // Create a URL-friendly name
    const characterQueryName = character.name.toLowerCase().replace(/ /g, "");
    const characterLink = `templates/character-template.html?category=${category}&name=${characterQueryName}`;

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

  // --- Initialization Logic ---

  // Check if the data is already available (it might be if the script loaded fast).
  if (typeof characterData !== "undefined") {
    initializePage();
  } else {
    // If data isn't ready, find the script tag for character-data.js and wait for it to load.
    const dataScript = document.querySelector(
      'script[src*="character-data.js"]'
    );
    if (dataScript) {
      dataScript.addEventListener("load", initializePage);
    } else {
      console.error("Could not find the character-data.js script tag.");
    }
  }
});
