// Decrease scroll speed
function decreaseScrollSpeed(event) {
  // Change the scroll speed factor according to your preference
  const scrollSpeedFactor = 0.5;

  // Calculate the new scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  const newScrollTop = scrollTop + event.deltaY * scrollSpeedFactor;
  const newScrollLeft = scrollLeft + event.deltaX * scrollSpeedFactor;

  // Scroll to the new position
  window.scrollTo({
    top: newScrollTop,
    left: newScrollLeft,
    behavior: "smooth", // Use 'auto' for instant scroll without animation
  });

  // Prevent the default scroll behavior
  event.preventDefault();
}

// Attach the event listener to the 'wheel' event
window.addEventListener("wheel", decreaseScrollSpeed);
