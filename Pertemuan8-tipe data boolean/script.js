// +-+-+-+ DATA-TYPE BOOLEAN +-+-+-+

let bool1 = false; // 'binary', false = 0 true = 1
console.log(bool1);

let bool2 = (4 < 8); // apakah 4 kurang dri 9 ?
console.log(`apakah 4 < 8 ? : ${bool2}`);

// check string with boolean
let bool3 = ("amba" == "gatot");
console.log(`apakah "amba" sama dengan "gatot" ? : \n${bool3}`)
let bool4 = ("rahmat" == "rahmat");
console.log(`apakah "rahmat" sama dengan "rahmat" ? : \n${bool4}`)

// check boolean
let bool5 = (false == 0);
console.log(`apakah 'false' itu 0? : ${bool5}`)

bool5 = (false == 0n);
console.log(`apakah 'false' itu 0n ? : ${bool5}`)

bool5 = (false == " ");
console.log(`apakah 'false' itu string empty ? : ${bool5}`)