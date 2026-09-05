let nama_barang, harga_satuan, jumlah;

document.getElementById("button_merge").onclick = function (){
        nama_barang = document.getElementById("nama_barang").value;
        harga_satuan = document.getElementById("harga_satuan").value;
        jumlah = document.getElementById("jumlah").value;

        let harga_format = Number(harga_satuan).toLocaleString("id-ID");
        
        let total = Number(harga_satuan) * Number(jumlah);
        let total_format = total.toLocaleString("id-ID");
        
        document.getElementById("keranjang_anda").innerHTML = 
        `---KERANJANG ANDA---<br>nama barang : ${nama_barang}<br>harga satuan : Rp.${harga_format}<br>jumlah : ${jumlah}<br>Total Belanja : Rp${total_format}`;


}
