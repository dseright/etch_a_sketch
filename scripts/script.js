$(document).ready(function() {
	function grid(input) {
		if(input =< 128){
			for(i = 0, i < input, i++){
				for(j = 0, j < input, j++){
					//code to add a single div which will iterate to input
					//double check this is how to append inside the container div
					$(#sketch).append("<div class="etch"></div>");
				}
			}
		} else {
			// code to display that input value was too high.
		}
	}
})