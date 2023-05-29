// set options when initializing butter.js
butter.init({ cancelOnTouch: false });

setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  AOS.init();
}, 2000);
function slide() {
  var divElement = document.getElementById("sectionabout");

  var offsetTop = divElement.offsetTop;

  if (typeof butter !== "undefined" && butter.active) {
    butter.cancel();
  }

  var scrollOptions = {
    top: offsetTop,
    behavior: "smooth",
  };

  window.scrollTo(scrollOptions);

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        if (typeof butter !== "undefined" && !butter.active) {
          butter.init();
        }
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(divElement);
}
