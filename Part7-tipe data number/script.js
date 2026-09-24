// === NUMBERS DATA TYPE ===
// Numbers -> 64-bit -2^1024 - 2^1024

let n_int = 10; // --> integer / nilai bulat
let n_float = 10.3; // --> desimal
let n_big_int = 19283712987437874326892383279n; // 'n' agar jdi 'bigint'

// --- penggunaan data ---
// ubah float to integer
let angka = 5.434;
let angk_int = parseInt(angka); 
console.log(`float --> integer : \nangka awal : ${angka} \nto integer : ${angk_int}`);

// ubah integer to float
let angka2 = 10;
let angka2_float = parseFloat(angka2);
console.log(`integer --> float : \nangka awal : ${angka2} \nto float : ${angka2_float}`);

// --- ubah string to numbers ---
// ubah string to integer, jika mau di operasikan bilangan lakukan parsing terlebih dahulu ke 'Numbers'
let data = "10.231";
console.log(`string --> integer : \ndata awal : ${data} \ntipe data : ${typeof data} \nto integer : ${parseInt(data)}`);

// detected string to integer
let data2 = "10.276 dasar anak kucay"; // yg terdetected hanya number pd awal kalimat, jika di belakang akan ttp string
console.log(`data asal : ${data2} \ntipe data : ${typeof data2}\nmenjadi: ${parseInt(data2)} \ntipe data : ${typeof parseInt(data2)}`)

// contoh 
let pembelian = "100000";
let pajak = 1200;
let bayar = parseInt(pembelian) + pajak;
console.log(`bayar pajak : Rp.${bayar.toLocaleString()}`)