document.addEventListener("DOMContentLoaded", async () => {
  // Load the data script dynamically
  const dataScript = document.createElement("script");
  dataScript.src = "../javascript/data/character-data.js";
  document.head.appendChild(dataScript);

  // Function to display characters in a given container
  const displayCharacters = async (category, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id ${containerId} not found.`);
      return;
    }
    await new Promise((resolve) => (dataScript.onload = resolve));

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

  // Load all character categories
  displayCharacters("merchants", "merchants-container");
  displayCharacters("wanderers", "wanderers-container");
  displayCharacters("questNpcs", "quest-npcs-container");
  displayCharacters("miscellaneous", "miscellaneous-container");
});
