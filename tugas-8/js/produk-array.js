const products = [
  {
    id: 1,
    name: "gacoan",
    price: 10000,
    description:
      "Mie Gacoan adalah sebuah waralaba restoran asal Indonesia. Usaha ini didirikan pada awal tahun 2016 di Kota Malang, dan berada di bawah naungan PT Pesta Pora Abadi. Hingga akhir tahun 2022, Mie Gacoan telah mempekerjakan lebih dari 3.000 orang di puluhan gerainya yang tersebar di seantero Indonesia, terutama di Pulau Jawa, Sumatra, dan Bali",
    image: "image/gacoan.jpeg",
  },
  {
    id: 2,
    name: "udang keju",
    price: 15000,
    description:
      "Udang Keju yang Ini Mengundang Banget untuk Disantap | Udang keju adalah hidangan populer yang menggabungkan rasa udang dan keju. Disajikan dengan cara udang dibalut tepung dan keju, lalu udang keju digoreng sampai renyah.",
    image: "image/udang keju.jpg",
  },
  {
    id: 3,
    name: "udang rambutan",
    price: 10000,
    description:
      "Udang Rambutan Gacoan adalah salah satu jenis dimsum yang digoreng, berbentuk bola dengan isian berupa ayam & udang cincang. Pada bagian luar adonan, ditempeli dengan potongan kulit pangsit yang berbentuk memanjang, sehingga ketika digoreng, hasilnya persis seperti buah rambutan.",
    image: "image/udang rambutan.jpg",
  },
  {
    id: 4,
    name: "mie",
    price: 16000,
    description:
      "produk makanan yang dibuat dari tepung gandum atau tepung terigu dengan atau tanpa penambahan bahan makanan yang lain dan bahan tambahan makanan yang diijinkan, berbentuk khas mie dan siap dihidangkan setelah dimasak",
    image: "image/mie.jpg",
  },
  // Add more products as needed
];

// Loop through the products array and create HTML elements for each product
products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.name;

  const name = document.createElement("h2");
  name.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = `$${product.price.toFixed(2)}`;
  price.classList.add("price");

  const description = document.createElement("p");
  description.textContent = product.description;

  productDiv.appendChild(image);
  productDiv.appendChild(name);
  productDiv.appendChild(price);
  productDiv.appendChild(description);

  document.querySelector(".product-container").appendChild(productDiv);
});
