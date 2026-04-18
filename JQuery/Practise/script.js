// How to select an element using jQuery
// Select an element using jQuery

$("p");
$(".class");
$("#id");
$("p, a");
$("p, a:first-child");
$("p, a:last-child");
$("p, a:nth-child(2)");
$("p, a:nth-child(even)");
$("p, a:nth-child(odd)");
$("p, a:contains('jQuery')");

//We can also use the .css() method to set multiple styles at once
//$("p").css("font-size", "5rem", "color", "red");
$("p").css("font-size", "5rem");

//
$("h1").addClass("title");

// In order to change the text of an element
$("h1").text("Bye");
$("button").text("Don't Click Me");
$("button").html("<em>Don't Click Me</em>");

// In oder to change the Attribute of an element
$("h1").attr("class", "title");
$("h1").attr("id", "title");
$("h1").attr("style", "color:red");


// Adding the Event Listener
$("button").click(function () {
  $("h1").css("color", "purple");
});

// IN order add before and after
var newElement = $("<p>New Element</p>");
newElement.insertBefore("h1");
newElement.insertAfter("h1");   