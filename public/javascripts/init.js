$(document).ready(function(){
    $(window).scroll(function(){
    	// console.log($(window).scrollTop()+" scroll height ");
        if($(window).scrollTop() > 550){
        	
            $("nav").removeClass("header-trans").addClass("green-nav").addClass('customNav').addClass('z-depth-2').removeClass('z-depth-0');
        }else {
    		$("nav").removeClass("green-nav").addClass("header-trans").removeClass('z-depth-2').addClass('z-depth-0');
   		}

    });
});

$(document).ready(function(){
	$('.slider').slider({full_width: true,indicators: false});
});


$(document).ready(function(){
	$('.scrollspy').scrollSpy();
});

$(".button-collapse").sideNav();