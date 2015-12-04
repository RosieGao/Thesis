$(document).ready(function() {
	$(".content").css("min-height", $(window).height() - 110);
	$(".fullScreen").on("click", function(){$(".content").removeClass("lgSize mdSize smSize xsSize")});
	$(".lgButton").on("click", function(){$(".content").removeClass("lgSize mdSize smSize xsSize"); $(".content").addClass("lgSize")});
	$(".mdButton").on("click", function(){$(".content").removeClass("lgSize mdSize smSize xsSize"); $(".content").addClass("mdSize")});
	$(".smButton").on("click", function(){$(".content").removeClass("lgSize mdSize smSize xsSize"); $(".content").addClass("smSize")});
	$(".xsButton").on("click", function(){$(".content").removeClass("lgSize mdSize smSize xsSize"); $(".content").addClass("xsSize")});
})