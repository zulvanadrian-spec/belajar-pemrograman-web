let siswa = ['Amy','Baron','Christ','Diren','Elly'];
console.log(siswa);

// 1. Join(separator:string) --> menggabungkan array
console.log("---HASIL SEPARATOR STRING ---");
console.log(siswa.join('-'));

// 2. splice(index,delete/nodelete,data)
let hasilSplice;
hasilSplice = siswa.splice(1,2); //--> dari index [1] mengambil [2] siswa
console.log("---HASIL SPLICE---");
console.log("hasil splice 1,2 -->",hasilSplice);
console.log("siswa menjadi :",siswa);
// --slice()--
console.log("---SLICE()---");
console.log(siswa.join('-'));
let siswaPrestasi = siswa.slice(1,2); //--> mulai dr index [1] dan berenti sebelum index [2]
console.log("siswa berprestasi :",siswaPrestasi)