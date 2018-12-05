// Reset the choices - might not be working
// $('#reset').click(function(){
//     $("input[type='checkbox']").attr("checked",false);
// });

// $('#star-filter, #cat-filter').delegate('input[type=checkbox]', 'change', function() {
// 	// $('input.star').not(this).prop('checked', false);  
// 	var $list = $('.leaflet-zoom-animated > g > circle'),
// 	$checked = $('input:checked');	
// 	if ($checked.length) {							
// 		var sel = '';
// 		var catsel = '';
// 		var selector = '';
		
// 		$($checked).each(function(index, element){
// 			sel += "[data-staralt~='" + element.name + "']";  
// 			catsel += "[data-cat~='" + element.value + "']"; 
// 			selector += "[data-star~='" + element.value + "']";   
// 		});                        
// 		$list.hide();
// 		$('.leaflet-zoom-animated > g > circle').filter(sel).show();
// 		$('.leaflet-zoom-animated > g > circle').filter(catsel).show();	
// 		$('.leaflet-zoom-animated > g > circle').filter(selector).show();
		                             
// 	}
// 	else {
// 		$list.show();
// 	}
// });

$(document).on('change', 'input[type=checkbox]', function() {
	$('input.category').not(this).prop('checked', false);  
    var $list = $('.leaflet-zoom-animated > g > circle'),
        $checked = $('input:checked');  
    if ($checked.length) {                          
        $list.hide();
        $($checked).each(function(index, element){
            // Reduce list to what matches one of the three filters.
            // The comma in the selector works as a logical OR:
            $list = $list.filter("[data-staralt~='" + element.name + "'],[data-cat~='" + element.value + "'],[data-star~='" + element.value + "']");
        });
    }
    // Show what remains in list:
    $list.show();
});

