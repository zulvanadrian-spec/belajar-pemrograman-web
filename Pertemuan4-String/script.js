// === STRING ===

// -- 1.escaping string --
// opsi 1
let data1 = 'rahmat bilang "benda ape ni woy"';
console.log(data1);
// opsi 2
let data2 = "mas amba bilang \"dasar anak kucay\""; 
console.log(data2);

// newline & new tab
let data3 = "king nasir \nnak beli nasgor goreng"; // --> newline
console.log(data3);
data3 = "king nasir \tnak nobar bareng"; // --> new tab
console.log(data3);

// 2.literal string 
let namaDepan = "Amba";
let namaBelakang = "tukam";
let umur = 22;
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);