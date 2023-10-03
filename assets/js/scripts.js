$(document).ready(function () {
  // Active link
  function setActiveLink() {
    var currentHash = window.location.hash;
    $(".navbar-nav a").removeClass("active");
    $('.navbar-nav a[href="' + currentHash + '"]').addClass("active");
  }

  setActiveLink();
  $(window).on("hashchange", setActiveLink);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Initialize AOS and smooth config
  AOS.init({
    duration: 1200,
    once: true,
  });

  // Typing Effects
  var text = "Tentang Produk";
  var index = 0;

  function typeEffect() {
    var interval = setInterval(function () {
      $("#about-title").text($("#about-title").text() + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 100); // Waktu antar karakter (ms)
  }

  typeEffect();
});
