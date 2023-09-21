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

// Jika CORS error, buatkan peringatan untuk user
document.addEventListener("DOMContentLoaded", function () {

  // Hidden all contents sections
  const contents = document.querySelectorAll(".contents");
  contents.forEach((content) => {
    content.style.display = "none";
  });

  const element = document.getElementById("footer");
  element.innerHTML = "Maaf, terjadi kesalahan. Silahkan gunakan Live Server atau Web Server lainnya.";
});