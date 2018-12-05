var map = L.map('map').setView([38.9936, -76.9538], 13);
      mapLink = 
          '<a href="http://openstreetmap.org">OpenStreetMap</a>';
      L.tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; ' + mapLink + ' Contributors',
          maxZoom: 18,
          }).addTo(map);
      
/* Initialize the SVG layer */
map._initPathRoot()    

// We simply pick up the SVG from the map object
var svg = d3.select("#map").select("svg"),
g = svg.append("g");

var svg = d3.select("body")
  .append("svg")
  .attr("width",300)
  .attr("height",300);
  
var tooltip = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style('opacity', 0)
  .style('position', 'absolute')
  .style('padding', '0 10px');


d3.json("../data/yelp-fusion.json", function(collection) {
  // Add a LatLng object to each item in the dataset 
  collection.businesses.forEach(function(d) {
    d.LatLng = new L.LatLng(d.coordinates.latitude,
                d.coordinates.longitude)
  })
  
  var feature = g.selectAll("circle")
    .data(collection.businesses)
    .enter().append("circle")
    .style("stroke", "blue")  
    .style("opacity", .6) 
    .style("fill", "blue")
    .attr("r", 10)

    // Adding classes directly from the JSON data to the svg circles to hopefully filter later
    .attr("data-id", function(d){return d.id;})
    .attr("data-star", function(d){return d.rating;})
    .attr("data-staralt", function(d){return d.rating;})
    .attr("data-review", function(d){return d.review_count;})
    .attr("data-cat", function(d){return d.categories[0].title;})

    .on("mouseover", function(d) {
      var html  = d.name + "<br><hr>" + "Star Rating: " + d.rating + "<br>" + "Total Review: " + d.review_count;
      tooltip.html(html)
        .style('background', '#fff')
        .style("left", (d3.event.pageX + 25) + "px")
        .style("top", (d3.event.pageY - 30) + "px")
      .transition()
        .duration(200) // ms
        .style("opacity", .9) // started as 0!
    })
    .on("mouseout",function(d) {
       tooltip.transition()
        .duration(300) // ms
        .style("opacity", 0); // don't care about position!
    })
  
  map.on("viewreset", update);
  update();

  function update() {
    feature.attr("transform", 
    function(d) { 
      return "translate("+ 
        map.latLngToLayerPoint(d.LatLng).x +","+ 
        map.latLngToLayerPoint(d.LatLng).y +")";
      }
    )
  }
}) 

