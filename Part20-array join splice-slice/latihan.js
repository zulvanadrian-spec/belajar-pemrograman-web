console.log("==== LATIHAN ====");

// 1. join()
let buah = ["Apel","Jeruk","Mangga","Pisang"];
console.log("1.Gabungkan isi array dengan | :");
console.log(`--> ${buah.join('|')}`);

// 2. splice() (hapus data)
let kota = ["jakarta","Bandung","Medan","Semarang","Surabaya"];
console.log("2. Hapus 'Surabaya' menggunakan spilce() :");
console.log(`kota : ${kota}`);
spliceKota = kota.splice(4,1);
tambahKota = kota.splice(1,0, 'Karawang'); // menambah index [1] dengan 'Karawang'
console.log(`splice kota --> ${spliceKota}`);
console.log(`tambah kota --> ${kota[1]}`);
console.log(`kota jadi --> ${kota}`);


// 3. splice() (nambah data)
let hari = ["Senin","Selasa","Kamis","Jumat"];
console.log("3. Masukan Hari 'Rabu' pada posisi yang tepat menggunakan splice() :");
console.log(`hari : ${hari.join('|')}`);
getHari = hari.splice(2,0, 'Rabu'); // --> mengisi index [2] dengan 'Rabu'
console.log(`hari menjadi --> ${hari}`);

// 4. slice()
let nilai = [70,85,90,60,95,100,65];
console.log("4.Ambil 3 nilai di tengah pake slice()");
nilaiTengah = nilai.slice(2,5)
console.log(`Nilai Tengah --> ${nilaiTengah}`)