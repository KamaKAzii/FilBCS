// Staticmatic's stuff...

$(document).ready(function() {

	// I'm on the outside
	hostname = window.location.hostname
	$("a[href^=http]")
		.not("a[href*='" + hostname + "']")
		.addClass('link external')
		.attr('target', '_blank');

});

// Start of my stuff

// Menu Animations

$("nav div").hover(
  function() { 
    $(this).animate({ top: "-51px" }, { queue: false, duration: 300 });
  },
  function() {
    $(this).animate({ top: "0" }, { queue: false, duration: 300 });
  }
);
