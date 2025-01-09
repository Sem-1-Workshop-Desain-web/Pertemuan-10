// Deklarasi variabel menggunakan let, var, dan const
let namaku = "Rizal"; // Menggunakan let karena nilai variabel ini akan diubah
var namaBelakang = "Maulana"; // Menggunakan var (disarankan untuk menggunakan let atau const)
const mycar = "Panther"; // Menggunakan const karena nilai variabel ini tidak berubah

// Mengubah nilai variabel namaku
namaku = "Alex"; // Variabel dengan let bisa diubah
console.log(namaku); // Output: Alex
console.log(namaBelakang); // Output: Maulana

console.log(mycar); // Output: Panther (karena menggunakan const, tidak bisa diubah)

var mobil = ['BMW', 'MAZDA', 'TOYOTA']; // Daftar mobil
for (var i = 0; i < mobil.length; i++) { // Memperbaiki syntax loop yang salah (ubah 'ul' menjadi 'mobil')
    console.log(mobil[i]); // Menampilkan setiap elemen dalam array mobil
}

// Menampilkan nilai dari i setelah loop
console.log(i); // Output: 3 (karena i adalah var yang memiliki scope global)


// Manipulasi DOM untuk menampilkan teks dengan user_logged
const user_place = document.getElementById('user'); // Mengambil elemen dengan id 'user'

const user_logged = "Rizal"; // Menyimpan nama pengguna

// Menampilkan teks ke dalam elemen 'user' dengan menggunakan template literals
user_place.innerHTML = `Hi, ${user_logged} Apa kabar?`;


// Fungsi untuk menambahkan produk ke keranjang
const cart_items = document.getElementById('cart'); // Mengambil elemen dengan id 'cart'

function addProduct(name, category) { // Fungsi untuk membuat objek produk
    return {
        name, // Properti name pada objek
        category // Properti category pada objek
    }
}

// Menambahkan produk ke dalam keranjang
var getProduct = addProduct("Iphone 11", "Gadget"); 
console.log(getProduct); // Output: { name: 'Iphone 11', category: 'Gadget' }

// Menampilkan nama dan kategori produk dalam elemen 'cart'
cart_items.innerHTML = `Nama Produk : ${getProduct.name}, Category : ${getProduct.category}`;



// Membuat list produk dalam keranjang dengan menggunakan forEach
const your_cart = ['Roti', 'Keju', 'Mentega']; // Daftar produk dalam keranjang

let parent = '<ul>'; // Membuka tag <ul> untuk daftar produk
your_cart.forEach((cart) => { // Iterasi melalui setiap item dalam array your_cart
    parent += '<li>' + cart + '</li>'; // Menambahkan item ke dalam list
    console.log(`${cart}`); // Menampilkan nama produk
})

parent += '</ul>'; // Menutup tag <ul>
cart_items.innerHTML = parent; // Menampilkan list produk di elemen 'cart'
