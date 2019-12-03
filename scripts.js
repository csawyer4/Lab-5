var map= L.map('map5').setView([47.056, -122.127], 9);
L.titleLayer('https://api.mapbox.com/styles/csawyer4/ck36bxzyo382x1coe9zpkovqk/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3Nhd3llcjQiLCJhIjoiY2syc2g2bnlzMGtyeDNubW55bHRzNnkzOSJ9.WZ63B0C4v437JrMyODN-6g', {
  attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 12,
  id: 'csawyer4.ck36bxzyo382x1coe9zpkovqk',
  accessToken: "pk.eyJ1IjoiY3Nhd3llcjQiLCJhIjoiY2syc2g2bnlzMGtyeDNubW55bHRzNnkzOSJ9.WZ63B0C4v437JrMyODN-6g"
}).addTo(map);
