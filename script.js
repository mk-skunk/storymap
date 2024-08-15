// Initialize the map centered on JKUAT Main Gate
var map = L.map('map').setView([-1.101902, 37.014186], 12); // Adjust the initial coordinates as needed

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Define your custom locations with images in pop-ups (longitude, latitude, description, and image)
var customLocations = [
  {
    location: [-1.101902, 37.014186], // JKUAT Main Gate
    popupContent: "<b>JKUAT Main Gate:</b><br>The main entrance to Jomo Kenyatta University of Agriculture and Technology.<br><img src='images/jkuat main gate.jpeg' alt='JKUAT Main Gate' width='200'/>"
  },
  {
    location: [-1.047698, 37.072146], // Juja Town
    popupContent: "<b>Juja Town:</b><br>A rapidly growing town located along Thika Superhighway.<br><img src='images/juja town.jpeg' alt='Juja Town' width='200'/>"
  },
  {
    location: [-1.035423, 37.091732], // Toll Station
    popupContent: "<b>Toll Station:</b><br>A key interchange along Thika Superhighway.<br><img src='images/toll station.jpeg' alt='Toll Station' width='200'/>"
  },
  {
    location: [-1.014661, 37.116776], // Makongeni
    popupContent: "<b>Makongeni:</b><br>A residential estate in Thika.<br><img src='images/makongeni.jpeg' alt='Makongeni' width='200'/>"
  },
  {
    location: [-1.002521, 37.154255], // Thika Town
    popupContent: "<b>Thika Town:</b><br>A major industrial and commercial hub in Kiambu County.<br><img src='images/thika town.jpeg' alt='Thika Town' width='200'/>"
  }
];

// Loop through the custom locations and add them to the map
customLocations.forEach(function(point) {
  L.marker(point.location)
    .addTo(map)
    .bindPopup(point.popupContent);
});

// Add the route along Thika Superhighway using GeoJSON
var route = {
  "type": "Feature",
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [37.014186, -1.101902], // JKUAT Main Gate
      [37.072146, -1.047698], // Juja Town
      [37.091732, -1.035423], // Toll Station
      [37.116776, -1.014661], // Makongeni
      [37.154255, -1.002521]  // Thika Town
    ]
  }
};

// Add the route to the map
L.geoJSON(route, {
  style: {
    color: "black", // Road color set to black
    weight: 5,
    opacity: 0.7
  }
}).addTo(map);
