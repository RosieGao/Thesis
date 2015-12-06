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
	$(".content").on("click", ".remove, .innerremove", function(e){
		e.preventDefault();
		$(this).parent().remove();
	})
	$(".content").on("click", "#stripedrows", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("table").toggleClass("table-striped");
	})
	$(".content").on("click", "#borderedtables", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("table").toggleClass("table-bordered");
	})
	$(".content").on("click", "#hoverrows", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("table").toggleClass("table-hover");
	})
	$(".content").on("click", "#inlineform", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("form").toggleClass("form-inline");
	})
	$(".content").on("click", "#horizontalform", function(e){
		e.preventDefault();
		if($(this).attr("data-click-state") == 1) {
			console.log("b");
			$(this).attr("data-click-state", 0)
			console.log($(this).closest(".compbox").find(".view").find("#formview2"));
			$(this).closest(".compbox").find(".view").find("#formview2").css("display", "none");
			$(this).closest(".compbox").find(".view").find("#formview1").css("display", "block");
		} else {
			console.log("a");
			$(this).attr("data-click-state", 1)
			$(this).closest(".compbox").find(".view").find("#formview1").css("display", "none");
			$(this).closest(".compbox").find(".view").find("#formview2").css("display", "block");
		}
	})
	$(".content").on("click", "#multipleselects", function(e){
		e.preventDefault();
		var thisselects = $(this).closest(".compbox").find(".view").find("select");
		console.log(thisselects.attr("multiple"));
		if (thisselects.attr("multiple")){
			thisselects.removeAttr("multiple");
		} else{
			thisselects.attr("multiple", "multiple")
		}
	})

	// $(".content").on("click", "#inlineform", function(e){
		// e.preventDefault();
	// 	$(this).closest(".compbox").find(".view").find("form").toggleClass("form-inline");
	// })
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