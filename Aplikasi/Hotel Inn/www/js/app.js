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
var Application = {
    initApplication  :function () {
        $(window).load('pageinit','#page-kamar',function () {
            Application.initShowKamar();
        })
        $(document).on('click','#kamar',function () {
            Application.initShowKamar();
        })
    },
    initShowKamar : function () {
        for (let index = 0; index < kamar.length; index++) {
             var appendList = '<li><a href=#><h2>'+kamar[index].nama+
             '</h2><p>'+kamar[index].alamat+'</p><p><b>'+kamar[index].no_telp+'</b></p></a></li>;'
             $('#list-kamar').append(appendList);    
        }
    }
};