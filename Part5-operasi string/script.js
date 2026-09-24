// === OPERASI STRING ===
  
// 1.charAt
let dataStr = "abcdef";
let dataChar = dataStr.charAt(0); // akses posisi str 
console.log(`character pada index 0 : \n${dataChar}`);
dataChar = dataStr.charAt(1);  
console.log(`character pada index 1 : \n${dataChar}`);
dataChar = dataStr.charAt(2);  
console.log(`character pada index 2 : \n${dataChar}`);
dataChar = dataStr.charAt(3);  
console.log(`character pada index 3 : \n${dataChar}`);
dataChar = dataStr.charAt(4);  
console.log(`character pada index 4 : \n${dataChar}`);
dataChar = dataStr.charAt(5);  
console.log(`character pada index 5 : \n${dataChar}`); // no character

// 2.sambung string
let namaDepan = "rahmat";
let namaBelakang = "galon";

let namaLengkap = namaDepan.concat(' ',namaBelakang,' asli depok'); // 'asli depok' tdk berubah oleh replace
console.log(namaLengkap);

// 3.ambil index string / cek posisi index str (kemunculan pertama)
console.log(`posisi huruf 'o' : index ${namaLengkap.indexOf('o')}`); // cek posisi index huruf o
console.log(`posisi huruf 'a' : index ${namaLengkap.indexOf('a')}`); // cek posisi index huruf a kemunculan pertama

// 4.ambil substring
console.log(namaLengkap)
console.log(`subsstr index 7-12 : ${namaLengkap.substring(7,12)}`);
console.log(`subsstr index 12-7 : ${namaLengkap.substring(12,7)}`); // sama aja

// 5.slice ing
console.log(`slice ing index 7-12 : ${namaLengkap.slice(7,12)}`);
console.log(`slice ing index 12-7 : ${namaLengkap.slice(12,7)}`); // jadi kosong

// 6.replace
namaLengkap = namaLengkap.replace('rahmat galon','jajang merkuri');
console.log(`replace 'namaLengkap : \n${namaLengkap}`);

// 7.tolower
console.log(`lower case :\n${namaLengkap.toLowerCase()}`)

// 8.uppercase
console.log(`upper case :\n${namaLengkap.toUpperCase()}`)

// 9.extra data number
let dataStr2 = '10';
console.log(`type data asal :\n${typeof dataStr2}`);
let dataInt = parseInt(dataStr2);
console.log(`data baru 'dataStr2' : ${dataInt}`)
console.log(`type data baru 'dataStr2' : ${typeof dataInt}`);