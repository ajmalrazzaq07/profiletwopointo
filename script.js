var arrowDown = document.querySelector(".splide__arrow--next");
var nav = document.querySelector("nav");
nav.style.display = "none";
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    direction: "ttb", // top to bottom
    height: "90vh", // Adjust this value to control slide height
    arrows: true,
    pagination: false,
    cover: true,
    interval: 4000,
    drag: "free",
    snap: true,
    speed: 1000,
  }).mount();

  splide.on("moved", function () {
    // Show arrow down on the first slide and hide it on others
    if (splide.index === 0) {
      arrowDown.style.display = "";
      nav.style.display = "none";
    } else {
      arrowDown.style.display = "none";
      nav.style.display = "";
    }
  });
});
