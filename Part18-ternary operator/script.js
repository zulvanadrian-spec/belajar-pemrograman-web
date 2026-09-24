let nilai = 80;
console.log(`nilai: ${nilai}`);
let hasil;

if(nilai >= 75){
    hasil = "Lulus";
} else {
    hasil = "Perbaikan"
}
console.log(hasil)

// ternary operator
// variabel hasil = (kondisi) ? True : False
let hasil_ternary = (nilai >= 75) ? "Lulus" : "Perbaikan";
console.log(`hasil ternary : ${hasil_ternary}`)