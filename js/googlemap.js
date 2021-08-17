 // Initialize and add the map
 function initMap() {
    // The location of headquarter
    const autoworld = { lat: 10.79600, lng: 106.67863 };
    // The map, centered at location
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 19,
      center: autoworld,
    });
    // The marker, positioned at headquarter
    const marker = new google.maps.Marker({
      position: autoworld,
      map: map,
    });
  }