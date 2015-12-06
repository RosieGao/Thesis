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
	$("#components .ui-draggable").draggable().bind('click', function(){
 		 $(this).focus();
	})
	$("#clear").on("click", function(e){
		e.preventDefault();
		clearContent();
	})
	$(".content").on("click", ".remove, .smallremove", function(e) {
		e.preventDefault();
		$(this).parent().remove();
	})
	$(".content, .column").sortable({
		connectWith: ".column",
		opacity: 0.5,
		handle: ".innerdraglabel, .draglabel",
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
				handle: ".innerdraglabel, .draglabel",
				start: function(event, ui) {
				},
				stop: function(event, ui) {
				}
			});
		}
	});
	$("#components .ui-draggable").draggable({
		connectToSortable: ".column",
		helper: "clone",
		scroll: false,
		start: function(event, ui) {
		},
		drag: function(event, ui) {
			ui.helper.width("100%")
		},
		stop: function(event, ui) {
			ui.helper.removeAttr("style");
		}
	});
})