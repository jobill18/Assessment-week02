// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

let loginText = "Log in";
let loginSpan = document.querySelector("#auth");

function loginBtn() {
  loginSpan.innerText = loginText;
  if (loginText === "Log in") {
    loginText = "Log out";
  } else {
    loginText = "Log in";
  }
  loginSpan.innerText = loginText;
}

loginSpan.addEventListener("click", loginBtn);

// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

let alertBtn = document.querySelector("#send-alert");
let alertText = document.querySelector("#alert-message");

function alertMessage() {
  alert(alertText.value);
}

alertBtn.addEventListener("submit", alertMessage);

// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

let addItemBtn = document.querySelector("#item-adder");
let itemList = document.querySelector("#list");

function addItem() {
  //   alert("hi");
  const li = document.createElement("li");
  li.innerText = "Item";
  itemList.appendChild(li);
}

addItemBtn.addEventListener("dblclick", addItem);

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

let blueBtn = document.querySelector("#blue");
let redBtn = document.querySelector("#red");

let changeColor = document.getElementsByClassName(`changes-colors`);

function turnBlue() {
  //   alert("blue");
  changeColor.style.color = "blue";
  //   changeColor.style.setProperty("color", "blue");
}

function turnRed() {
  //   alert("red");
  changeColor.style.color = "red";
}

blueBtn.addEventListener("click", turnBlue);
redBtn.addEventListener("click", turnRed);

//__________________________FUNCTION NOT WORKING____________________//

// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

let calcBtn = document.getElementById("factorial-calculator");

function factorial() {
  //   alert("hello");
  let num = Number(document.getElementById("factorial-input").value);
  let solution = num;
  for (let i = num - 1; i > 0; i--) {
    solution = solution * i;
  }
  document.getElementById("result").innerText = solution;
}

calcBtn.addEventListener("submit", factorial);

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

// const colorText = document.getElementById("form-feedback");

// function validateWord() {
//   let inputText = document.getElementById("word").value;
//   const colorID = document.querySelector(`#${colorText}`);

//   if (inputText.length >= 4) {
//     document.getElementById("form-feedback").innerText =
//       "Thanks for your submission!";
//     // alert(good);
//     colorID.style.color = "blue";
//   } else {
//     colorID.style.color = "red";

//     alert("bad");
//   }
//   //   return false;
// }

const validateBtn = document.getElementById("recommend-word");
const text = document.getElementById("word").value;
const feedback = document.getElementsByClassName("form-feedback");

console.log(text);

function validateForm() {
  if (text.length >= 4) {
    feedback.value = "Thanks for your submission!";
    feedback.style.color = "green";
  } else {
    feedback.value = "The word must be at least 4 characters long.";
    feedback.style.color = "red";
    return false;
  }
}

validateBtn.addEventListener("submit", validateForm);
