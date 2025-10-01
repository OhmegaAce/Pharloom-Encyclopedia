document.addEventListener("DOMContentLoaded", function () {
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

    tools.forEach((tool) => {
      const toolCard = document.createElement("div");
      toolCard.className = "tool-card";

      toolCard.innerHTML = `
                <img src="${tool.image}" alt="${tool.name}" class="tool-image">
                <h3>${tool.name}</h3>
                <p class="tool-description">${tool.description}</p>
                <div class="tool-details">
                    <p><strong>Location:</strong> ${tool.location}</p>
                    ${
                      tool.uses
                        ? `<p><strong>Uses:</strong> ${tool.uses}</p>`
                        : ""
                    }
                    ${
                      tool.refill_cost
                        ? `<p><strong>Refill Cost:</strong> ${tool.refill_cost}</p>`
                        : ""
                    }
                </div>
            `;
      container.appendChild(toolCard);
    });
  };

  // Load all tool categories
  displayTools("redtools", "red-tools-container");
  displayTools("bluetools", "blue-tools-container");
  displayTools("yellowtools", "yellow-tools-container");
});
