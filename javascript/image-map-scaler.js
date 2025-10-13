document.addEventListener("DOMContentLoaded", function () {
  var image = document.getElementById("image-map");
  var map = document.getElementsByName("image-map")[0];

  if (image && map) {
    var areas = map.getElementsByTagName("area");
    var originalCoords = [];

    for (var i = 0; i < areas.length; i++) {
      originalCoords.push(areas[i].coords);
    }

    var originalImageWidth = image.naturalWidth;

    function resizeMap() {
      var currentImageWidth = image.offsetWidth;
      var ratio = currentImageWidth / originalImageWidth;

      for (var i = 0; i < areas.length; i++) {
        var coords = originalCoords[i].split(",");
        var newCoords = [];
        for (var j = 0; j < coords.length; j++) {
          newCoords.push(Math.round(coords[j] * ratio));
        }
        areas[i].coords = newCoords.join(",");
      }
    }

    image.onload = function () {
      originalImageWidth = image.naturalWidth;
      resizeMap();
    };

    window.addEventListener("resize", resizeMap);

    // Call resizeMap initially if the image is already loaded
    if (image.complete) {
      originalImageWidth = image.naturalWidth;
      resizeMap();
    }
  }
});
