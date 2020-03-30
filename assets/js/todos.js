// check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("done");
});

// delete specific todos by clicking on X
$("ul").on("click", "span", function(event) {
  // fade out li, then remove
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();  // prevents event bubbling
});

// create new todo by text input and pressing enter
$("input[type='text']").keypress(function(event) {
  // if 'enter' is pressed
  if (event.which === 13) {
    // grab input
    var todoText = $(this).val(); 
    // clear input field
    $(this).val("");
    // create a new li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
  }
});

// toggle text field by clicking on '+'
$(".fa-plus").on("click", function() {
  $("input[type='text']").fadeToggle();
});