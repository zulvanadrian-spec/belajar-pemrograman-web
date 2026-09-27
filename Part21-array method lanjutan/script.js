let mhsTeknik = ["Alex","Christ","Sheryl","Bagus"];
let mhsFasilkom = ["Demian","Elon","Angel","Kevin"];

// menggabungkan array
let peserta = mhsTeknik.concat(mhsFasilkom);
console.log(`Peserta lomba --> ${peserta.join(' | ')}`);

// mengecek apakah peserta ada 
if (peserta.includes('Demian')){
    console.log("Peserta di temukan");
} else {
    console.log("Peserta tidak di temukan");
}

// cek posisi index peseerta 
let posisiPeserta = peserta.indexOf("Angel");
console.log(`Posisi index Peserta 'Angel' --> ${posisiPeserta}`)
console.log(`Posisi index Peserta 'Sheryl' --> ${peserta.indexOf("Sheryl")}`)

// mengurutkan data 
console.log("Mengurutkan Data Alphabetical :")
peserta.sort()
console.log(peserta.join(" | "))

console.log("Mengurutkan Data Reverse :")
peserta.reverse()
console.log(peserta.join(" | "))