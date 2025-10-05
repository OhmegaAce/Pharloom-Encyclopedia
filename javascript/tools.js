document.addEventListener("DOMContentLoaded", () => {
  // This function will run once the main logic is ready to execute.
  const initializePage = () => {
    // Data is now guaranteed to be loaded.
    displayTools("red", "red-tools-container");
    displayTools("blue", "blue-tools-container");
    displayTools("yellow", "yellow-tools-container");
  };

  // --- Core Functions ---

  /**
   * Displays tools of a specific category in a given container.
   */
  const displayTools = (category, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id ${containerId} not found.`);
      return;
    }

    try {
      const tools = toolData[category];
      if (!tools || tools.length === 0) {
        container.innerHTML = "<p>No tools found in this category.</p>";
        return;
      }

      // Clear loading message and create table
      container.innerHTML = "";
      const table = document.createElement("table");
      table.className = "tool-table";
      table.innerHTML = `
        <thead>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Description</th>
            <th>Location</th>
            <th>Uses</th>
            <th>Refill Cost</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;
      const tbody = table.querySelector("tbody");
      tools.forEach((tool) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td><div class="parallax-container"><img src="${tool.image}" alt="${
          tool.name
        }" class="tool-image-table parallax-image"></div></td>
          <td>${tool.name}</td>
          <td>${tool.description}</td>
          <td>${tool.location || "N/A"}</td>
          <td>${tool.uses || "N/A"}</td>
          <td>${tool.refill_cost || "N/A"}</td>
        `;
        tbody.appendChild(row);
      });
      container.appendChild(table);
    } catch (error) {
      console.error(`Error loading ${category} data:`, error);
      container.innerHTML = "<p>Error loading tool information.</p>";
    }
  };

  // --- Initialization Logic ---
  if (typeof toolData !== "undefined") {
    initializePage();
  } else {
    const dataScript = document.querySelector('script[src*="tool-data.js"]');
    if (dataScript) {
      dataScript.addEventListener("load", initializePage);
    } else {
      console.error("Could not find the tool-data.js script tag.");
    }
  }
});
