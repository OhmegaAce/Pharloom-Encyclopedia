document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  if (!searchInput || !searchResults) {
    return;
  }

  let searchableData = [];

  // Combine all data into a single searchable array
  if (typeof areaData !== "undefined" && areaData.areas) {
    searchableData.push(
      ...areaData.areas.map((item) => ({
        ...item,
        type: "Area",
        page: "map.html",
      }))
    );
  }
  if (typeof bossData !== "undefined" && bossData.bosses) {
    searchableData.push(
      ...bossData.bosses.map((item) => ({
        ...item,
        type: "Boss",
        page: "enemies.html",
      }))
    );
  }
  if (typeof characterData !== "undefined") {
    if (characterData.merchants) {
      searchableData.push(
        ...characterData.merchants.map((item) => ({
          ...item,
          type: "Merchant",
          page: "characters.html",
        }))
      );
    }
    if (characterData.wanderers) {
      searchableData.push(
        ...characterData.wanderers.map((item) => ({
          ...item,
          type: "Wanderer",
          page: "characters.html",
        }))
      );
    }
    if (characterData.questNpcs) {
      searchableData.push(
        ...characterData.questNpcs.map((item) => ({
          ...item,
          type: "Quest NPC",
          page: "characters.html",
        }))
      );
    }
  }
  if (typeof enemyData !== "undefined" && enemyData.enemies) {
    searchableData.push(
      ...enemyData.enemies.map((item) => ({
        ...item,
        type: "Enemy",
        page: "enemies.html",
      }))
    );
  }
  if (typeof toolData !== "undefined") {
    if (toolData.red) {
      searchableData.push(
        ...toolData.red.map((item) => ({
          ...item,
          type: "Red Tool",
          page: "tools.html",
        }))
      );
    }
    if (toolData.blue) {
      searchableData.push(
        ...toolData.blue.map((item) => ({
          ...item,
          type: "Blue Tool",
          page: "tools.html",
        }))
      );
    }
    if (toolData.yellow) {
      searchableData.push(
        ...toolData.yellow.map((item) => ({
          ...item,
          type: "Yellow Tool",
          page: "tools.html",
        }))
      );
    }
  }

  searchInput.addEventListener("keyup", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    if (searchTerm && searchTerm.length > 1) {
      searchResults.innerHTML = ""; // Clear previous results
      const filteredData = searchableData.filter((item) => {
        const name = item.name ? item.name.toLowerCase() : "";
        const description = item.description
          ? item.description.toLowerCase()
          : "";
        const information = item.information
          ? typeof item.information === "string"
            ? item.information.toLowerCase()
            : JSON.stringify(item.information).toLowerCase()
          : "";
        const lore = item.lore ? JSON.stringify(item.lore).toLowerCase() : "";
        const background = item.background ? item.background.toLowerCase() : "";
        const events = item.events ? item.events.toLowerCase() : "";
        const location = item.location ? item.location.toLowerCase() : "";

        return (
          name.includes(searchTerm) ||
          description.includes(searchTerm) ||
          information.includes(searchTerm) ||
          lore.includes(searchTerm) ||
          background.includes(searchTerm) ||
          events.includes(searchTerm) ||
          location.includes(searchTerm)
        );
      });

      displayResults(filteredData);
    } else {
      searchResults.style.display = "none"; // Hide if search is cleared
    }
  });

  function displayResults(results) {
    if (results.length === 0) {
      searchResults.innerHTML =
        '<div class="search-no-results">No results found.</div>';
      searchResults.style.display = "block"; // Show the "No results" message
      return;
    }

    results.forEach((item) => {
      const resultItem = document.createElement("a");
      const queryName = item.name.toLowerCase().replace(/ /g, "");

      let page;
      let template;

      switch (item.type) {
        case "Area":
          template = "area-template.html";
          page = "map.html";
          break;
        case "Boss":
          template = "boss-template.html";
          page = "enemies.html";
          break;

        case "Enemy":
          template = "enemy-template.html";
          page = "enemies.html";
          break;

        case "Merchant":
        case "Wanderer":
        case "Quest NPC":
          template = "character-template.html";
          page = "characters.html";
          break;
        default:
          template = "tool-template.html";
          page = "tools.html";
      }

      resultItem.href = `templates/${template}?name=${queryName}`;
      resultItem.className = "search-result-item";
      resultItem.innerHTML = `<strong>${item.name}</strong> <span class="search-result-type">(${item.type})</span>`;
      searchResults.appendChild(resultItem);
    });

    searchResults.style.display = "block"; // Make the results visible
  }

  // Hide results when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
      searchResults.style.display = "none";
    }
  });
});
