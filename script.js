// set options when initializing butter.js
butter.init({ cancelOnTouch: false });

setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  AOS.init();
}, 2000);
