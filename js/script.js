function createFilter(type) { // Helper function
  var filter = [];
  $("#" + type + '-filter input:checked').each(function(index, element) {
    filter.push("[data-" + type + "^='" + element.value + "']"); // Use ^= to match the start of the actual value
  });
  return filter.join(",") || "*"; // Asterisk means: no filter at all
}

$(document).on('change', 'input[type=checkbox]', function() {
  $('.leaflet-zoom-animated > g > circle')
  .hide()
  .filter(createFilter("star")) // Any of the checked star selections, AND
  .filter(createFilter("review")) // Any of the review selections, AND
  .filter(createFilter("cat")) // Any of the cat selections, AND
  .filter(createFilter("price")) // Any of the price selections
  .show(); // Show the matches of the above filter

  $('#reset').click(function(e) {
    $('input:checked').removeAttr('checked');
    $('.leaflet-zoom-animated > g > circle').show();
    e.preventDefault();
 });
});

