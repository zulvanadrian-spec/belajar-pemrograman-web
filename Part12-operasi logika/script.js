// === OPERATOR LOGIKA ====

//--- AND, OR, NOT
let data_bool = true;
console.log(`Data asli : ${data_bool}`);

// 1.NOT (!)
console.log(`==== OPERATOR NOT ====`)
console.log(`Not (!) : ${!data_bool}`); // jika di 'not' kan berkali-kali, maka hasilnya akan ngflip
console.log(`Jika di isi 1 : ${!1}`) // jika > 1 'false'
console.log(`Jika di isi 0 : ${!0}`)

// 2.OR ( || ) -> operasi antara dua variabel boolean
console.log(`==== OPERATOR OR ====`)
console.log(`true or true = ${true || true}`)
console.log(`true or false = ${true || false}`)
console.log(`false or true = ${false || true}`)
console.log(`false or false = ${false || false}`)

let lari = false;
let jalan = true;

let bergerak = lari || jalan;
console.log(`sedang bergerak : ${bergerak}`);

// 3.AND ( && ) -> operasi antara dua variabel boolean
console.log(`==== OPERATOR AND ====`)
console.log(`true and true = ${true && true}`)
console.log(`true and false = ${true && false}`)
console.log(`false and true = ${false && true}`)
console.log(`false and false = ${false && false}`)

let makan = true;
let minum = true;

let menyantap = makan && minum;
console.log(`sedang menyantap : ${menyantap}`);
