var fadein = $('body');
$.body(fadein, function(document){
	setTimeout(function() {
		$(document).fadeIn(1000);
	}, 1000);
});