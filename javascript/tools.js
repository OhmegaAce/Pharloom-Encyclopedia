document.addEventListener("DOMContentLoaded", function () {
  // Load the data script dynamically
  const dataScript = document.createElement("script");
  dataScript.src = "../javascript/data/tool-data.js";
  document.head.appendChild(dataScript);

  // Function to display tools in a given container
  const displayTools = async (category, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id ${containerId} not found.`);
      return;
    }

    await new Promise((resolve) => (dataScript.onload = resolve));

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

  // Load all tool categories
  displayTools("redtools", "red-tools-container");
  displayTools("bluetools", "blue-tools-container");
  displayTools("yellowtools", "yellow-tools-container");
});
