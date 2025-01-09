// Mendapatkan elemen dengan id 'user' dan menampilkan nama pengguna di dalamnya
const user_place = document.getElementById('user');
const user_logged = "Rizal"; // Variabel untuk nama pengguna
user_place.innerHTML = `Nama : ${user_logged}`; // Menampilkan nama pengguna di elemen dengan id 'user'
console.log(user_logged); // Menampilkan nama pengguna di console

// Mendapatkan elemen dengan id 'hobi' dan menampilkan daftar hobi pengguna di dalamnya
const cart_hobi = document.getElementById('hobi');
const your_hobi = ['Main game', 'Olahraga', 'Makan']; // Daftar hobi pengguna

// Membuat elemen <ol> untuk menampilkan hobi dalam bentuk list
let parent = '<ol>'; 
your_hobi.forEach((hobi) => {
    parent += `<li>${hobi}</li>`; // Menambahkan setiap hobi ke dalam <li>
    console.log(hobi); // Menampilkan setiap hobi di console
})

parent += '</ol>'; // Menutup elemen <ol>
cart_hobi.innerHTML = parent; // Menampilkan daftar hobi ke elemen dengan id 'hobi'
