/* Compile at http://closure-compiler.appspot.com/home */

$(document).ready(function(){
	loadStyleSheetsIfAbsent();
	sidebarHandler(window.innerWidth);
	$(window).resize(function() {
		sidebarHandler($(this).width());
	});
});

/**
 * Manages the styling of the Side Bar 
 */
function sidebarHandler(width) {
	$sidebar = $("#content-list");
	if (width > 991) {
		if ($sidebar.hasClass("list-inline")) {
			$sidebar.removeClass("list-inline").addClass("nav").addClass("nav-list");
		}
		if (!$sidebar.hasClass("nav")) {
			$sidebar.addClass("nav");
		}
		if (!$sidebar.hasClass("nav-list")) {
			$sidebar.addClass("nav-list");
		}
	} else {
		if ($sidebar.hasClass("nav")) {
			$sidebar.removeClass("nav");
		}
		if ($sidebar.hasClass("nav-list")) {
			$sidebar.removeClass("nav-list");
		}
		if (!$sidebar.hasClass("list-inline")) {
			$sidebar.addClass("list-inline");
		}
	}
}

/**
 * Detects if the necessary CDN-managed stylehseets have loaded
 * Creates a reference from a local copy if absent
 */
function loadStyleSheetsIfAbsent() {
    var stylesheets = document.styleSheets;
    for (var i = 0, max = stylesheets.length; i < max; i++) {
        if (stylesheets[i].href === "http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css")
            return;
    }
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css";

    document.getElementsByTagName("head")[0].appendChild(link);
}