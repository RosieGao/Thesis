function clearContent(){
	$(".content").empty();
}
function toggleClick(selector, attr, value){
	if (selector.attr(attr)){
		selector.removeAttr(attr);
	} else{
		selector.attr(attr, value);
	}
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(".compbox .view #responsiveimage").attr("src", e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
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
	});
	$("#clear").on("click", function(e){
		e.preventDefault();
		clearContent();
	});
	$(".content").on("click", ".remove, .innerremove", function(e){
		e.preventDefault();
		$(this).parent().remove();
	});
	$(".content").on("click", "#stripedrows", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("table").toggleClass("table-striped");
	});
	$(".content").on("click", "#borderedtables", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("table").toggleClass("table-bordered");
	});
	$(".content").on("click", "#hoverrows", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("table").toggleClass("table-hover");
	});
	$(".content").on("click", "#inlineform", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("form").toggleClass("form-inline");
	});
	$(".content").on("click", "#horizontalform", function(e){
		e.preventDefault();
		if($(this).attr("data-click-state") == 1) {
			$(this).attr("data-click-state", 0)
			$(this).closest(".compbox").find(".view").find("#formview2").css("display", "none");
			$(this).closest(".compbox").find(".view").find("#formview1").css("display", "block");
		} else {
			$(this).attr("data-click-state", 1)
			$(this).closest(".compbox").find(".view").find("#formview1").css("display", "none");
			$(this).closest(".compbox").find(".view").find("#formview2").css("display", "block");
		}
	});
	$(".content").on("click", "#inlineformgroup", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("form").toggleClass("form-inline");
	});
	$(".content").on("click", "#focusstate", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find("input")
		toggleClick(selector, "id", "focusedInput");
	});
	$(".content").on("click", "#formgroupdisabled", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find("input");
		toggleClick(selector, "disabled", "disabled");
	});
	$(".content").on("keyup", "#selectsamount", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("select").empty()
		var amount = +$(this).val();
		var node = [];
		for(var i = 0; i < amount; i++){
			node.push("<option>option</option>");
		}
		$(this).closest(".compbox").find(".view").find("select").append(node.join(""));
	});
	$(".content").on("click", "#multipleselects", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find("select");
		toggleClick(selector, "multiple", "multiple");
	});
	$(".content").on("click", "#defaultbutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warnin btn-danger btn-link");
		$(this).closest(".compbox").find(".view").find("button").toggleClass("btn-default");
	});
	$(".content").on("click", "#primarybutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warnin btn-danger btn-link")
		$(this).closest(".compbox").find(".view").find("button").toggleClass("btn-primary");
	});	
	$(".content").on("click", "#successbutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warnin btn-danger btn-link")
		$(this).closest(".compbox").find(".view").find("button").toggleClass("btn-success");
	});	
	$(".content").on("click", "#infobutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warnin btn-danger btn-link")
		$(this).closest(".compbox").find(".view").find("button").toggleClass("btn-info");
	});	
	$(".content").on("click", "#warningbutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warnin btn-danger btn-link")
		$(this).closest(".compbox").find(".view").find("button").toggleClass("btn-warning");
	});	
	$(".content").on("click", "#dangerbutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warnin btn-danger btn-link")
		$(this).closest(".compbox").find(".view").find("button").toggleClass("btn-danger");
	});	
	$(".content").on("click", "#linkbutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warnin btn-danger btn-link")
		$(this).closest(".compbox").find(".view").find("button").toggleClass("btn-link");
	});
	$(".content").on("click", "#checkboxdisabled", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".checkbox").toggleClass("disabled");
		var selector = $(this).closest(".compbox").find(".view").find("input");
		toggleClick(selector, "disabled", "disabled");
	});
	$(".content").on("keyup", "#checkboxamount", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("form").empty()
		var amount = +$(this).val();
		var node = [];
		for(var i = 0; i < amount; i++){
			node.push("<label class=\"checkbox-inline\" contenteditable=\"true\"><input type=\"checkbox\" id=\"inlineCheckbox1\" value=\"\"> option</label>");
		}
		$(this).closest(".compbox").find(".view").find("form").append(node.join(""));
	});
	$(".content").on("click", "#radiodisabled", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("radiodisabled").toggleClass("disabled");
		var selector = $(this).closest(".compbox").find(".view").find("input")
		toggleClick(selector, "disabled", "disabled");
	});
	$(".content").on("keyup", "#radiobuttonamount", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("form").empty()
		var amount = +$(this).val();
		var node = [];
		for(var i = 0; i < amount; i++){
			node.push("<label class=\"radio-inline\" contenteditable=\"true\"><input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"\"> option</label>");
		}
		$(this).closest(".compbox").find(".view").find("form").append(node.join(""));
	});
	$(".content").on("click", "#imagedefault", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("#responsiveimage").removeClass("img-rounded img-circle img-thumbnail");
	});
	$(".content").on("click", "#imagerounded", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("#responsiveimage").removeClass("img-rounded img-circle img-thumbnail");
		$(this).closest(".compbox").find(".view").find("#responsiveimage").toggleClass("img-rounded");
	});
	$(".content").on("click", "#imagecircle", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("#responsiveimage").removeClass("img-rounded img-circle img-thumbnail");
		$(this).closest(".compbox").find(".view").find("#responsiveimage").toggleClass("img-circle");
	});
	$(".content").on("click", "#imagethumbnail", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("#responsiveimage").removeClass("img-rounded img-circle img-thumbnail");
		$(this).closest(".compbox").find(".view").find("#responsiveimage").toggleClass("img-thumbnail");
	});
	$(".content").on("keyup", "#dropdownamount", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".dropdown-menu").empty()
		var amount = +$(this).val();
		var node = [];
		for(var i = 0; i < amount; i++){
			node.push("<li><a href=\"#\" contenteditable=\"true\">Item</a></li>");
		}
		$(this).closest(".compbox").find(".view").find(".dropdown-menu").append(node.join(""));
	});
	$(".content").on("keyup", "#dropupamount", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".dropdown-menu").empty()
		var amount = +$(this).val();
		var node = [];
		for(var i = 0; i < amount; i++){
			node.push("<li><a href=\"#\" contenteditable=\"true\">Item</a></li>");
		}
		$(this).closest(".compbox").find(".view").find(".dropdown-menu").append(node.join(""));
	});
	$(".content").on("click", "#emptydropdown", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".dropdown-menu").empty();
	});
	$(".content").on("click", "#addheaders", function(e){
		e.preventDefault();
		var node = "<li class=\"dropdown-header\" contenteditable=\"true\">Dropdown header</li>";
		$(this).closest(".compbox").find(".view").find(".dropdown-menu").append(node);
	});
	$(".content").on("click", "#additems", function(e){
		e.preventDefault();
		var node = "<li><a href=\"#\" contenteditable=\"true\">Item</a></li>";
		$(this).closest(".compbox").find(".view").find(".dropdown-menu").append(node);
	});
	$(".content").on("click", "#adddividers", function(e){
		e.preventDefault();
		var node = "<li role=\"separator\" class=\"divider\"></li>";
		$(this).closest(".compbox").find(".view").find(".dropdown-menu").append(node);
	});
	$(".content").on("keyup", "#buttongroupamount", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("#buttongroup").empty();
		var amount = +$(this).val();
		var node = [];
		for(var i = 0; i < amount; i++){
			node.push("<button type=\"button\" class=\"btn btn-default\" contenteditable=\"true\">Button group</button>");
		}
		$(this).closest(".compbox").find(".view").find("#buttongroup").append(node.join(""));
	});
	$(".content").on("click", "#verticalgroup", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find("#buttongroup");
		if (selector.hasClass("btn-group")){
			selector.removeClass("btn-group");
			selector.addClass("btn-group-vertical");
		} else {
			selector.removeClass("btn-group-vertical");
			selector.addClass("btn-group");
		};
	});
	$(".content").on("click", "#emptygroup", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("#buttongroup").empty();
	});
	$(".content").on("click", "#addgroupitems", function(e){
		e.preventDefault();
		var node = "<button type=\"button\" class=\"btn btn-default\" contenteditable=\"true\">Button group</button>";
		$(this).closest(".compbox").find(".view").find("#buttongroup").append(node);
	});
	$(".content").on("click", "#adddropdowns", function(e){
		e.preventDefault();
		var node = "<div class=\"btn-group\" role=\"group\"><button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" contenteditable=\"true\">Dropdown<span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li><a href=\"#\" contenteditable=\"true\">Dropdown item</a></li><li><a href=\"#\" contenteditable=\"true\">Dropdown item</a></li></ul></div>";
		$(this).closest(".compbox").find(".view").find("#buttongroup").append(node);
	});
	// $(".content").on("click", "#a", function(e){
		// e.preventDefault();
	// 	$(this).closest(".compbox").find(".view").find("a").toggleClass("a");
	// });
	// $(".content").on("click", "#a", function(e){
		// e.preventDefault();
	// 	$(this).closest(".compbox").find(".view").find("a").toggleClass("a");
	// });
	// $(".content").on("click", "#a", function(e){
		// e.preventDefault();
	// 	$(this).closest(".compbox").find(".view").find("a").toggleClass("a");
	// });
	// $(".content").on("click", "#a", function(e){
		// e.preventDefault();
	// 	$(this).closest(".compbox").find(".view").find("a").toggleClass("a");
	// });
	// $(".content").on("click", "#a", function(e){
		// e.preventDefault();
	// 	$(this).closest(".compbox").find(".view").find("a").toggleClass("a");
	// });
	// $(".content").on("click", "#a", function(e){
		// e.preventDefault();
	// 	$(this).closest(".compbox").find(".view").find("a").toggleClass("a");
	// });
	// $(".content").on("click", "#a", function(e){
		// e.preventDefault();
	// 	$(this).closest(".compbox").find(".view").find("a").toggleClass("a");
	// });
	// $(".content").on("click", "#a", function(e){
		// e.preventDefault();
	// 	$(this).closest(".compbox").find(".view").find("a").toggleClass("a");
	// });
	// $(".content").on("click", "#a", function(e){
		// e.preventDefault();
	// 	$(this).closest(".compbox").find(".view").find("a").toggleClass("a");
	// });
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
		handle: ".preview",
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
		handle: ".preview",
		start: function(event, ui) {
		},
		drag: function(event, ui) {
			ui.helper.width("100%");
		},
		stop: function(event, ui) {
			ui.helper.removeAttr("style");
		}
	});
})