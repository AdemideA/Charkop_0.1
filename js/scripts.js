//Set initial view
var map = L.map('mapContainer').setView([19.2069, 72.8245], 12);

//19.0760, 72.8777 - Bombay (use zoom 11)
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRlbWlkZWEiLCJhIjoiY2l6ZGJueHpzMXV0MDJxcW9qYjc2ZnYzYyJ9.3ulYJ3UmEqZn7HHyX-vs7g', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 18,
id: 'mapbox://styles/mapbox/dark-v9',
access_token: 'pk.eyJ1IjoiYWRlbWlkZWEiLCJhIjoiY2l6ZGJueHpzMXV0MDJxcW9qYjc2ZnYzYyJ9.3ulYJ3UmEqZn7HHyX-vs7g'
}).addTo(map);

//var layer = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
  //maxZoom: 18,
  //attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
//}).addTo(map);

var marker = L.marker([19.2118763, 72.8252521]).addTo(map);
marker.bindPopup("<b>Ownership Status</b><br>Resident Owns Home").openPopup();
var marker = L.marker([19.2108703, 72.8282349]).addTo(map)
marker.bindPopup("<b>Ownership Status</b><br>Resident Owns Home").openPopup();
var marker = L.marker([19.2118763, 72.8252521]).addTo(map)
marker.bindPopup("<b>Ownership Status</b><br>Resident Owns Home").openPopup();
var marker = L.marker([19.2170326, 72.824012]).addTo(map)
marker.bindPopup("<b>Ownership Status</b><br>Resident Rents Home").openPopup();
var marker = L.marker([19.2162081, 72.8236406]).addTo(map)
marker.bindPopup("<b>Ownership Status</b><br>Resident Owns Home").openPopup();
var marker = L.marker([19.2170948, 72.8270796]).addTo(map)
marker.bindPopup("<b>Ownership Status</b><br>Resident Owns Home").openPopup();
var marker = L.marker([19.2172156, 72.8271665]).addTo(map)
marker.bindPopup("<b>Ownership Status</b><br>Resident Owns Home").openPopup();


//var SectorOne = [
//	{
//		ID: S1RSC013C134A3
//		gender: Female
//		occupation: Tutor
//		age group: Middle Aged
//		ownership status: Own
//		coord: [19.2118763, 72.8252521]
//	},
//	{
//		ID: S2RSC003C235A2
//		gender: Male
//		occupation: Retired
//		age group: Older
//		ownership status: Own
//		coord: [19.2108703, 72.8282349]
//	},
//	{
//		ID: S1RSC013C134A3
//		gender: Female
//		occupation: Caterer
//		age group: Middle Aged
//		ownership status: Own
//		coord: [19.2118763, 72.8252521]
//	},
//]

//	var SectorFive = [
//{
//		ID: S5RSC59C551A5
//		gender: Male
//		occupation: Tailor
//		age group: Older
//		ownership status: Rent
//		coord: [19.2170326, 72.824012]
//	},
//	{
//		ID: S5RSC59C545A6
//		gender: Female
//		occupation: Housewife
//		age group: Middle Aged
//		ownership status: own
//		coord: [19.2162081, 72.8236406]
//	},
//	{
//		ID: S5RSC49C520A7
//		gender: Female
//		occupation: Housewife
//		age group: Older
//		ownership status: Own
//		coord: [19.2170948, 72.8270796]
//	},

//	{
//		ID: S5RSC49C520A8
//		gender: Female
//		occupation: Housewife
//		agegroup: Middle Aged
//		ownershipstatus: Own
//		coord:[19.2172156, 72.8271665]
//	},	
//]

// create an empty layerGroup
//var SectorOneLayerGroup = L.layerGroup();

//SectorOne.forEach(function(data) {
  //var thisMarker = L.marker(data.coord, {
    //color: 'blue',
    //fillColor: '#3399FF',
 //   fillopacity: .9,
 //   weight: 1,
 //   title: data.ID, 
//  });

 // thisMarker.bindPopup(data.ID + ' is ' + data.gender + 'and' + data.ownershipstatus + 's their property' );

  // add the marker to the layergroup
  //SectorOneLayerGroup.addLayer(thisMarker);
  
//});

//var SectorFiveLayerGroup = L.layerGroup();

//SectorFive.forEach(function(data) {
  //var thisfifthMarker = L.Marker(data.coord, {
    //color: 'red',
    //fillColor: '#f48aa0',
    //fillopacity: .9,
    //weight: 1,
    //title: data.ID,
 // });
   // thisfifthMarker.bindPopup(data.ID + ' is ' + data.gender + 'and' + data.ownershipstatus + 's their property' );

   // SectorFiveLayerGroup.addLayer(thisfiftheMarker);
//});

// finally, add the fully populated layergroup to the map
//SectorOneLayerGroup.addTo(map);
//SectorFiveLayerGroup.addTo(map);

// create an object with the two layerGroups in it, which we can pass into L.control.group

//var sectors = {
//  "Sector One": SectorOneLayerGroup,
  //"Sector Five": SectorFiveLayerGroup,
//}

//L.control.layers(null, sectors, {
//  collapsed: false
//}).addTo(map);

