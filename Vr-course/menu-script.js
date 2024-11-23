// Log a message when the page loads
console.log("Hello 🌎");

/**
 * Redirects to a specified URL
 * @param {string} path - The URL to navigate to
 */
function navigateTo(path) {
  window.location.href = path;
}

/**
 * Animates an element to hover up and down.
 * @param {HTMLElement} element - The A-Frame element to animate.
 * @param {number} hoverDistance - The maximum distance for the hover effect.
 * @param {number} speed - The speed of the hover animation.
 * @param {number} delay - The delay in milliseconds before starting the animation.
 */
function makeHover(element, hoverDistance = 0.05, speed = 0.02, delay = 0) {
  let direction = 0.1; // 1 for up, -1 for down
  const initialY = parseFloat(element.getAttribute("position").y);

  // Add delay before starting the animation
  setTimeout(() => {
    function animate() {
      const currentY = parseFloat(element.getAttribute("position").y);
      const newY = currentY + direction * speed;

      // Reverse direction when exceeding the hover range
      if (newY > initialY + hoverDistance || newY < initialY - hoverDistance) {
        direction *= -1;
      }

      // Update the element's position
      element.setAttribute("position", { x: 0, y: newY, z: -5 });

      // Continue the animation
      requestAnimationFrame(animate);
    }

    animate();
  }, delay);
}

// Toggle Speed Settings Wall
let speedWallOpened = false; // Tracks whether the speed wall is open

/**
 * Opens or closes the speed settings wall.
 */
function openSpeedSettings() {
  const speedWall = document.querySelector("#speedWall");

  if (speedWall) {
    if (!speedWallOpened) {
      // Bring the wall into view
      speedWall.setAttribute("position", { x: 0, y: 2, z: -3 });
      console.log("Speed Wall Opened");
    } else {
      // Hide the wall out of view
      speedWall.setAttribute("position", { x: 0, y: 20, z: -3 });
      console.log("Speed Wall Closed");
    }
    speedWallOpened = !speedWallOpened; // Toggle state
  }
}

// Retrieve elements
const playBox = document.querySelector(".play");
const settingsBox = document.querySelector(".Settings");
const exitBox = document.querySelector(".Exit");
const speedBlock = document.querySelector(".speedBlock");

// Apply hovering effect to elements with delays
if (playBox) makeHover(playBox, 0.025, 0.005, 0); // No delay
if (settingsBox) makeHover(settingsBox, 0.025, 0.005, 200); // 200ms delay
if (exitBox) makeHover(exitBox, 0.025, 0.005, 300); // 300ms delay

// Add event listener for speed block click
if (speedBlock) {
  speedBlock.addEventListener("click", openSpeedSettings);
}
