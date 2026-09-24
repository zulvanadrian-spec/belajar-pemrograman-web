// --- nan & undifinded ---

// NaN = Not a Number
console.log(`akar dari -1 :${Math.sqrt(-1)}`);
console.log(`"rahmat" / "nasir" :${"rahmat" / "gatot"}`);
console.log(`"dadang" * "ahmad" :${"dadang" * "ahmad"}`);
console.log(`"amba" + "tukam" :${"amba" + "tukam"}`);
console.log(`"diddy" - "jajang" :${"diddy" - "jajang"}`);

let data = parseInt("test123");
console.log(data + 5); // NaN sudah tdk bisa di operasikan lagi

// Undifinded = nilai yg belum di ketahui / suatu hal yg tidak menhasilkan apapun
let a;
console.log(`a = ${a}`);
console.log(Math.sqrt(4)); // fungsi yg menghasikan nilai
console.log(console.log("test"));// fungsi yg tdk menghasilkan nilai
