$(document).ready(function() {



 $('.modal-trigger').leanModal();



$(".close-nav").click(function(){
	$(this).sideNav('hide');
})

$(window).resize(function(){
	$(this).sideNav('hide');
})

$(".button-collapse").sideNav({
      menuWidth: 270,
      edge: 'right', 
      closeOnClick: false
    });

 $('.materialboxed').materialbox();



$('#mobile-mnu > ul > li > a').click(function(){
	if((!$(this).hasClass("click")) && $(this).siblings("ul").length > 0){
		console.log($(this).siblings("ul"))
		$(this).addClass("click");
		$(this).siblings("ul").addClass('open');
		return false
	}
 });




$("#recal-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    customPaging : function(slider ,i) {
        var dots = '<a>'+ (i + 1) +'</a>';
        return dots;
    },
   responsive: [{ 
        breakpoint: 600,
        settings: {
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3
        } 
    }]
});

$("#person-slide").slick({
  dots: true,
    arrows: false,
  customPaging : function(slider ,i) {
        var dots = '<a>'+ (i + 1) +'</a>';
        return dots;
    }
});





$(".person_page-wrap_page").click(function(){
	$(".person_page-wrap_page").removeClass("active-page");
	$(this).addClass("active-page");
})
$(".recall_page-wrap_page").click(function(){
	$(".recall_page-wrap_page").removeClass("active-page");
	$(this).addClass("active-page");
})




$("#recal-slider .slick-slide:not(.slick-cloned) a").magnificPopup({
  type: 'image',
  closeOnContentClick: false,
  closeBtnInside: true,
  mainClass: 'mfp-with-zoom',
  gallery: {enabled: true,navigateByImgClick: true,preload: [0,1]},
  zoom: {enabled: true,duration: 300,}
});

$(".about_wrap_descr_items_item-wrap_item a").magnificPopup({
  type: 'image',
  closeOnContentClick: false,
  closeBtnInside: true,
  mainClass: 'mfp-with-zoom',
  gallery: {enabled: true,navigateByImgClick: true,preload: [0,1]},
  zoom: {enabled: true,duration: 300,}
});
  	
})

