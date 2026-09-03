// 1.variabel dengan let
let nama = "amba";
// tampilkan data
console.log(nama);
// ubah nilai variabel nama
nama = "rusdi";
console.log(nama);

// 2.variabel dengan var
var namaDepan = "rahmat";
console.log(namaDepan);
// ganti nilai variabel namaDepan 
namaDepan = "king nasir";
console.log(namaDepan)

// kelakuan variabel let
let namaBelakang = "tangerang"; // diakses di luar kurawal

// artinya let yg di bawah ini beda variabel dgn let yg di luar kurawal
{
    let namaBelakang = "depok";
    console.log(namaBelakang);
}

console.log(namaBelakang); // --> namaBelakang yg pertama

// kelakuan dari variabel var
var namaTengah = "asli";

// kalo var itu, dia merubah nilai variabel yg ada di luar kurawal
{
    var namaTengah = "asal";
    console.log(namaTengah);
}

console.log(namaTengah);// memanggil namaTengah yg baru atau di dalam kurawal

// jika tanpa keyword 'var' atau 'let', maka di anggap menjadi 'var'
buah = "alpukat";
{
    buah = "apel";
}
console.log(buah);

// 3.const(constan), variabel yg tidak bisa di rubah nilai nya
const ttl = "23 May 2007";
console.log(ttl)
// ttl = "12 Feb 2020" --> error