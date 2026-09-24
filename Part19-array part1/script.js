let arrSiswa = ["Andi","Budi","Citra","Davin"];
console.log(arrSiswa);

// operasi, operator, method, fungsi

//1.indexing
console.log("---Indexing Array---")
console.log("Data pada Index 0:",arrSiswa[0]);
console.log("Data pada Index 1:",arrSiswa[1]);
console.log("Data pada Index 2:",arrSiswa[2]);
console.log("Data pada Index 3:",arrSiswa[3]);
console.log("Data pada Index 4:",arrSiswa[4]);

//2.Property length
console.log("---Property Length---")
let panjangArr = arrSiswa.length;
console.log(`Panjang Array : ${panjangArr}`)

//3.tambah data array dri belakang
console.log("---Push Data---")
arrSiswa.push("Emil");
console.log(`Push 'Emil' dri belakang --> ${arrSiswa}`)

//4.ambil data array dri belakang
console.log("---Pop Data---")
let getSiswa = arrSiswa.pop();
console.log(`Pop ${getSiswa} dri belakang --> ${arrSiswa}`);

//5.tambah data dri depan
console.log("---Unshift Data---")
arrSiswa.unshift("Kevin");
console.log(`Push 'Kevin' dri depan --> ${arrSiswa}`)

//6.ambil data dri depan
console.log("---Shift Data---")
getSiswa = arrSiswa.shift();
console.log(`Pop ${getSiswa} dri belakang --> ${arrSiswa}`);
