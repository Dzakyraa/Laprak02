// Klik judul soal untuk sembunyikan jawaban
document.querySelectorAll("h3").forEach((judul) => {
  judul.addEventListener("click", () => {
    let konfirmasi = confirm("Sembunyikan jawaban di bawahnya?");
    if (konfirmasi) {
      judul.nextElementSibling.style.opacity = "0";
      setTimeout(() => {
        judul.nextElementSibling.style.display = "none";
      }, 300);
    }
  });
});

// Ganti mode tampilan
const tombol = document.getElementById("switchMode");
tombol.addEventListener("click", () => {
  document.body.classList.toggle("messy");
  if (document.body.classList.contains("messy")) {
    tombol.textContent = "Mode Rapi";
  } else {
    tombol.textContent = "Mode Berantakan";
  }
});
