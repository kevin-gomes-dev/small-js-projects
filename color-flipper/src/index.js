import * as utils from "./utils.js";

// Init for the display of our page, adds nodes
(function init() {
  const contentArea = document.getElementById("content");
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";

  // Add our nodes for the main page display
  contentArea.appendChild(utils.createTitle('<center>Random Color Changer!<br>Click the button to change the background color!</center>'));
  contentArea.appendChild(utils.createColorButton(changeColor));

  // Done!
  console.log("Initial setup done!");
})();

/**
 * Changes the background color of the body to a random color.
 * @returns {void} Nothing
 */
function changeColor() {
  const r = utils.randomNum(255);
  const g = utils.randomNum(255);
  const b = utils.randomNum(255);
  console.log(`The RGB values generated are ${r}, ${g}, and ${b}.`)
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}
