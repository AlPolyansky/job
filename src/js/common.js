$(document).ready(function() {


$("#person-slide").owlCarousel({
   nav:false,
   items: 1,
   URLhashListener:true,
   addClassActive: true,
   mouseDrag: false

});

$("#recal-slider").owlCarousel({
   nav:false,
   items: 1,
   URLhashListener:true,
   addClassActive: true,
   mouseDrag: false

});





$(".person_page-wrap_page").click(function(){
	$(".person_page-wrap_page").removeClass("active-page");
	$(this).addClass("active-page");
})
$(".recall_page-wrap_page").click(function(){
	$(".recall_page-wrap_page").removeClass("active-page");
	$(this).addClass("active-page");
})
  	
})
