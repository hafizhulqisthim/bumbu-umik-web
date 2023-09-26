$(document).ready(function () {
  function setActiveLink() {
    var currentHash = window.location.hash;
    $(".navbar-nav a").removeClass("active");
    $('.navbar-nav a[href="' + currentHash + '"]').addClass("active");
  }

  setActiveLink();
  $(window).on("hashchange", setActiveLink);

  AOS.init();
});
