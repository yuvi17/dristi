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


var $form = $('#mail-form');
$form.on('submit', function() { 
	$(this).find("button[type='submit']").prop('disabled','disabled'); 
	 $("#loader").show();         
	$.post($form.attr('action'), $form.serialize())
		.done(function(data) {
			$("#submit-button").prop('disabled',false); 
	 		$("#loader").hide();
			$(".message").html("<br><br>We've got your message.We'll get back to you soon !<br><br>");
		})
		.fail(function(jqXHR, textStatus, errorThrown) {
			$('#mail-form').find('input:text').val(''); 
			$('#mail-form').find('input:email').val('');
			$('textarea').val('');
			$("submit-button").prop('disabled',false); 
	 		$("#loader").hide();
			$(".message").html("<br><br> Something went wrong, please try again.<br><br>");
		});
	return false;
}); 

$(document).ready(function(){
	$('.modal-trigger').leanModal();
});