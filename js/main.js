// ********** STEVE'S VIDEOS ********** 
// https://www.youtube.com/playlist?list=PLX0ucpUE_qIOUsxGNEPpP9yonb4zerVIC

// *** Basic JavaScript Event Listeners ***

var outputEl = document.getElementById("output-target");

document.getElementById(“page-title”).addEventListener(“click”, function (event) {
  outputEl.innerHTML = `You clicked on the heading "${event.target.innerHTML}"`;
});

//create an element reference where we'll output feedback to the DOM:
// add event listener
// tell it what event you want to listen for ("click")
// give it a function reference for what to execute when that event is broadcast
// define an argument ("event") to accept the input b/c the browser is going to send the event to our function 
// look inside event.target (the property that holds the DOM element that was clicked on)
// ** target = what was clicked on!
// reading the HTML of it
// loading up the ES6 string & outputting it back to the user saying that's what you clicked on
// could also say: `You clicked on the heading "${event.target.id}"` to get the element's id.


// *** JavaScript Event Listener Types ***

var outputEl = document.getElementById("output-target");

var articleEl = document.getElementsByClassName("article-section");
console.log("articleEl", articleEl);

function handleSectionClick(MouseEvent) {
  var elementText = MouseEvent.target.innerHTML;
  outputEl.innerHTML = "You clicked on the " + elementText + " section";
}

// ** SAME AS: **
// for (var i = 0; i < articleEl.length; i++) {
//   articleEl.item(i).addEventListener("click", handleSectionClick);
// }

// Anytime you do document.getElementsByClassName, it's always going to return an array

// can write function separately instead of inline

// To add an event listener to an array of DOM elements is a for loop.
// looping over it with for loop
// for each item, add event listener (click + function reference that holds the logic when the event is broadcast)

// Two arguments to add an event listener:
// 1. what the name of the event is
// 2. a function reference to execute when that element is broadcast (line 37)

var header = document.getElementById("page-header");

function handleHeaderMouseOver(event) {
  outputEl.innerHTML = "You moved your mouse over me";
}

function handleHeaderMouseOut(event) {
  outputEl.innerHTML = "Why you leave me?";
}

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

// 3 Types of Key Events:
// 1. keydown
// 2. keypress
// 3. keyup - triggers as soon as you let up on a key you've pressed

// Binding/Mirroring: text of input box & text of output element mirror each other

var fieldEl = document.getElementById("keypress-input");

fieldEl.addEventListener("keyup", function(event){
  console.log("event", event);
  outputEl.innerHTML = event.target.value;
});

// Key code of Enter Key is 13 ***

// Syntax to add an event listener is same:
// .addEventListener("argument1", argument2(event));
// argument1: "click" / "mouseover" / "mouseout"
// argument2: function(event)
// * 2nd argument has to be a function that defines an input *
// * An argument to accept input that is going to be the event which the browser sends it 

// ******  OTHER WAYS TO TARGET SPECIFIC PARTS OF THE PAGE ******
if (event.target.tagName.toLowerCase() === "li") {
    console.log("You clicked on an <li> element");
}

// Handle the click event on any DOM element with a certain class
if (event.target.className === "article-section") {
  console.log("You clicked on an `article-section` element");
}

// Inspect the `id` property of the event target
if (event.target.id === "page-title") {
  console.log("You clicked on the page-title element");
}

// ********** IN CLASS ********** 

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
// you can call clickEvent whatever you want

// ** SAME AS: **
// for (var i=0; i < articleEl.length; i++) {
//   articleEl.item(i).addEventListener("click", handleSectionClick);
// }

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

document.getElementById("wrapper")
  .addEventListener("click", function(currentTargetEvent) {
  console.log("target", event.target);
  console.log("currentTarget", event.currentTarget);

  if (event.target.tagName.toLowerCase() === "li") {
    console.log("You clicked on the <li> element");
  }

  if (event.target.className === "article-section") {
    console.log('You clicked on an "article-section" element');
  }
});

// target is the h1
// currentTarget is the wrapper; that's where this listener is being attached
// you will always get back a target of whatever you clicked on (ex: <li>DarthVader</li>)
// but a currentTarget of the wrapper

var myArr = [
"A long time ago in a galaxy far, far away...",
"Use the force, Luke.",
"The force is strong with this one.",
"Do. Or do not. There is no try.",
"Fear is the path to the dark side.",
"Someday I will be the most powerful Jedi ever.",
"You were the chosen one!"
]

// Here's a forEach loop where we're calling an anonymous (un-named) function
// and giving it two parameters (value & index of the array items)
// syntax: array.forEach(function(currentValue, index)
// -can also take a 3rd argument and a thisValue: http: www.w3schools.com/jsref/jsref_forEach.asp
// we're using a string format from ES6
// could also use a regular for loop or for in loop

myArr.forEach(function(currentArrayValue, arrayIndex) {

  var phraseString = `<div id="currentArrayValue--${arrayIndex}">
                      <h3>${currentArrayValue} - Star Wars</h3>
                      </div>`

  let phraseDiv = document.createElement("div");
  phraseDiv.innerHTML = phraseString;
  document.getElementById("right-here").appendChild(phraseDiv);
  var phraseDom = document.getElementById(`currentArrayValue--${arrayIndex}`);

  phraseDom.addEventListener("click", function(mouseEvent) {
    console.log("event", mouseEvent);
    mouseEvent.currentTarget.classList.add("red");
  });
});

// this is a TEMPLATE LITERAL and uses `` and ${} to insert html and variables
// without having to concatenate with +

// Div1 = "right-here"
// Div2 = phraseDiv; created by let phraseDiv = document.createElement("div");
// Div3 = phraseString; created by phraseDiv.innerHTML = phraseString; this puts the 3rd div that we created - phraseString - inside Div2
// This appends phraseDiv to "right-here", and pharseDiv contains phraseString:  document.getElementById("right-here").appendChild(phraseDiv);
// the event listener is attached to the currentTarget of the wrapper, but we get back a target of whatever quote we clicked on


// to create BUBBLING effect: click, function, bubblingparameter
