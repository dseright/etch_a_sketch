function grid(size) {
	$('#sketch').html('<br>');
	var style = 'default';
	$('#color').click(function(){
		style = 'color';
	});
	$('#default').click(function(){
		style = 'default';
	})
	var cellSize = 560/size;
	if(size <= 128){
		for(var i = 0; i < size; i++) {
			$('#sketch').append('<div class="col"></div>')
		}
		for(var j = 0; j < size; j++){
				//code to add a single div which will iterate to input
				$('.col').append('<div class="cell"></div>');
		}
		if(size > 64){
			$('#gridbut').hide();
		} else {
		$('#gridbut').show();
	}
	} else {
		// code to display that input value was too high.
		console.log(size);
		}; 
	$('.cell').css({'height' : cellSize +'px', 'width': cellSize + 'px'});
	$('.cell').mouseenter(function(){
		if(style === 'default'){
			$(this).css({'background-color': '#000000'});
		} else if(style === 'color'){
			$(this).css({'background-color': randomColor()})
		}
	});
};


$(document).ready(function() {
	grid(16);
	var gdsize = 16;
	$('#gridrender').click(function() {
		gdsize = $('#gridsize').val();
		grid(gdsize);
	});
	$('#clear').click(function(){
		$('#sketch').find('div').removeClass('blk');
	});
	$('#gridcheck').prop("checked", false);
	$('#gridcheck').change(function(){
		if($(this).is(":checked")) {
			$('.cell').addClass("border");
		} else {
			$('.cell').removeClass("border");
			}
	});


	
 
});