// // write hello world in the begining of the resume-container and dont remove the other content
// document.querySelector(".resume-container").innerHTML =
//   "<b>Hello World</b>" + document.querySelector(".resume-container").innerHTML;

console.log("Hello World");

// change the background color of the resume-container to red
// document.querySelector(".resume-container").style.backgroundColor = "#f0f0f0";

// change the color of the text to black for all the elements in the resume-container
// document.querySelector(".resume-container *").style.color = "black";

//script.js:11 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
// so we need to use a different approach
// document.querySelectorAll(".resume-container *").forEach((element) => {
//   element.style.color = "black";
// });

// when the button is clicked, show the message "Thank you for subscribing to my newsletter!"
// document.querySelector(".subscribe-button").addEventListener("click", () => {
//   document.querySelector(".subscribe-message").innerHTML =
//     "Thank you for subscribing to my newsletter!";
// });

// when the user clicks the button, show a modal then ask for their email address in an inpuut field and when they click on the subscribe button, show the message "Thank you for subscribing to my newsletter!"
// the modal should be centered on the screen and should be 300px wide and 200px high
// the modal should have a title "Subscribe to my newsletter"
// the modal should have a close button
// the modal should have a subscribe button
// the modal should have a cancel button
// the modal should have a input field for the email address
// the modal should have a subscribe button
// the modal should have a cancel button
// document.querySelector(".subscribe-button").addEventListener("click", () => {
//   const modal = document.createElement("div");
//   modal.style.position = "fixed";
//   modal.style.top = "50%";
//   modal.style.left = "50%";
//   modal.style.transform = "translate(-50%, -50%)";
//   modal.style.width = "300px";
//   modal.style.height = "200px";
//   modal.style.backgroundColor = "white";
//   modal.style.border = "1px solid black";
//   modal.style.borderRadius = "10px";
//   modal.innerHTML = `
//     <h2>Subscribe to my newsletter</h2>
//     <input type="email" id="email" placeholder="Enter your email address">
//     <button id="subscribe-button">Subscribe</button>
//     <button id="cancel-button">Cancel</button>
//   `;
//   document.body.appendChild(modal);
// });
