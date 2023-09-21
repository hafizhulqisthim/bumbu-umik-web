// Load all sections
$(document).ready(function () {
  // Load all regular sections
  $("#header").load("partials/header.html");
  $("#footer").load("partials/footer.html");

  // Load all contents sections
  $("#daftar-produk").load("partials/contents/daftar-produk.html");
  $("#produk-unggulan").load("partials/contents/produk-unggulan.html");
  $("#tentang-kami").load("partials/contents/tentang-kami.html");
  $("#testimonial").load("partials/contents/testimonial.html");
  $("#kontak").load("partials/contents/form-kontak.html");
});

// AOS Initialization
AOS.init({
  duration: 1200,
});
