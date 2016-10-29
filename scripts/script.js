function grid(size) {
	$('#sketch').html('<br>');
	if(size <= 128){
		console.log(size);
		for(var i = 0; i < size; i++) {
			$('#sketch').append('<div class="row"></div>')
		}
		for(var j = 0; j < size; j++){
				//code to add a single div which will iterate to input
				$('.row').append('<div class="cell"></div>');
		}
	} else {
		// code to display that input value was too high.
		console.log(size);
		} 
};


$(document).ready(function() {
	$('#gridrender').click(function() {
		var gdsize = $('#gridsize').val();
		grid(gdsize);
	});
});