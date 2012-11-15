var rolloverImage = function(objName, url) {
	var wrapper = objName + "-overlay";
	$(wrapper).css({
		opacity : 0.5
	});
	$(objName).mouseover(function(event) {
		
		// $(tmp).css("margin-right", "-=10");
		$(wrapper).css({
			opacity : 1.0
		});
		
	});

	$(objName).click(function(event) {
		window.location = url;
	});
	
	$(objName).mouseout(function(event) {
		$(wrapper).css({
			opacity : 0.5
		});
	});
};

var rollover = function() {
	rolloverImage("#nav-left-button", "git-basics.html");
	rolloverImage("#nav-right-button", "git-advanced.html");
};