function loadContent(url, elementId) {
  const element = document.getElementById(elementId);
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      element.innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  // Load all regular sections
  loadContent("partials/header.html", "header");
  loadContent("partials/footer.html", "footer");

  // Load all contents sections
  loadContent("partials/contents/daftar-produk.html", "daftar-produk");
  loadContent("partials/contents/produk-unggulan.html", "produk-unggulan");
  loadContent("partials/contents/tentang-kami.html", "tentang-kami");
  loadContent("partials/contents/testimonial.html", "testimonial");
  loadContent("partials/contents/form-kontak.html", "kontak");
});
