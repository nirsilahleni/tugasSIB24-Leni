//javascript untuk produkapi
// Fungsi untuk menambahkan data
function addUnicorns() {
  const newUnicorns = [
    {
      name: "iza",
      univ: "STMIK",
      color: "merah",
      image: "image/iza.jpeg", // Ganti dengan path file lokal yang benar
    },
    {
      name: "leni",
      univ: "STMIK",
      color: "jingga",
      image: "image/leni.jpeg",
    },
    {
      name: "marlia",
      univ: "STMIK",
      color: "kuning",
      image: "image/marlia.jpeg", // Ganti dengan path file lokal yang benar
    },
    {
      name: "susi",
      univ: "STMIK",
      color: "hijau",
      image: "image/susi.jpeg", // Ganti dengan path file lokal yang benar
    },

    // Tambahkan data unicorn selanjutnya di sini sesuai kebutuhan
  ];

  // Iterasi melalui setiap objek data dan kirim permintaan POST
  newUnicorns.forEach((newUnicorn) => {
    fetch(
      "https://crudcrud.com/api/4f2836af219a4bc2947121cbd40ca49a/unicorns/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUnicorn),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Data baru telah ditambahkan:", data);
        // Setelah menambahkan data, muat ulang halaman untuk menampilkan data yang telah diperbarui
        window.location.reload();
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  });
}

// Fungsi untuk menghapus data
function deleteUnicorn() {
  const unicornId = document.getElementById("unicornIdInput").value;

  fetch(
    `https://crudcrud.com/api/4f2836af219a4bc2947121cbd40ca49a/unicorns/${unicornId}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => {
      if (response.ok) {
        console.log("Data dengan ID", unicornId, "telah dihapus");
        // Setelah menghapus data, muat ulang halaman untuk menampilkan data yang telah diperbarui
        window.location.reload();
      } else {
        console.error("Gagal menghapus data");
      }
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
}

// Event listener untuk tombol "Tambah Data"
document
  .getElementById("addUnicornButton")
  .addEventListener("click", addUnicorns);

// Event listener untuk tombol "Hapus Data"
document
  .getElementById("deleteUnicornButton")
  .addEventListener("click", deleteUnicorn);

// Ambil data saat halaman dimuat
fetch("https://crudcrud.com/api/4f2836af219a4bc2947121cbd40ca49a/unicorns/")
  .then((response) => response.json())
  .then((data) => {
    // Proses data yang diterima
    let unicornDataElement = document.getElementById("unicornData");
    // Buat wadah untuk produk
    let productsContainer = document.createElement("div");
    productsContainer.id = "productsContainer";
    // Iterasi melalui setiap item data dan tambahkan ke dalam wadah produk
    data.forEach((unicorn) => {
      let productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
              <div>Name: ${unicorn.name}</div>
              <div>Univ: ${unicorn.univ}</div>
              <div>Warna: ${unicorn.color}</div>
              <div><img src="${unicorn.image}" alt="Unicorn Image"></div>
          `;
      productsContainer.appendChild(productDiv);
    });
    // Tambahkan wadah produk ke dalam elemen HTML
    unicornDataElement.appendChild(productsContainer);
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
