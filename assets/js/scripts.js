$(document).ready(function () {

  // Active link
  function setActiveLink() {
    var currentHash = window.location.hash;
    $(".navbar-nav a").removeClass("active");
    $('.navbar-nav a[href="' + currentHash + '"]').addClass("active");
  }

  setActiveLink();
  $(window).on("hashchange", setActiveLink);

  // Initialize AOS
  AOS.init();

  // Typed JS
  var typed = new Typed("#about-title", {
    strings: ["Tentang Produk", "Bumbu Umik"],
    typeSpeed: 100,
    showCursor: false,
    fadeOut: true,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    loop: true,
  });
});
