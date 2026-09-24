// --- OPERSAI ARITMATIKA ---

let x = 4;
let y = 6
console.log(`${x} + ${y} = ${x+y}`);
console.log(`${x} - ${y} = ${x-y}`);
console.log(`${x} * ${y} = ${x*y}`);
console.log(`${x} / ${y} = ${x/y}`);

// -- aritmatika khusus yg ada di js --
console.log(`${x} % ${y} = ${x%y}`); // sisa pembagian
console.log(`${x} ** ${y} = ${x**y}`);

// menambah atau mengurangi 1 nilai 'x' ny
console.log(`nilai  x : ${x}`) // nilai asal 'x'
x++;
console.log(`update x : ${x}`) // nilai baru 'x' + 1
x++;
console.log(`update x : ${x}`) // nilai baru 'x' + 1

console.log(`nilai x : ${x}`) // nilai asal 'x'
x--;
console.log(`update x : ${x}`)// nilai baru 'x' - 1
x--;
console.log(`update x : ${x}`)// nilai baru 'x' - 1

// case study
let z = "10";
let a = 7
console.log(`${z} data type : ${typeof z}`)
console.log(`after parseing '10' : \n${z = parseInt(10)} * ${a} = ${z * a}\ndata type '10' : ${typeof z}`)