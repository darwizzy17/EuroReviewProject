// =====================================================================
// ADD THIS CODE TO YOUR js/main.js FILE
// Paste it anywhere at the top level (outside of other functions).
// =====================================================================

// ============ WWI WESTERN FRONT MAP ============
function initWW1Map() {
  // Only run if the map container exists on the page
  if (!document.getElementById('ww1-map')) return;

  // Center the map roughly on the Western Front
  const map = L.map('ww1-map').setView([49.5, 3.5], 6);

  // Add the base map tile layer from OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 10,
    minZoom: 5
  }).addTo(map);

  // ✏️ EDIT: Add or remove battle markers here
  const battles = [
    {
      name: 'Battle of the Marne',
      year: '1914',
      coords: [48.9597, 3.3875],
      desc: 'First major Allied victory; halted the German advance on Paris.'
    },
    {
      name: 'Battle of Verdun',
      year: '1916',
      coords: [49.1600, 5.3833],
      desc: 'Longest battle of WWI; ~700,000 casualties over 10 months.'
    },
    {
      name: 'Battle of the Somme',
      year: '1916',
      coords: [50.0000, 2.6833],
      desc: 'First use of tanks in warfare; over 1 million casualties.'
    },
    {
      name: 'Battle of Ypres',
      year: '1915',
      coords: [50.8503, 2.8853],
      desc: 'First large-scale use of poison gas by German forces.'
    },
    {
      name: 'Battle of Passchendaele',
      year: '1917',
      coords: [50.8986, 3.0214],
      desc: 'Brutal battle fought in muddy conditions; ~500,000 casualties.'
    }
  ];

  // Add a marker with popup for each battle
  battles.forEach(b => {
    L.marker(b.coords)
      .addTo(map)
      .bindPopup(
        '<strong>' + b.name + '</strong><br>' +
        '<em>' + b.year + '</em><br>' +
        b.desc
      );
  });
}

// Run it when the page loads.
// NOTE: If your main.js already has a DOMContentLoaded listener,
// just add the line "initWW1Map();" inside that existing listener
// instead of adding this second one.
document.addEventListener('DOMContentLoaded', initWW1Map);
