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
    popupContent: "<b> STARTING POINT:JKUAT Main Gate:</b><br>The main entrance to Jomo Kenyatta University of Agriculture and Technology.STARTING TIME 7.00 AM.<br><img src='jkuat main gate.jpeg' alt='JKUAT Main Gate' width='200'/>"
  },
  {
    location: [-1.124726, 37.003003], // Kenyatta Road
    popupContent: "<b>Kenyatta Road:</b><br>A key access road connecting the university to nearby residential area.TIME 07:05AM<br><img src='kenyatta road.jpeg' alt='Kenyatta Road' width='200'/>"
  },
  {
    location: [-1.130230, 36.982836], // Ruiru Town
    popupContent: "<b>Ruiru Town:</b><br>A rapidly growing commercial hub along Thika Road.TIME 07:10AM<br><img src='ruiru town.jpeg' alt='Ruiru Town' width='200'/>"
  },
  {
    location: [-1.164848, 36.957071], // Eastern Bypass
    popupContent: "<b>Eastern Bypass:</b><br>A major road linking Thika Road to the Mombasa Road corridor.TIME 07:15AM<br><img src='eastern bypass.jpeg' alt='Eastern Bypass' width='200'/>"
  },
  {
    location: [-1.181048, 36.933939], // Kenyatta University
    popupContent: "<b>Kenyatta University:</b><br>One of Kenya’s largest public universities. TIME : 07:15 AM<br><img src='kenyatta university.jpeg' alt='Kenyatta University' width='200'/>"
  },
  {
    location: [-1.205713, 36.914948], // Githurai
    popupContent: "<b>Githurai:</b><br>A densely populated suburb along Thika Road. TIME 07:20 AM KEEP YOUR PHONE SAFE.<br><img src='githurai.jpeg' alt='Githurai' width='200'/>"
  },
  {
    location: [-1.219914, 36.891052], // Roysambu
    popupContent: "<b>Roysambu:</b><br>A busy residential and commercial area close to TRM.   TIME: 07:25AM<br><img src='roysamnbu.jpeg' alt='Roysambu' width='200'/>"
  },
  {
    location: [-1.234495, 36.873463], // Rosters
    popupContent: "<b>Rosters:</b><br>A popular landmark between Roysambu and Garden City. TIME 07:35AM<br><img src='rosters.jpeg' alt='Rosters' width='200'/>"
  },
  {
    location: [-1.244684, 36.867018], // Outer Ring Road
    popupContent: "<b>Outer Ring Road:</b><br>An interchange connecting to various parts of Nairobi. TIME 07:45AM<br><img src='outer ring road.jpeg' alt='Outer Ring Road' width='200'/>"
  },
  {
    location: [-1.262515, 36.839637], // Pangani Eastleigh Junction
    popupContent: "<b>Pangani Eastleigh Junction:</b><br>A major junction linking to the Eastleigh area.TIME : 07:50AM<br><img src='pangni eastleigh.jpeg' alt='Pangani Eastleigh Junction' width='200'/>"
  },
  {
    location: [-1.278806, 36.821174], // Nairobi CBD
    popupContent: "<b>Nairobi CBD:</b><br>The central business district of Kenya's capital city ARRIVAL TIME .08:00AM.<br><img src='nairobi cbd.jpeg' alt='Nairobi CBD' width='200'/>"
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
      [37.003003, -1.124726], // Kenyatta Road
      [36.982836, -1.130230], // Ruiru Town
      [36.957071, -1.164848], // Eastern Bypass
      [36.933939, -1.181048], // Kenyatta University
      [36.914948, -1.205713], // Githurai
      [36.891052, -1.219914], // Roysambu
      [36.873463, -1.234495], // Rosters
      [36.867018, -1.244684], // Outer Ring Road
      [36.839637, -1.262515], // Pangani Eastleigh Junction
      [36.821174, -1.278806]  // Nairobi CBD
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

// Add a control for the journey topic
L.control({position: 'topright'}).onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info');
    div.innerHTML = '<h3>JOURNEY TO NAIROBI CBD FROM JKUAT JUJA</h3>';
    return div;
}.addTo(map);
