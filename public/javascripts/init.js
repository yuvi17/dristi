

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
	$(".submit").text("SENDING"); 
	 $("#loader").show();         
	$.post($form.attr('action'), $form.serialize())
		.done(function(data) {
			$("#submit-button").prop('disabled',false); 
			$(".submit").text("SEND")
	 		$("#loader").hide();
			$(".message").html("<br><br>We've got your message.We'll get back to you soon !<br><br>");
		})
		.fail(function(jqXHR, textStatus, errorThrown) {
			$('#mail-form').find('name').val(''); 
			$('#mail-form').find('email').val('');
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
