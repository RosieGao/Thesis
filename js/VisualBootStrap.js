function clearContent(){
	$(".content").empty();
}

$(document).ready(function() {
	$(".sideWrapper").css("height", ((($(window).height() - 95) / $(window).height()) * 100) + "%");
	$(".content").css("min-height", $(window).height() - 95);
	$(".fullScreen").on("click", function(){$(".content").removeClass("lgSize mdSize smSize xsSize")});
	$(".lgButton").on("click", function(){$(".content").removeClass("lgSize mdSize smSize xsSize"); $(".content").addClass("lgSize")});
	$(".mdButton").on("click", function(){$(".content").removeClass("lgSize mdSize smSize xsSize"); $(".content").addClass("mdSize")});
	$(".smButton").on("click", function(){$(".content").removeClass("lgSize mdSize smSize xsSize"); $(".content").addClass("smSize")});
	$(".xsButton").on("click", function(){$(".content").removeClass("lgSize mdSize smSize xsSize"); $(".content").addClass("xsSize")});
	$(".content, .content .column").sortable({
		connectWith: ".column",
		opacity: 0.5,
		start: function(event, ui) {
		},
		stop: function(event, ui) {
		}
	});
	$("#gridSystem .ui-draggable").draggable({
		connectToSortable: ".content",
		helper: "clone",
		scroll: false,
		start: function(event, ui) {
		},
		drag: function(event, ui) {
			ui.helper.width("100%")
		},
		stop: function(event, ui) {
			ui.helper.removeAttr("style");
			$(".content .column").sortable({
				opacity: 0.5,
				connectWith: ".column",
				start: function(event, ui) {
				},
				stop: function(event, ui) {
				}
			});
		}
	});
	$("#clear").on("click", function(e){
		e.preventDefault();
		clearContent();
	})
})