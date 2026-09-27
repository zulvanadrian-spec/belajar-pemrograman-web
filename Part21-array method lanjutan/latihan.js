console.log("+-+-+-+ LATIHAN +-+-+-+");

// 1.menggabungkan array 
console.log("1.menggabungkan array menjadi 1 :");
let timA = ["Rudi", "Sinta"];
let timB = ["Budi", "Wati"];
let timC = ["Joko"];

peserta = timA.concat(timB,timC);
console.log(peserta.join(' | '));

// 2.includes() dengan kondisi ganda
console.log("2.includes() dengan kondisi ganda :");
let stok = ["Pensil", "Pulpen", "Buku", "Penggaris"];
console.log(stok.join(' | '))
console.log("Cek 'Spidol' :")
if (stok.includes("Spidol")){
    console.log("Barang Tersedia");
} else {
    console.log("Barang Tidak Tersedia");
}

// 3.indexOf() jebakan angka
console.log("3.Cari index angka 25 indexOf() :");
let skor = [10, 25, 30, 25, 45];
console.log(skor.join(" | "))
console.log(`index angka 25 --> ${skor.indexOf(25)}`); // hanya ditampilkan 25 satu yg paling depan

// 4.Cari tahu method yang bisa tampilkan dua angka 25
console.log("4.Cari tahu method yang bisa tampilkan dua angka 25 :");
console.log(skor.join(" | "));
let semuaIndex = skor.reduce((acc, nilai, index) => {
    if ( nilai === 25) acc.push(index);
    return acc;
}, []);
console.log(`Semua index angka 25 (reduce) --> ${semuaIndex}`);

// 5.kombinasi sort() + reverse()
console.log("mengurutkan namaSiswa alphabetical :");
let namaSiswa = ["Zaki", "Budi", "Amir", "Citra", "Dewi"];
console.log(`namaSiswa --> ${namaSiswa.sort().join(' | ')}`)
console.log("Reverse() :")
console.log(`namaSiswa --> ${namaSiswa.reverse().join(' | ')}`)