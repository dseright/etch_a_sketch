function grid(size) {
	$('#sketch').html('<br>');
	var style = 'default';
	var cellSize = 560/size;
	if(size <= 128 && size > 0){
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
		alert('Please enter a value between 1 and 128.');
		}; 
	$('.cell').css({'height' : cellSize +'px', 'width': cellSize + 'px'});

	$('#color').click(function(){
		style = 'color';
	});
	$('#darken').click(function(){
		style = 'darken';
		$('.cell').css({'opacity': '0', 'background-color': '#000000'})
	})
	$('#default').click(function(){
		style = 'default';
	})
	$('.cell').mouseenter(function(){
		if(style === 'default'){
			$(this).css({'background-color': '#000000'});
		} else if(style === 'color'){
			$(this).css({'background-color': randomColor()})
		} else if(style === 'darken'){
			var opacity = parseFloat($(this).css("opacity"));
			if(opacity < 1){
				opacity += 0.1;
				$(this).css('opacity', opacity);
			}
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
		$('#sketch').find('div').css({'background-color': '#d3d3d3'});
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