$(function(){
	$( "#toggleDrawer" ).on( "click", function() {
		$(".drawer").toggleClass('open');
	});
	$( "#langSelector" ).on( "click", function() {
		$(this).toggleClass('open');
	});
})