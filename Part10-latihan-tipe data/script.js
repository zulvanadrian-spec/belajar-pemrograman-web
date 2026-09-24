let angka_1,angka_2,hasil;

document.getElementById("button_jumlah").onclick = function(){
    angka_1 = document.getElementById("angka_1").value;
    console.log(`angka_1 = ${angka_1} tipe-data = ${typeof angka_1}`)
    angka_2 = document.getElementById("angka_2").valueAsNumber;
    console.log(`angka_2 = ${angka_2} tipe-data = ${typeof angka_2}`)

    // parsing angka_1
    hasil = parseFloat(angka_1) + angka_2;

    console.log(`Hasil = ${hasil} tipe-data = ${typeof hasil}`);

    document.getElementById("hasil").innerHTML =
    `--- HASIL PENJUMLAHAN ---<br>${angka_1} + ${angka_2} = ${hasil}`;
};