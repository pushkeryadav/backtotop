$(document).ready(function(){
var backToTop=function(options){
    var config,
	    topOffset=topOffset || options.topOffset,
		time=time || options.time,
		$element=$('<a class="top" href="#"></a>');
		
		$element.css({
		background:'#F5AB35 no-repeat center 50%',
		right:'10px',
		padding:'20px',
		color:'#fff',
		position:'fixed',
		display:'none',
		bottom:'20px'
		});
		$element.off('click.btt').on('click.btt',function(event){
		event.preventDefault();
		  $('html,body').animate({
		  scrollTop:0},
		  time
		  );
		});
		$('body').append($element);
	// add arrow element into body
	var oneTimeCall=false;
	var callback=function(){
		if($(this).scrollTop()>topOffset){
		$element.fadeIn(500);
		} else {
		$element.fadeOut(500);
		}
		
	}
		
	$(window).off('scroll.btt').on('scroll.btt',callback);

	
}

backToTop({topOffset:200,time:500});
});