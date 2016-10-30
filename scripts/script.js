function grid(size) {
	$('#sketch').html('<br>');
	if(size <= 65){
		console.log(size);
		for(var i = 0; i < size; i++) {
			$('#sketch').append('<div class="col"></div>')
		}
		for(var j = 0; j < size; j++){
				//code to add a single div which will iterate to input
				$('.col').append('<div class="cell"></div>');
		}
	} else {
		// code to display that input value was too high.
		console.log(size);
		}; 
	$('.cell').mouseenter(function(){
		$(this).addClass('blk');
	});
};


$(document).ready(function() {
	grid(16);
	$('#gridrender').click(function() {
		var gdsize = $('#gridsize').val();
		grid(gdsize);
	});
	$('#clear').click(function(){
		$('#sketch').find('div').removeClass('blk');
	});
 
});