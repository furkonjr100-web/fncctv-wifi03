function beliProduk(namaProduk) {
  alert("Produk " + namaProduk + " sistem sedang error, langsung hubungi wa penjual!");
}

function filterProduk(kategori) {
  let cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (kategori === "all") {
      card.style.display = "block";
    } else {
      if (card.classList.contains(kategori)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}

function scrollToProduk() {
  document.getElementById("produk").scrollIntoView({ behavior: "smooth" });
}