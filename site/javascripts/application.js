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

// Carousel

var carousel = {
  utils: function() {
    alert("hello");
  },
  articleWidth: 730,
  articleLeftMargin: 15
};

// LOL this is the funniest javascript style in the history of mankind...
// Attach the numbers of each article to a corresponding button and also
// get the total number of panels while you're at it...

carousel.total = $("nav ul li").each(function(index) {
  $(this).data("articleIndex", index);
}).length;

$("nav ul li").click(function() {
  // Get the location you wish it the section to animate to
  carousel.targetPosition =
    $(this).data("articleIndex") * (carousel.articleWidth + carousel.articleLeftMargin) - carousel.articleLeftMargin;
  // Animate the m0f0!
  $("section").animate(
    { left: -carousel.targetPosition },
    {
      duration: 1000,
      queue: false
    }
  );
});
