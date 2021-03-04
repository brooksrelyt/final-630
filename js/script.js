function createFilter(type) {
  var filter = [];
  $('#' + type + '-filter input:checked').each(function (index, element) {
    filter.push('[data-' + type + "^='" + element.value + "']");
  });
  return filter.join(',') || '*';
}

$(document).on('change', 'input[type=checkbox]', function () {
  $('.leaflet-zoom-animated > g > circle')
    .hide()
    .filter(createFilter('star'))
    .filter(createFilter('review'))
    .filter(createFilter('cat'))
    .filter(createFilter('price'))
    .show();

  $('#reset').click(function (e) {
    $('input:checked').removeAttr('checked');
    $('.leaflet-zoom-animated > g > circle').show();
    e.preventDefault();
  });
});
