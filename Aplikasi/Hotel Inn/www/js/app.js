$( document ).on( "pagecreate", "#demo-page", function() {
    $( document ).on( "swipeleft swiperight", "#demo-page", function( e ) {
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft" ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#left-panel" ).panel( "open" );
            }
        }
    });
});
let kamar = [{
    "nama": "Kamar Hotel Regular",
    "no_id": "1",
    "alamat": "Jl. mana saja",
    "no_telp": "0812345678",
    "jumlah_kamar": "101",
    "jenis_kamar": "Standar",
    "harga_kamar": "725000"
},
{
    "nama": "Kamar Hotel Regular",
    "no_id": "2",
    "alamat": "Jl. apa saja",
    "no_telp": "0812345671",
    "jumlah_kamar": "125",
    "jenis_kamar": "Standar",
    "harga_kamar": "625000"
},
{
    "nama": "Kamar Hotel Regular",
    "no_id": "3",
    "alamat": "Jl. gitignore",
    "no_telp": "0812345648",
    "jumlah_kamar": "130",
    "jenis_kamar": "Standar",
    "harga_kamar": "955000"
},
{
    "nama": "Kamar Hotel Regular",
    "no_id": "4",
    "alamat": "Jl. posttmann",
    "no_telp": "0812345466",
    "jumlah_kamar": "150",
    "jenis_kamar": "Standar",
    "harga_kamar": "125000"
},
{
    "nama": "Kamar Hotel Electron",
    "no_id": "5",
    "alamat": "Jl. chava",
    "no_telp": "0852345462",
    "jumlah_kamar": "125",
    "jenis_kamar": "Standar",
    "harga_kamar": "925000"
},
{
    "nama": "Kamar Hotel Nopotel",
    "no_id": "6",
    "alamat": "Jl. top",
    "no_telp": "0812345444",
    "jumlah_kamar": "200",
    "jenis_kamar": "Deluxe",
    "harga_kamar": "1025000"
},
{
    "nama": "Kamar Hotel Nopotel",
    "no_id": "7",
    "alamat": "Jl. mana saja",
    "no_telp": "0812345687",
    "jumlah_kamar": "100",
    "jenis_kamar": "Deluxe",
    "harga_kamar": "2725000"
},
{
    "nama": "Kamar Hotel Atriva",
    "no_id": "8",
    "alamat": "Jl. apa saja",
    "no_telp": "0812345444",
    "jumlah_kamar": "225",
    "jenis_kamar": "Deluxe",
    "harga_kamar": "2625000"
},
{
    "nama": "Kamar Hotel Safage",
    "no_id": "9",
    "alamat": "Jl. gitignore",
    "no_telp": "0812345111",
    "jumlah_kamar": "325",
    "jenis_kamar": "Deluxe",
    "harga_kamar": "1955000"
},
{
    "nama": "Kamar Hotel Hehehe",
    "no_id": "10",
    "alamat": "Jl. posttmann",
    "no_telp": "0812345458",
    "jumlah_kamar": "225",
    "jenis_kamar": "Deluxe",
    "harga_kamar": "3125000"
},
{
    "nama": "Kamar Hotel Nopotel",
    "no_id": "11",
    "alamat": "Jl. pstree",
    "no_telp": "0812345412",
    "jumlah_kamar": "25",
    "jenis_kamar": "Suite",
    "harga_kamar": "10000000"
},
{
    "nama": "Kamar Hotel Nopotel",
    "no_id": "12",
    "alamat": "Jl. vanilla javascript",
    "no_telp": "0832345678",
    "jumlah_kamar": "10",
    "jenis_kamar": "Suite",
    "harga_kamar": "8250000"
},
{
    "nama": "Kamar Hotel Wonderful",
    "no_id": "13",
    "alamat": "Jl. in aja dulu",
    "no_telp": "0872345671",
    "jumlah_kamar": "25",
    "jenis_kamar": "Suite",
    "harga_kamar": "10625000"
},
{
    "nama": "Kamar Hotel Wonderful",
    "no_id": "14",
    "alamat": "Jl. pycharm",
    "no_telp": "0872345648",
    "jumlah_kamar": "25",
    "jenis_kamar": "Suite",
    "harga_kamar": "12955000"
},
{
    "nama": "Kamar Hotel Best JS",
    "no_id": "15",
    "alamat": "Jl. seesharp",
    "no_telp": "0822345466",
    "jumlah_kamar": "25",
    "jenis_kamar": "Suite",
    "harga_kamar": "11125000"
}];
let ruangan = [{"no_id":"1","nama_ruangan":"Wedding","kapasitas":"150","harga":"7500000","no_telp":"085678912345","alamat":"Jl. Jakarta No. 10, Malang"},{"no_id":"2","nama_ruangan":"Wedding","kapasitas":"175","harga":"8750000","no_telp":"081378912345","alamat":"Jl. Bandung No. 11, Surabaya"},{"no_id":"3","nama_ruangan":"Wedding","kapasitas":"200","harga":"1000000","no_telp":"085623412345","alamat":"Jl. Medan No. 12, Kediri"},{"no_id":"4","nama_ruangan":"Meeting","kapasitas":"20","harga":"1500000","no_telp":"089078912345","alamat":"Jl. Jogjakarta No. 13, Samarinda"},{"no_id":"5","nama_ruangan":"Meeting","kapasitas":"40","harga":"3000000","no_telp":"0856789281795","alamat":"Jl. Semarang No. 14, Balikpapan"},{"no_id":"6","nama_ruangan":"Meeting","kapasitas":"10","harga":"750000","no_telp":"081022912345","alamat":"Jl. Solo No. 15, Bontang"},{"no_id":"7","nama_ruangan":"Ballroom","kapasitas":"1000","harga":"50000000","no_telp":"0856789122828345","alamat":"Jl. Bandung No. 16, Makassar"},{"no_id":"8","nama_ruangan":"Ballroom","kapasitas":"800","harga":"40000000","no_telp":"08178912345","alamat":"Jl. Bogor No. 17, Pare"},{"no_id":"9","nama_ruangan":"Ballroom","kapasitas":"900","harga":"45000000","no_telp":"0818178912345","alamat":"Jl. Cirebon No. 18, Palu"},{"no_id":"10","nama_ruangan":"Graduation","kapasitas":"300","harga":"9000000","no_telp":"085610112345","alamat":"Jl. Denpasar No. 10, Banjarmasin"},{"no_id":"11","nama_ruangan":"Graduation","kapasitas":"250","harga":"7500000","no_telp":"08342448912345","alamat":"Jl. Badung No. 10, Nganjuk"},{"no_id":"12","nama_ruangan":"Graduation","kapasitas":"150","harga":"600000","no_telp":"0111178912345","alamat":"Jl. Papua No. 10, Madiun"},{"no_id":"13","nama_ruangan":"Serbaguna","kapasitas":"100","harga":"7500000","no_telp":"085678912345","alamat":"Jl. Jakarta No. 10, Malang"},{"no_id":"14","nama_ruangan":"Serbaguna","kapasitas":"80","harga":"6000000","no_telp":"085678912345","alamat":"Jl. Papua No. 10, Surabaya"},{"no_id":"15","nama_ruangan":"Serbaguna","kapasitas":"70","harga":"50000000","no_telp":"085678912345","alamat":"Jl. Bandung No. 19, Kediri"}];
var Application = {
    initApplication  :function () {
        $(window).load('pageinit','#page-kamar',function () {
            Application.initShowKamar();
        })
        $(document).on('click','#kamar',function () {
            Application.initShowKamar();
        })
		$(document).on('click','#ruangan',function () {
            Application.initShowRuangan();
        })
        $(document).on('click','#tambahdatakmr',function () {
            Application.addDataKamar();
        })
    },
    initShowKamar : function () {
        for (let index = 0; index < kamar.length; index++) {
             var appendList = '<li><a href=#><h2>'+kamar[index].nama+
             '</h2><p>'+kamar[index].alamat+'</p><p><b>'+kamar[index].no_telp+'</b></p></a></li>;'
             $('#list-kamar').append(appendList);    
        }
    },
	initShowRuangan : function () {
        for (let index = 0; index < ruangan.length; index++) {
             var appendList = '<li><a href=#><h2>'+ruangan[index].nama_ruangan+
             '</h2><p>'+ruangan[index].alamat+'</p><p><b>'+ruangan[index].no_telp+'</b></p></a></li>;'
             $('#list-ruangan').append(appendList);    
        }
    },
    addDataKamar : function () {
        let no_id = 16;
        no_id++;
        var nama = document.getElementById("nama").value;
        var alamat = document.getElementById("alamat").value;
        var no_telp = document.getElementById("notelp").value;
        var jumkmr = document.getElementById("jumkmr").value;
        var jenkmr = document.getElementById("jenkmr").value;
        var harga = document.getElementById("harga").value;
        kamar.push({
            "nama": nama,
            "no_id": no_id,
            "alamat": alamat,
            "no_telp": no_telp,
            "jumlah_kamar": jumkmr,
            "jenis_kamar": jenkmr,
            "harga_kamar": harga
        });
        alert("Data berhasil ditambahkan!");
    }
};