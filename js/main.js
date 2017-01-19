// NOTES:
// anything that takes place in the browser window is being listened to by the browser

var outputEl = document.getElementById("output-target");

var articleEl = document.getElementsByClassName("article-section");
console.log("articleEl", articleEl);

// at this point, all we have done is just set a reference to all elements that have article-section
// for their class name

function handleSectionClick(clickEvent){
  console.log(clickEvent);
  var elementText = clickEvent.target.innerHTML;
  outputEl.innerHTML = "You clicked on the " + elementText;
}

// this function is holding onto a reference of all the event properties
// you can call MouseEvent whatever you want

for (var i=0; i < articleEl.length; i++) {
  articleEl.item(i).addEventListener("click", handleSectionClick);
}

// handleSectionClick is a function that we want to run when the click happens
// this is how we're handling an html collection; looks like an array
// for each of the items in articleEl, I'm listening for clicks to happens

// It doesn't matter whether for loop or function comes first.
// It reads everything left-indented first.
// Lines 13-15 don't exist until the function is called

// THE FUNCTION IS CALLED WHEN THE CLICK HAPPENS ON THE PAGE


// You always have to write 1) the listener and
// 2) the function related to each.

var header = document.getElementById("page-header");

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

function handleHeaderMouseOver(mouseOverEvent){
  outputEl.innerHTML = "The force is strong with this one";
}

function handleHeaderMouseOut(mouseOutEvent){
  outputEl.innerHTML = "Remember... the Force will be with you always";
}

var fieldEl = document.getElementById("keypress-input");

// This targeting the input field in the HTML.

// before we had mouseover + name of function
// here's an ANONYMOUS function AKA lambda expression AKA callback
// because we're putting the function right inside the event listener
// this can only be used here; you don't call the function in a typical way

fieldEl.addEventListener("keyup", function(keyUpEvent){
  console.log("keyUpEvent", keyUpEvent);
  outputEl.innerHTML = event.target.value;
});
// outputEl is targeting to the right of the Output Area text on html page

var obiwan = document.getElementById("obi-wan");

document.getElementById("add-color")
  .addEventListener("click", function(colorEvent){
    obiwan.classList.toggle("blue");
  });

// tying addEventListener to document.getElementById; chainging them together
// then tell it click; stick function in with listener
// then toggle classList blue
// classList = a list of the classes tied to that item

document.getElementById("make-it-large")
  .addEventListener("click", function(largeEvent){
    obiwan.classList.toggle("large");
  });

document.getElementById("add-border")
  .addEventListener("click", function(borderEvent){
    obiwan.classList.toggle("bordered");
  });

document.getElementById("add-rounding")
  .addEventListener("click", function(roundingEvent){
    obiwan.classList.toggle("rounded");
  });

// or you could even leave the word "event" inside () out

// This is also useful for validating forms; can do "keyup" instead of "click" to add
// red border if they don't have an @ or a .edu, etc.

document.getElementById("wrapper").addEventListener("click", function(currentTargetEvent) {
  console.log("target", event.target);
  console.log("currentTarget", event.currentTarget);

  if (event.target.tagName.toLowerCase() === "li"){
    console.log("You clicked on the <li> element");
  }

});

// target is the h1
// currentTarget is the wrapper; that's where this listener is being attached
// you will always get back a target of whatever you clicked on (ex: <li>DarthVader</li>)
// but a currentTarget of the wrapper
