$(document).ready(function(){
	$('.ingredients li').click(function(){
		$(this).addClass('done');
	});
	$(".toggle-images").click(function() {
		$("img").toggle();
		var hideMsg = "Hide all images";
		if($(this).text() == hideMsg){
			$(this).text("Show all images");
		}
		else {
			$(this).text(hideMsg);
		}
	});
	$(".finish-step").click(function(){
		var $currentStep = $(this).parent("li");
		$currentStep.addClass("done");
		var $nextStep = $currentStep.next("li");
		if ($nextStep.length){
			$("html, body").animate({
				scrollTop: $nextStep.offset().top
			}, 1000);
		}
	});
});