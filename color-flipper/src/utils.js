/**
 * Creates h1 node with passed in innerHTML
 * @param {string} innerHTML The innerHTML of the h1 element
 * @return {HTMLHeadingElement} The h1 element
 */
function createTitle(innerHTML) {
  // Create title of page to display
  const elem = document.createElement('h1');
  // Centered title for the page
  elem.innerHTML = innerHTML;
  return elem;
}

/**
 * Creates a button that, when clicked, calls the function passed in parameter
 * @param {function} func The function to call
 * @returns {HTMLButtonElement} The change color button element
 */
function createColorButton(func) {
  // Create button to click that changes background
  // Function given in params
  const colorBtnElem = document.createElement('button');
  colorBtnElem.innerText = 'Change Color';
  colorBtnElem.addEventListener('click',() => {
    func();
  });
  return colorBtnElem;
}

/**
 * Returns a random number between 0 and the passed in argument
 * @param {number} upper The upper limit of the random number
 * @returns {number} A random number between 0 and the upper limit
 */
function randomNum(upper) {
  return Math.random()*255
}
export {createTitle, createColorButton, randomNum}