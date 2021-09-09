const merk =["toyota", "daihatsu", "nissan", "lexus", "mitsubishi"];

const tampilkan=() =>{
    var valueNama = document.getElementById("nama").value;
    var valueMerk = document.getElementById("merk").value;
    (merk.indexOf(valueMerk) >-1)?console.log(valueNama+" pesan mobil merk "+valueMerk+" akan segera diproses"):console.log(valueNama+" pesan mobil merk "+valueMerk+" tidak tersedia");
}