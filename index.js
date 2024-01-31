window.addEventListener("scroll", function () {
  // Sadece ekran genişliği 992px veya daha büyükse çalışacak
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
