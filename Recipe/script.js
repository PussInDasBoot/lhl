$(document).ready(function(){
	console.log("Script included!");
	$('ul li').click(function(){
		$(this).addClass('done');
	});
	$(".button").click(function(){
		$(this).addClass('done');
	})
	$("img").hover(
		function(){
		$(this).after($("<span>Click to hide image</span>"));
	}, function(){
		$(this).next("span:last").remove();
	});
	$("img").click(function(){
		$(this).hide();
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