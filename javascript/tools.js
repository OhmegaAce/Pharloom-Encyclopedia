document.addEventListener("DOMContentLoaded", async () => {
  // Function to display tools in a given container
  const displayTools = (category, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id ${containerId} not found.`);
      return;
    }

    if (typeof toolData === "undefined" || !toolData[category]) {
      container.innerHTML = "<p>No tool data available for this category.</p>";
      return;
    }

    const tools = toolData[category];
    if (tools.length === 0) {
      container.innerHTML = "<p>No tools found in this category.</p>";
      return;
    }

    container.innerHTML = ""; // Clear loading message

    const table = document.createElement("table");
    table.className = "tool-table";

    // Create table header
    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Location</th>
            <th>Uses</th>
            <th>Refill Cost</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    tools.forEach((tool) => {
      const toolRow = document.createElement("tr");
      toolRow.className = "tool-row";

      toolRow.innerHTML = `
        <td>
          <div class="parallax-container"><img src="${tool.image}" alt="${
        tool.name
      }" class="tool-image-table"></div>
        </td>
        <td>${tool.name}</td>
        <td>${tool.description}</td>
        <td>${tool.location}</td>
        <td>${tool.uses || "N/A"}</td>
        <td>${tool.refill_cost || "N/A"}</td>
      `;
      tbody.appendChild(toolRow);
    });
    table.appendChild(tbody);
    container.appendChild(table);
  };

  // --- Load data script and then render all categories ---
  try {
    // Load the data script dynamically
    const dataScript = document.createElement("script");
    dataScript.src = "../javascript/data/tool-data.js";
    document.head.appendChild(dataScript);

    // Wait for the script to load before proceeding
    await new Promise((resolve, reject) => {
      dataScript.onload = resolve;
      dataScript.onerror = reject;
    });

    // Now that data is loaded, display all tool categories
    displayTools("redtools", "red-tools-container");
    displayTools("bluetools", "blue-tools-container");
    displayTools("yellowtools", "yellow-tools-container");
  } catch (error) {
    console.error("Failed to load tool data script:", error);
  }
});
