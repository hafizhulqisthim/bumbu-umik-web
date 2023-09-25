$(document).ready(function () {
  $("#header").load("partials/header.html");
  $("#hero").load("partials/hero.html");
  $("#about").load("partials/about.html");
  $("#keunggulan").load("partials/keunggulan.html");
  $("#products").load("partials/products.html");
  $("#testimonial").load("partials/testimonial.html");
  $("#call-to-action").load("partials/cta.html");
  $("#kritiksaran").load("partials/kritiksaran.html");
  $("#footer").load("partials/footer.html");
});

$(document).ready(function () {
  function setActiveLink() {
    var currentHash = window.location.hash;
    $(".navbar-nav a").removeClass("active"); 
    $('.navbar-nav a[href="' + currentHash + '"]').addClass("active"); 
  }

  setActiveLink(); 
  $(window).on("hashchange", setActiveLink);
});

$(document).ready(function () {
  AOS.init();
});

