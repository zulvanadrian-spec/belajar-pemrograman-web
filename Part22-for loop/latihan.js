console.log("=== LATIHAN ===");

console.log("1.buatkan tabel perkalian");
let angka = 5;
let total = 0;
for(let i = 1; 1<=10; i++){
    let hasil = angka * i;
    console.log(`${angka} x ${i} = ${hasil}`)
    total+=hasil;
}

console.log("Total:", total)