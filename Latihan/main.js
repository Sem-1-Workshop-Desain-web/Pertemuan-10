// Mendapatkan elemen HTML dengan ID 'ahli' dan menyimpannya dalam variabel cart_ahli
const cart_ahli = document.getElementById('ahli');

// Mendefinisikan array yang berisi daftar keahlian
const your_ahli = ['Ux Desain', 'Web Developer', 'Video Editor'];

// Membuat variabel parent yang akan menampung elemen HTML <ol> (ordered list)
let parent = '<ol>';

// Menggunakan forEach untuk iterasi melalui setiap elemen dalam array your_ahli
your_ahli.forEach((ahli) => {
    // Menambahkan elemen <li> untuk setiap keahlian dalam list
    parent += '<li>' + ahli + '</li>';
    // Menampilkan keahlian saat ini di konsol untuk debugging
    console.log(`${ahli}`);
})

// Menutup elemen <ol> setelah iterasi selesai
parent += '</ol>';

// Menyisipkan konten HTML yang telah dibentuk ke dalam elemen dengan ID 'ahli'
cart_ahli.innerHTML = parent;
