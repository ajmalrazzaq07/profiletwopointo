// set options when initializing butter.js
butter.init({ cancelOnTouch: true });

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
          butter.init({ cancelOnTouch: true });
        }
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(divElement);
  // Check if the device is mobile
}
var isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

// Add or remove the onclick attribute based on device type
var scrollLink = document.getElementById("scrollLink");
if (isMobile) {
  scrollLink.removeAttribute("onclick");
  window.scrollBy(0, -800);
  // Set scroll behavior to smooth
  document.documentElement.style.scrollBehavior = "smooth";
} else {
  scrollLink.setAttribute("onclick", "slide()");
}

fetch("https://api.github.com/user/repos", {
  headers: {
    Authorization: "Bearer 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",
  },
})
  .then((response) => response.json())
  .then((repositories) => {
    const repositoriesElement = document.getElementById("repositories");
    repositories.forEach((repository) => {
      console.log(repositories);
      const repoElement = document.createElement("div");
      repoElement.classList.add("projectssection__portfolio__card");
      repoElement.innerHTML = `
          <h3>${repository.name}</h3>
          <p>${repository.description}</p>
          <div class="row">
          <a href="${repository.html_url}" target="_blank">View on</a>
          <a href="${repository.homepage}" target="_blank">Website</a>
          </div>
          
        `;
      repositoriesElement.appendChild(repoElement);
    });
  })
  .catch((error) => console.error(error));
