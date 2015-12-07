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
	$("#clear").on("click", function(e){
		e.preventDefault();
		clearContent();
	});
	$(".content").on("click", ".remove, .innerremove", function(e){
		e.preventDefault();
		$(this).parent().remove();
	});
	$(".content").on("keyup", "#gridcustomize", function(e){
		$(this).closest(".gridbox").find(".row").empty();
		var list = $(this).val().split(" ", 12);
		var node = [];
		var total = 0;
		var listitem = 0;
		console.log(list);
		$.each(list, function(){
			total += +$(this)[0];
		});
		if (total == 12){
			$.each(list, function(){
				listitem = +$(this)[0];
				console.log("listitem");
				node.push("<div class=\"column ui-sortable col-xs-" + listitem + " columndef" + listitem +"\"></div>");
			});
			$(this).closest(".gridbox").find(".row").append(node.join(""));
		}
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
		$(this).closest(".compbox").find(".view").find("select").empty();
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
		$(this).closest(".compbox").find(".view").find("button").addClass("btn-default");
	});
	$(".content").on("click", "#primarybutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warnin btn-danger btn-link")
		$(this).closest(".compbox").find(".view").find("button").addClass("btn-primary");
	});	
	$(".content").on("click", "#successbutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warnin btn-danger btn-link")
		$(this).closest(".compbox").find(".view").find("button").addClass("btn-success");
	});	
	$(".content").on("click", "#infobutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warnin btn-danger btn-link")
		$(this).closest(".compbox").find(".view").find("button").addClass("btn-info");
	});	
	$(".content").on("click", "#warningbutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warnin btn-danger btn-link")
		$(this).closest(".compbox").find(".view").find("button").addClass("btn-warning");
	});	
	$(".content").on("click", "#dangerbutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warnin btn-danger btn-link")
		$(this).closest(".compbox").find(".view").find("button").addClass("btn-danger");
	});	
	$(".content").on("click", "#linkbutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warnin btn-danger btn-link")
		$(this).closest(".compbox").find(".view").find("button").addClass("btn-link");
	});
	$(".content").on("click", "#largebutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-lg btn-sm btn-xs");
		$(this).closest(".compbox").find(".view").find("button").addClass("btn-lg");
	});
	$(".content").on("click", "#mediumbutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-lg btn-sm btn-xs");
	});
	$(".content").on("click", "#smallbutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-lg btn-sm btn-xs");
		$(this).closest(".compbox").find(".view").find("button").addClass("btn-sm");
	});
	$(".content").on("click", "#extrasmallbutton", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("button").removeClass("btn-lg btn-sm btn-xs");
		$(this).closest(".compbox").find(".view").find("button").addClass("btn-xs");
	});
	$(".content").on("click", "#checkboxdisabled", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".checkbox").toggleClass("disabled");
		var selector = $(this).closest(".compbox").find(".view").find("input");
		toggleClick(selector, "disabled", "disabled");
	});
	$(".content").on("keyup", "#checkboxamount", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("form").empty();
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
		$(this).closest(".compbox").find(".view").find("form").empty();
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
		$(this).closest(".compbox").find(".view").find(".dropdown-menu").empty();
		var amount = +$(this).val();
		var node = [];
		for(var i = 0; i < amount; i++){
			node.push("<li><a href=\"#\" contenteditable=\"true\">Item</a></li>");
		}
		$(this).closest(".compbox").find(".view").find(".dropdown-menu").append(node.join(""));
	});
	$(".content").on("keyup", "#dropupamount", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".dropdown-menu").empty();
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
	$(".content").on("click", "#largebuttongroup", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("#buttongroup").removeClass("btn-group-lg btn-group-sm btn-group-xs");
		$(this).closest(".compbox").find(".view").find("#buttongroup").addClass("btn-group-lg");
	});
	$(".content").on("click", "#mediumbuttongroup", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("#buttongroup").removeClass("btn-group-lg btn-group-sm btn-group-xs");
	});
	$(".content").on("click", "#smallbuttongroup", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("#buttongroup").removeClass("btn-group-lg btn-group-sm btn-group-xs");
		$(this).closest(".compbox").find(".view").find("#buttongroup").addClass("btn-group-sm");
	});
	$(".content").on("click", "#extrasmallbuttongroup", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find("#buttongroup").removeClass("btn-group-lg btn-group-sm btn-group-xs");
		$(this).closest(".compbox").find(".view").find("#buttongroup").addClass("btn-group-xs");
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
	$(".content").on("click", "#groupadddropdowns", function(e){
		e.preventDefault();
		var node = "<div class=\"btn-group\" role=\"group\"><button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" contenteditable=\"true\">Dropdown <span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li><a href=\"#\" contenteditable=\"true\">Dropdown item</a></li><li><a href=\"#\" contenteditable=\"true\">Dropdown item</a></li></ul></div>";
		$(this).closest(".compbox").find(".view").find("#buttongroup").append(node);
	});
	$(".content").on("keyup", "#tabnavamount", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".nav-tabs").empty();
		var amount = +$(this).val();
		var node = [];
		for(var i = 0; i < amount; i++){
			node.push("<li role=\"presentation\"><a href=\"#\" contenteditable=\"true\">Tab nav</a></li>");
		}
		$(this).closest(".compbox").find(".view").find(".nav-tabs").append(node.join(""));
	});
	$(".content").on("click", "#tabnavempty", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".nav-tabs").empty();
	});
	$(".content").on("click", "#tabnavaddtabs", function(e){
		e.preventDefault();
		var node = "<li role=\"presentation\"><a href=\"#\" contenteditable=\"true\">Tab nav</a></li>";
		$(this).closest(".compbox").find(".view").find(".nav-tabs").append(node);
	});
	$(".content").on("click", "#tabnavadddropdowns", function(e){
		e.preventDefault();
		var node = "<li role=\"presentation\" class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" contenteditable=\"true\">Dropdown <span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a href=\"#\" contenteditable=\"true\">Dropdown item</a></li><li><a href=\"#\" contenteditable=\"true\">Dropdown item</a></li></ul></li>";
		$(this).closest(".compbox").find(".view").find(".nav-tabs").append(node);
	});
	$(".content").on("click", "#tabnavjustified", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".nav-tabs").toggleClass("nav-justified");
	});
	$(".content").on("keyup", "#pillnavamount", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".nav-pills").empty();
		var amount = +$(this).val();
		var node = [];
		for(var i = 0; i < amount; i++){
			node.push("<li role=\"presentation\"><a href=\"#\" contenteditable=\"true\">Pill nav</a></li>");
		}
		$(this).closest(".compbox").find(".view").find(".nav-pills").append(node.join(""));
	});
	$(".content").on("click", "#pillnavempty", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".nav-pills").empty();
	});
	$(".content").on("click", "#pillnavaddtabs", function(e){
		e.preventDefault();
		var node = "<li role=\"presentation\"><a href=\"#\" contenteditable=\"true\">Pill nav</a></li>";
		$(this).closest(".compbox").find(".view").find(".nav-pills").append(node);
	});
	$(".content").on("click", "#pillnavadddropdowns", function(e){
		e.preventDefault();
		var node = "<li role=\"presentation\" class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" contenteditable=\"true\">Dropdown <span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a href=\"#\" contenteditable=\"true\">Dropdown item</a></li><li><a href=\"#\" contenteditable=\"true\">Dropdown item</a></li></ul></li>";
		$(this).closest(".compbox").find(".view").find(".nav-pills").append(node);
	});
	$(".content").on("click", "#pillnavstackable", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".nav-pills").toggleClass("nav-stacked");
	});
	$(".content").on("click", "#pillnavjustified", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".nav-pills").toggleClass("nav-justified");
	});
	$(".content").on("click", "#fixedtotop", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".navbar").toggleClass("navbar-fixed-top");
	});
	$(".content").on("click", "#fixedtobottom", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".navbar").toggleClass("navbar-fixed-bottom");
	});
	$(".content").on("click", "#statictop", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".navbar").toggleClass("navbar-static-top");
	});
	$(".content").on("click", "#invertednavbar", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find(".navbar");
		if (selector.hasClass("navbar-default")){
			selector.removeClass("navbar-default");
			selector.addClass("navbar-inverse");
		} else {
			selector.removeClass("navbar-inverse");
			selector.addClass("navbar-default");
		};
	});
	$(".content").on("keyup", "#breadcrumbamount", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".breadcrumb").empty();
		var amount = +$(this).val();
		var node = [];
		for(var i = 0; i < amount - 1; i++){
			node.push("<li><a href=\"#\" contenteditable=\"true\">breadcrumb</a></li>");
		}
		node.push("<li class=\"active\" contenteditable=\"true\">breadcrumb</li>");
		$(this).closest(".compbox").find(".view").find(".breadcrumb").append(node.join(""));
	});
	$(".content").on("click", "#breadcrumbempty", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".breadcrumb").empty();
	});
	$(".content").on("click", "#breadcrumbaddchild", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find(".breadcrumb");
		if (selector.children().length > 0) {
			var lastnode = selector.find("li:last-child");
			var lastnodetext = lastnode.html();
			lastnode.remove();
			var newnode = [];
			newnode.push("<li><a href=\"#\" contenteditable=\"true\">" + lastnodetext + "</a></li>");
			newnode.push("<li class=\"active\" contenteditable=\"true\">breadcrumb</li>");
			selector.append(newnode.join(""));	
		} else {
			selector.append("<li class=\"active\" contenteditable=\"true\">breadcrumb</li>");
		} 
	});
	$(".content").on("keyup", "#paginationamount", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".pagination").empty();
		var amount = +$(this).val();
		var node = [];
		node.push("<li><a href=\"#\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li>");
		for(var i = 0; i < amount; i++){
			node.push("<li><a href=\"#\">" + (i + 1) + "</a></li>");
		}
		node.push("<li><a href=\"#\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a></li>");
		$(this).closest(".compbox").find(".view").find(".pagination").append(node.join(""));
	});
	$(".content").on("click", "#paginationlarge", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".pagination").removeClass("pagination-lg pagination-sm");
		$(this).closest(".compbox").find(".view").find(".pagination").addClass("pagination-lg");
	});
	$(".content").on("click", "#paginationmedium", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".pagination").removeClass("pagination-lg pagination-sm");
	});
	$(".content").on("click", "#paginationsmall", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".pagination").removeClass("pagination-lg pagination-sm");
		$(this).closest(".compbox").find(".view").find(".pagination").addClass("pagination-sm");
	});
	$(".content").on("click", "#thumbnail2", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find("#thumbnailsview1").css("display", "block");
		$(this).closest(".compbox").find("#thumbnailsview2").css("display", "none");
		$(this).closest(".compbox").find("#thumbnailsview3").css("display", "none");
		$(this).closest(".compbox").find("#thumbnailsview4").css("display", "none");
	});
	$(".content").on("click", "#thumbnail3", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find("#thumbnailsview1").css("display", "none");
		$(this).closest(".compbox").find("#thumbnailsview2").css("display", "block");
		$(this).closest(".compbox").find("#thumbnailsview3").css("display", "none");
		$(this).closest(".compbox").find("#thumbnailsview4").css("display", "none");
	});
	$(".content").on("click", "#thumbnail4", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find("#thumbnailsview1").css("display", "none");
		$(this).closest(".compbox").find("#thumbnailsview2").css("display", "none");
		$(this).closest(".compbox").find("#thumbnailsview3").css("display", "block");
		$(this).closest(".compbox").find("#thumbnailsview4").css("display", "none");
	});
	$(".content").on("click", "#thumbnail6", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find("#thumbnailsview1").css("display", "none");
		$(this).closest(".compbox").find("#thumbnailsview2").css("display", "none");
		$(this).closest(".compbox").find("#thumbnailsview3").css("display", "none");
		$(this).closest(".compbox").find("#thumbnailsview4").css("display", "block");
	});
	$(".content").on("click", "#alertsuccess", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".alert-success").css("display", "block");
		$(this).closest(".compbox").find(".view").find(".alert-info").css("display", "none");
		$(this).closest(".compbox").find(".view").find(".alert-warning").css("display", "none");
		$(this).closest(".compbox").find(".view").find(".alert-danger").css("display", "none");
	});
	$(".content").on("click", "#alertinfo", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".alert-success").css("display", "none");
		$(this).closest(".compbox").find(".view").find(".alert-info").css("display", "block");
		$(this).closest(".compbox").find(".view").find(".alert-warning").css("display", "none");
		$(this).closest(".compbox").find(".view").find(".alert-danger").css("display", "none");
	});
	$(".content").on("click", "#alertwarning", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".alert-success").css("display", "none");
		$(this).closest(".compbox").find(".view").find(".alert-info").css("display", "none");
		$(this).closest(".compbox").find(".view").find(".alert-warning").css("display", "block");
		$(this).closest(".compbox").find(".view").find(".alert-danger").css("display", "none");
	});
	$(".content").on("click", "#alertdanger", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".alert-success").css("display", "none");
		$(this).closest(".compbox").find(".view").find(".alert-info").css("display", "none");
		$(this).closest(".compbox").find(".view").find(".alert-warning").css("display", "none");
		$(this).closest(".compbox").find(".view").find(".alert-danger").css("display", "block");
	});
	$(".content").on("click", "#dismissiblealerts", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find(".alert");
		selector.toggleClass("alert-dismissible");
		if (selector.hasClass("alert-dismissible")){
			selector.prepend("<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>")
		} else {
			selector.find("button").remove();
		}
	});
	$(".content").on("keyup", "#progresspercentage", function(e){
		e.preventDefault();
		var percentage = +$(this).val();
		$(this).closest(".compbox").find(".view").find(".progress-bar").attr("aria-valuenow", percentage);
		$(this).closest(".compbox").find(".view").find(".progress-bar").css("width", percentage + "%");
		$(this).closest(".compbox").find(".view").find(".progress-bar span").text(percentage + "% Complete");
	});
	$(".content").on("click", "#progresswithlabel", function(e){
		e.preventDefault();
		var percentage = $(this).closest(".compbox").find(".view").find(".progress-bar").attr("aria-valuenow");
		if($(this).attr("data-click-state") == 1) {
			$(this).attr("data-click-state", 0)
			$(this).closest(".compbox").find(".view").find(".progress-bar").empty();
		} else {
			$(this).attr("data-click-state", 1);
			$(this).closest(".compbox").find(".view").find(".progress-bar").append(percentage + "%");
		}
	});
	$(".content").on("click", "#progresssuccess", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".progress-bar").removeClass("progress-bar-success progress-bar-info progress-bar-warning progress-bar-danger");
		$(this).closest(".compbox").find(".view").find(".progress-bar").addClass("progress-bar-success");
	});
	$(".content").on("click", "#progressinfo", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".progress-bar").removeClass("progress-bar-success progress-bar-info progress-bar-warning progress-bar-danger");
		$(this).closest(".compbox").find(".view").find(".progress-bar").addClass("progress-bar-info");
	});
	$(".content").on("click", "#progresswarning", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".progress-bar").removeClass("progress-bar-success progress-bar-info progress-bar-warning progress-bar-danger");
		$(this).closest(".compbox").find(".view").find(".progress-bar").addClass("progress-bar-warning");
	});
	$(".content").on("click", "#progressdanger", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".progress-bar").removeClass("progress-bar-success progress-bar-info progress-bar-warning progress-bar-danger");
		$(this).closest(".compbox").find(".view").find(".progress-bar").addClass("progress-bar-danger");
	});
	$(".content").on("click", "#progressstriped", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".progress-bar").toggleClass("progress-bar-striped");
	});
	$(".content").on("click", "#progressanimated", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".progress-bar").toggleClass("active");
	});
	$(".content").on("click", "#mediaobjectleft", function(e){
		e.preventDefault();
		if ($(this).closest(".compbox").find(".view").find(".media .media-left").length > 0){
			return false;
		} else {
			var mediaobject = $(this).closest(".compbox").find(".view").find(".media .media-right").html();
			$(this).closest(".compbox").find(".view").find(".media .media-right").remove();
			$(this).closest(".compbox").find(".view").find(".media").prepend("<div class=\"media-left\">" + mediaobject + "</div>");
		}
	});
	$(".content").on("click", "#mediaobjectright", function(e){
		e.preventDefault();
		if ($(this).closest(".compbox").find(".view").find(".media .media-right").length > 0){
			return false;
		} else {
			var mediaobject = $(this).closest(".compbox").find(".view").find(".media .media-left").html();
			$(this).closest(".compbox").find(".view").find(".media .media-left").remove();
			$(this).closest(".compbox").find(".view").find(".media").append("<div class=\"media-right\">" + mediaobject + "</div>");
		}
	});
	$(".content").on("click", "#mediaobjecttop", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".media-left, .media-right").removeClass("media-middle media-bottom");
	});
	$(".content").on("click", "#mediaobjectmiddle", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".media-left, .media-right").removeClass("media-middle media-bottom");
		$(this).closest(".compbox").find(".view").find(".media-left, .media-right").addClass("media-middle");
	});
	$(".content").on("click", "#mediaobjectbottom", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".media-left, .media-right").removeClass("media-middle media-bottom");
		$(this).closest(".compbox").find(".view").find(".media-left, .media-right").addClass("media-bottom");
	});
	$(".content").on("keyup", "#listgroupamount", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".list-group").empty();
		var amount = +$(this).val();
		var node = [];
		for(var i = 0; i < amount; i++){
			node.push("<li class=\"list-group-item\" contenteditable=\"true\">List group item</li>");
		}
		$(this).closest(".compbox").find(".view").find(".list-group").append(node.join(""));
	});
	$(".content").on("click", "#listgroupempty", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".list-group").empty();
	});
	$(".content").on("click", "#listgroupadditem", function(e){
		e.preventDefault();
		var node = "<li class=\"list-group-item\" contenteditable=\"true\">List group item</li>";
		$(this).closest(".compbox").find(".view").find(".list-group").append(node);
	});
	$(".content").on("click", "#listgroupaddlinked", function(e){
		e.preventDefault();
		var node = "<a href=\"#\" class=\"list-group-item\" contenteditable=\"true\">Linked item</a>";
		$(this).closest(".compbox").find(".view").find(".list-group").append(node);
	});
	$(".content").on("click", "#listgroupaddbutton", function(e){
		e.preventDefault();
		var node = "<button type=\"button\" class=\"list-group-item\" contenteditable=\"true\">Button item</button>";
		$(this).closest(".compbox").find(".view").find(".list-group").append(node);
	});
	$(".content").on("click", "#listgroupadddisabled", function(e){
		e.preventDefault();
		var node = "<a href=\"#\" class=\"list-group-item disabled\" contenteditable=\"true\">Disabled item</a>";
		$(this).closest(".compbox").find(".view").find(".list-group").append(node);
	});
	$(".content").on("click", "#listgroupaddcontent", function(e){
		e.preventDefault();
		var node = "<a href=\"#\" class=\"list-group-item\"><h4 class=\"list-group-item-heading\" contenteditable=\"true\">List group item heading</h4><p class=\"list-group-item-text\" contenteditable=\"true\">List group content. List group content. List group content. List group content. List group content. List group content.</p></a>";
		$(this).closest(".compbox").find(".view").find(".list-group").append(node);
	});
	$(".content").on("click", "#panelwithheading", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find(".panel");
		if (selector.find(".panel-heading").length > 0){
			selector.find(".panel-heading").remove();
		} else {
			var node = "<div class=\"panel-heading\"><h3 class=\"panel-title\" contenteditable=\"true\">Panel title</h3></div>";
			selector.prepend(node);
		}
	});
	$(".content").on("click", "#panelwithfooter", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find(".panel");
		if (selector.find(".panel-footer").length > 0){
			selector.find(".panel-footer").remove();
		} else {
			var node = "<div class=\"panel-footer\" contenteditable=\"true\">Panel footer</div>";
			selector.append(node);
		}
	});
	$(".content").on("click", "#paneldefault", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find(".panel");
		selector.removeClass("panel-default panel-primary panel-success panel-info panel-warning panel-danger");
		selector.addClass("panel-default");		
	});
	$(".content").on("click", "#panelprimary", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find(".panel");
		selector.removeClass("panel-default panel-primary panel-success panel-info panel-warning panel-danger");
		selector.addClass("panel-primary");	
	});
	$(".content").on("click", "#panelsuccess", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find(".panel");
		selector.removeClass("panel-default panel-primary panel-success panel-info panel-warning panel-danger");
		selector.addClass("panel-success");	
	});
	$(".content").on("click", "#panelinfo", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find(".panel");
		selector.removeClass("panel-default panel-primary panel-success panel-info panel-warning panel-danger");
		selector.addClass("panel-info");	
	});
	$(".content").on("click", "#panelwarning", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find(".panel");
		selector.removeClass("panel-default panel-primary panel-success panel-info panel-warning panel-danger");
		selector.addClass("panel-warning");	
	});
	$(".content").on("click", "#paneldanger", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find(".panel");
		selector.removeClass("panel-default panel-primary panel-success panel-info panel-warning panel-danger");
		selector.addClass("panel-danger");	
	});
	$(".content").on("click", "#panelwithtable", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find(".panel");
		var node = "<table class=\"table\" contenteditable=\"true\"><caption>Optional table caption.</caption><thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr></thead><tbody><tr><th scope=\"row\">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><th scope=\"row\">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><th scope=\"row\">3</th><td>Larry</td><td>the Bird</td><td>@twitter</td></tr></tbody></table>";
		if (selector.find(".panel-footer").length > 0){
			$(node).insertBefore(selector.find(".panel-footer"));
		} else {
			selector.append(node);
		};
	});
	$(".content").on("click", "#panelwithlistgroup", function(e){
		e.preventDefault();
		var selector = $(this).closest(".compbox").find(".view").find(".panel");
		var node = "<div class=\"list-group\"><li class=\"list-group-item\" contenteditable=\"true\">List group item</li><li class=\"list-group-item\" contenteditable=\"true\">List group item</li><li class=\"list-group-item\" contenteditable=\"true\">List group item</li></div>";
		if (selector.find(".panel-footer").length > 0){
			$(node).insertBefore(selector.find(".panel-footer"));
		} else {
			selector.append(node);
		};
	});
	$(".content").on("keyup", "#responsiveembedurl", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".embed-responsive").empty();
		var embedurl = $(this).val();
		var node = "<iframe class=\"embed-responsive-item\" src=" + embedurl + " allowfullscreen=\"\"></iframe>";
		$(this).closest(".compbox").find(".view").find(".embed-responsive").append(node);
	});
	$(".content").on("click", "#16by9", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".embed-responsive").removeClass("embed-responsive-16by9 embed-responsive-4by3");
		$(this).closest(".compbox").find(".view").find(".embed-responsive").addClass("embed-responsive-16by9");
	});
	$(".content").on("click", "#4by3", function(e){
		e.preventDefault();
		$(this).closest(".compbox").find(".view").find(".embed-responsive").removeClass("embed-responsive-16by9 embed-responsive-4by3");
		$(this).closest(".compbox").find(".view").find(".embed-responsive").addClass("embed-responsive-4by3");
	});
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