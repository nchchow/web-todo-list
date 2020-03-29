// check off specific todos by clicking
$("li").on("click", function() {
  $(this).toggleClass("done");
});

// delete specific todos by clicking on X
$("span").on("click", function(event) {
  // fade out li, then remove
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();  // prevents event bubbling
});