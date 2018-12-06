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

// HELP 1
// $(document).on('change', 'input[type=checkbox]', function() {
// 	$('input.category').not(this).prop('checked', false);  
//     var $list = $('.leaflet-zoom-animated > g > circle'),
//         $checked = $('input:checked');  
//     if ($checked.length) {                          
//         $list.hide();
//         $($checked).each(function(index, element){
//             // Reduce list to what matches one of the three filters.
//             // The comma in the selector works as a logical OR:
//             $list = $list.filter("[data-staralt~='" + element.name + "'],[data-cat~='" + element.value + "'],[data-star~='" + element.value + "']");
//         });
//     }
//     // Show what remains in list:
//     $list.show();
// });


// HELP 2
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
        .filter(createFilter("cat")) // Any of the cat selections
        .show(); // Show the matches of the above filter
});

var $j = jQuery.noConflict();$j(".tooltip").hover(function(){
    $j(this).addClass('open');
        }).mouseleave(function(){
    $j(this).removeClass('open')
});
