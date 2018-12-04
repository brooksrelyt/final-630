// Reset the choices - might not be working
// $('#reset').click(function(){
//     $("input[type='checkbox']").attr("checked",false);
// });

$('#star-filter').delegate('input[type=checkbox]', 'change', function() {
	$('input.star').not(this).prop('checked', false);  
	var $list = $('.leaflet-zoom-animated > g > circle'),
	$checked = $('input:checked');	
	if ($checked.length) {							
		var sel = '';
		var selector = '';
		$($checked).each(function(index, element){
			sel += "[data-staralt~='" + element.name + "']";  
			selector += "[data-star~='" + element.value + "']";   
		});                        
		$list.hide();
		$('.leaflet-zoom-animated > g > circle').filter(sel).show();
		$('.leaflet-zoom-animated > g > circle').filter(selector).show();
	}
	else {
		$list.show();
	}
});

// CATEGORY FILTER
$('#cat-filter').delegate('input[type=checkbox]', 'change', function() {
	$('input.category').not(this).prop('checked', false);  
	var $list = $('.leaflet-zoom-animated > g > circle'),
	$checked = $('input:checked');	
	if ($checked.length) {							
		var selector = '';
		$($checked).each(function(index, element){                            
			selector += "[data-cat~='" + element.value + "']";                            
		});                        
		$list.hide();                        
		$('.leaflet-zoom-animated > g > circle').filter(selector).show();			   
	}
	else {
		$list.show();
	}
});