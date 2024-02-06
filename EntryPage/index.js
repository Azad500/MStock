// ---------------------------navbar-background-color---------------
window.addEventListener("scroll", function () {
  if (window.innerWidth >= 992) {
    var header = document.querySelector("header");
    header.style.transition = "background-color 0.3s";
    if (window.scrollY > 0) {
      header.style.background =
        "linear-gradient(to right, rgba(32, 40, 119, 0.95), rgba(55, 46, 149, 0.95), rgba(83, 49, 177, 0.9), rgba(114, 48, 205, 0.85), rgba(150, 41, 230, 0.95)), #202877";
    } else {
      header.style.background = "none";
    }
  }
});
// -----------------more-button-in-projects-----------------------
document.addEventListener("DOMContentLoaded", function () {
  const p4 = document.getElementsByClassName("p4");
  const p5 = document.getElementsByClassName("p5");
  const leastButton = document.getElementsByClassName(
    "least-button-element"
  )[0];

  Array.from(p4).forEach((element) => (element.style.display = "none"));
  Array.from(p5).forEach((element) => (element.style.display = "none"));
  leastButton.style.display = "none";
});

function showElements() {
  const p4 = document.getElementsByClassName("p4");
  const p5 = document.getElementsByClassName("p5");
  const moreButton = document.getElementsByClassName("more-button-element")[0];
  const leastButton = document.getElementsByClassName(
    "least-button-element"
  )[0];

  Array.from(p4).forEach((element) => (element.style.display = "flex"));
  Array.from(p5).forEach((element) => (element.style.display = "flex"));
  moreButton.style.display = "none";
  leastButton.style.display = "flex";
}

function hiddenElement() {
  const p4 = document.getElementsByClassName("p4");
  const p5 = document.getElementsByClassName("p5");
  const moreButton = document.getElementsByClassName("more-button-element")[0];
  const leastButton = document.getElementsByClassName(
    "least-button-element"
  )[0];

  Array.from(p4).forEach((element) => (element.style.display = "none"));
  Array.from(p5).forEach((element) => (element.style.display = "none"));
  moreButton.style.display = "flex";
  leastButton.style.display = "none";
}
