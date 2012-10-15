// Menu Animations

$("nav div").hover(
  function() { 
    $(this).animate({ top: "-51px" }, { queue: false, duration: 300 });
  },
  function() {
    $(this).animate({ top: "0" }, { queue: false, duration: 300 });
  }
);

// Modals
//
var $modalTriggers = $(".modal-trigger");
var modalNames = [];

$modalTriggers.on("click", function() {
  console.log("im in");
  var target = $.trim($(this).attr("class").replace("modal-trigger", ""));
  $target = $("#" + target);
  $target.css("display", "block");
  $target.find(".close a").on("click", function(e) {
    $(this).parents(".modal").css("display", "none");
    e.preventDefault();
  });
});

// Carousel

var carousel = {
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

// Clear form on cilck of "clear" button
$(".clear").click(function(e) {
  $(".contact-form form input[type='text'], .contact-form form textarea").val("");
  e.preventDefault();
});

// Send form? Dunno how you want this to work
$(".send").click(function() {
  // Do some stuff?
});


// Carousel Init
$("#carouselMe").carousel(
  {
    panelWidth: 681,
    animationDuration: 1300
  }
);

