//* Event Bubbling
/**Event Bubbling is a concept in the DOM (Document Object Model).
It happens when an element receives an event, and that event bubbles up (transmitted or propagated) to its parent and ancestor elements
in the DOM tree until it gets to the root element.
This is the default behavior of events on elements unless we stop the propagation*/

//Use Case
/**Assume we have a button inside a span that is inside a div.
 by default when we click the button the click event propagates into its parent span and ancestor div until root HTML.
 */

//here we created an index.html file and attached some click events
/** Here we can see when the button clicks all the ancestor element events are triggered and logs the data in the console.
 * We can stop this propagation by adding event.stopPropagation() method inside the event listener
 */
const body = document.getElementsByTagName("body")[0];
const div = document.getElementsByTagName("div")[0];
const span = document.getElementsByTagName("span")[0];
const button = document.getElementsByTagName("button")[0];

body.addEventListener("click", () => {
  console.log("body was clicked");
});

div.addEventListener("click", () => {
  console.log("div was clicked");
});

span.addEventListener("click", () => {
  console.log("span was clicked");
});

button.addEventListener("click", (event) => {
  event.stopPropagation(); //Stopping propagation 
  console.log("button was clicked");
});


/** Event Capturing is the opposite of event bubbling.
 in event capturing the flow is from the outermost element to the target element.
 i.e., from html to the button
 * By default the event capture is disabled and we can enable it by passing a true value as the third parameter of the event listener
 //addEventListener(type, listener, useCapture)
 */