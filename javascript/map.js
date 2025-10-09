document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById("interactive-map-container");

  if (!mapContainer) {
    console.error("Map container not found!");
    return;
  }

  // Check if areaData is loaded
  if (typeof areaData === "undefined" || !areaData.areas) {
    mapContainer.innerHTML = "<p>Area data is not available.</p>";
    console.error("area-data.js is not loaded or is empty.");
    return;
  }

  // Main map image
  const mapImage = document.createElement("img");
  mapImage.src = "../images/map/map.png";
  mapImage.alt = "Map of Pharloom";
  mapImage.className = "pharloom-map-image";
  mapContainer.appendChild(mapImage);

  // Add clickable pins for each area
  areaData.areas.forEach((area) => {
    const pin = document.createElement("a");
    pin.className = "map-pin";
    // Use the coordinates from area-data.js if they exist
    if (area.mapCoordinates) {
      pin.style.left = `${area.mapCoordinates.x}%`;
      pin.style.top = `${area.mapCoordinates.y}%`;
    }

    const areaQueryName = area.name.toLowerCase().replace(/ /g, "");
    pin.href = `templates/area-template.html?name=${areaQueryName}`;

    pin.title = area.name; // Tooltip on hover

    mapContainer.appendChild(pin);
  });
});
