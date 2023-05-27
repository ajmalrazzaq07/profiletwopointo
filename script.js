document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    direction: "ttb", // top to bottom
    height: "100vh", // Adjust this value to control slide height
    arrows: true,
    pagination: false,
    cover: true,
    interval: 4000,
    drag: "free",
    snap: true,
    speed: 1000,
  }).mount();

  splide.on("moved", function () {
    var arrowDown = document.querySelector(".splide__arrow--next");

    // Show arrow down on the first slide and hide it on others
    if (splide.index === 0) {
      arrowDown.style.display = "block";
    } else {
      arrowDown.style.display = "none";
    }
  });
  var bar = document.querySelector(".my-slider-progress-bar");

  // Updates the bar width whenever the carousel moves:
  splide.on("moved", function () {
    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + "%";
  });
});
