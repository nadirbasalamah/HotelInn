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
let laundry = [{
    no_id: "01",
    nama_laundry: "Ngalam",
    alamat: "Jalan Simpang Dewandaru Kav. 12 A",
    no_telp: "081333961177",
    harga: "4000"
    },
    {
    no_id: "02",
    nama_laundry: "Ngalam",
    alamat: "Jalan Kalpataru",
    no_telp: "081222961177",
    harga: "3500"
    },
    {
    no_id: "03",
    nama_laundry: "Ngalam",
    alamat: "Jalan Balearjosari",
    no_telp: "081444961177",
    harga: "3000"
    },
    {
    no_id: "04",
    nama_laundry: "Ngalam",
    alamat: "Jalan In Dulu Aja",
    no_telp: "081555961177",
    harga: "2500"
    },
    {
    no_id: "05",
    nama_laundry: "Ngalam",
    alamat: "Jalan Jombang",
    no_telp: "081666961177",
    harga: "2000"
    },
    {
    no_id: "06",
    nama_laundry: "Pare",
    alamat: "Jalan Dr. Sutomo No.77",
    no_telp: "081777961177",
    harga: "4000"
    },
    {
    no_id: "07",
    nama_laundry: "Pare",
    alamat: "Jalan Veteran",
    no_telp: "081888961177",
    harga: "3500"
    },
    {
    no_id: "08",
    nama_laundry: "Pare",
    alamat: "Jalan Pahlawan Kusuma Bangsa",
    no_telp: "081999961177",
    harga: "3000"
    },
    {
    no_id: "09",
    nama_laundry: "Pare",
    alamat: "Jalan Wahidin Sudirohusodo",
    no_telp: "081000961177",
    harga: "2500"
    },
    {
    no_id: "10",
    nama_laundry: "Pare",
    alamat: "Jalan Cinta",
    no_telp: "081553181915",
    harga: "2000"
    },
    {
    no_id: "11",
    nama_laundry: "Kediri",
    alamat: "Jalan Love",
    no_telp: "081443181915",
    harga: "4000"
    },
    {
    no_id: "12",
    nama_laundry: "Kediri",
    alamat: "Jalan Aishiteru",
    no_telp: "081333181915",
    harga: "3500"
    },
    {
    no_id: "13",
    nama_laundry: "Kediri",
    alamat: "Jalan Wo Ai Ni",
    no_telp: "081223181915",
    harga: "3000"
    },
    {
    no_id: "14",
    nama_laundry: "Kediri",
    alamat: "Jalan Tresno",
    no_telp: "081113181915",
    harga: "2500"
    },
    {
    no_id: "15",
    nama_laundry: "Kediri",
    alamat: "Jalan Saranghae",
    no_telp: "081003181915",
    harga: "2000"
    }
    ];
var restoran = [
    {
    no_id: "1",
    nama_restoran: "Kelapa Kuning",
    alamat: "Jl. Kelapa Kuning No. 5, Kota Tangerang",
    no_telp: "81234567891",
    kapasitas: "50",
    jenis_paket: "Standar",
    harga_restoran: "400000"
    },
    {
    no_id: "2",
    nama_restoran: "Kelapa Kuning",
    alamat: "Jl. Kelapa Kuning No. 5, Kota Tangerang",
    no_telp: "81234567891",
    kapasitas: "100",
    jenis_paket: "Deluxe",
    harga_restoran: "800000"
    },
    {
    no_id: "3",
    nama_restoran: "Kelapa Kuning",
    alamat: "Jl. Kelapa Kuning No. 5, Kota Tangerang",
    no_telp: "81234567891",
    kapasitas: "150",
    jenis_paket: "Premium",
    harga_restoran: "1250000"
    },
    {
    no_id: "4",
    nama_restoran: "Nusa Indah",
    alamat: "Jl. Nusa Bangsa No. 11, Kota Malang",
    no_telp: "82345678912",
    kapasitas: "100",
    jenis_paket: "Standar",
    harga_restoran: "1000000"
    },
    {
    no_id: "5",
    nama_restoran: "Nusa Indah",
    alamat: "Jl. Nusa Bangsa No. 11, Kota Malang",
    no_telp: "82345678912",
    kapasitas: "200",
    jenis_paket: "Deluxe",
    harga_restoran: "2000000"
    },
    {
    no_id: "6",
    nama_restoran: "Nusa Indah",
    alamat: "Jl. Nusa Bangsa No. 11, Kota Malang",
    no_telp: "82345678912",
    kapasitas: "300",
    jenis_paket: "Premium",
    harga_restoran: "2750000"
    },
    {
    no_id: "7",
    nama_restoran: "Dapur Oma",
    alamat: "Jl. Patimura No. 29, Kota Jember",
    no_telp: "83456789123",
    kapasitas: "30",
    jenis_paket: "Standar",
    harga_restoran: "200000"
    },
    {
    no_id: "8",
    nama_restoran: "Dapur Oma",
    alamat: "Jl. Patimura No. 29, Kota Jember",
    no_telp: "83456789123",
    kapasitas: "50",
    jenis_paket: "Deluxe",
    harga_restoran: "450000"
    },
    {
    no_id: "9",
    nama_restoran: "Dapur Oma",
    alamat: "Jl. Patimura No. 29, Kota Jember",
    no_telp: "83456789123",
    kapasitas: "80",
    jenis_paket: "Premium",
    harga_restoran: "725000"
    },
    {
    no_id: "10",
    nama_restoran: "Mang Hasan",
    alamat: "Jl. Tanjung Burung No. 38, Kabupaten Tangerang",
    no_telp: "84567891234",
    kapasitas: "30",
    jenis_paket: "Standar",
    harga_restoran: "350000"
    },
    {
    no_id: "11",
    nama_restoran: "Mang Hasan",
    alamat: "Jl. Tanjung Burung No. 38, Kabupaten Tangerang",
    no_telp: "84567891234",
    kapasitas: "40",
    jenis_paket: "Deluxe",
    harga_restoran: "450000"
    },
    {
    no_id: "12",
    nama_restoran: "Mang Hasan",
    alamat: "Jl. Tanjung Burung No. 38, Kabupaten Tangerang",
    no_telp: "84567891234",
    kapasitas: "60",
    jenis_paket: "Premium",
    harga_restoran: "600000"
    },
    {
    no_id: "13",
    nama_restoran: "Menega Cafe",
    alamat: "Jl. Jimbaran No. 38, Bali",
    no_telp: "85678912345",
    kapasitas: "50",
    jenis_paket: "Standar",
    harga_restoran: "650000"
    },
    {
    no_id: "14",
    nama_restoran: "Menega Cafe",
    alamat: "Jl. Jimbaran No. 38, Bali",
    no_telp: "85678912345",
    kapasitas: "100",
    jenis_paket: "Deluxe",
    harga_restoran: "1200000"
    },
    {
    no_id: "15",
    nama_restoran: "Menega Cafe",
    alamat: "Jl. Jimbaran No. 38, Bali",
    no_telp: "85678912345",
    kapasitas: "150",
    jenis_paket: "Premium",
    harga_restoran: "1800000"
    }
    ];
var taksi =  [{
    no_id: "1",
    nama_taxi: "Blue Bird",
    kapasitas: "20",
    no_telp: "08522669987871",
    harga: "150000"
    },
    {
    no_id: "2",
    nama_taxi: "Angkasapura",
    kapasitas: "15",
    no_telp: "087448112850",
    harga: "120000"
    },
    {
    no_id: "3",
    nama_taxi: "Adi Raya",
    kapasitas: "17",
    no_telp: "0831454871045",
    harga: "105000"
    },
    {
    no_id: "4",
    nama_taxi: "Cipgans",
    kapasitas: "15",
    no_telp: "0831354871045",
    harga: "100000"
    },
    {
    no_id: "5",
    nama_taxi: "Citr",
    kapasitas: "18",
    no_telp: "0831454871045",
    harga: "115000"
    },
    {
    no_id: "6",
    nama_taxi: "APS",
    kapasitas: "10",
    no_telp: "0831454871045",
    harga: "125000"
    },
    {
    no_id: "7",
    nama_taxi: "DRS",
    kapasitas: "18",
    no_telp: "0831454871045",
    harga: "135000"
    },
    {
    no_id: "8",
    nama_taxi: "Smrat",
    kapasitas: "11",
    no_telp: "0831454871045",
    harga: "145000"
    },
    {
    no_id: "9",
    nama_taxi: "Runn",
    kapasitas: "11",
    no_telp: "0831454871045",
    harga: "155000"
    },
    {
    no_id: "10",
    nama_taxi: "Yellowish",
    kapasitas: "20",
    no_telp: "0831454871045",
    harga: "165000"
    },
    {
    no_id: "11",
    nama_taxi: "Bronze Bird",
    kapasitas: "22",
    no_telp: "0831454871045",
    harga: "200000"
    },
    {
    no_id: "12",
    nama_taxi: "Bro",
    kapasitas: "11",
    no_telp: "0831454871045",
    harga: "110000"
    },
    {
    no_id: "13",
    nama_taxi: "Taxxi",
    kapasitas: "15",
    no_telp: "0831454871045",
    harga: "150000"
    },
    {
    no_id: "14",
    nama_taxi: "Cabs",
    kapasitas: "17",
    no_telp: "0831454871045",
    harga: "120000"
    },
    {
    no_id: "15",
    nama_taxi: "Cabzz",
    kapasitas: "20",
    no_telp: "0831454871045",
    harga: "150000"
    }];
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
        $(document).on('click','#tambahdataruang',function () {
            Application.addDataRuangan();
        })
        $(document).on('click','#laundry',function () {
            Application.initShowLaundry();
        })
        $(document).on('click','#tambahdatalaundry',function () {
            Application.addDataLaundry();
        })
        $(document).on('click','#restoran',function () {
            Application.initShowRestoran();
        })
	$(document).on('click','#tambahdatarestoran',function () {
            Application.addDataRestoran();
        })
        $(document).on('click','#taksi',function () {
            Application.initShowTaksi();
        })
    },
    initShowKamar : function () {
        for (let index = 0; index < kamar.length; index++) {
             var appendList = '<li><a href=#><h2>'+kamar[index].nama+
             '</h2><p>'+kamar[index].alamat+'</p><p><b>'+kamar[index].no_telp+'</b></p></a></li>'
             $('#list-kamar').append(appendList);    
        }
    },
	initShowRuangan : function () {
        for (let index = 0; index < ruangan.length; index++) {
             var appendList = '<li><a href=#><h2>'+ruangan[index].nama_ruangan+
             '</h2><p>'+ruangan[index].alamat+'</p><p><b>'+ruangan[index].no_telp+'</b></p></a></li>'
             $('#list-ruangan').append(appendList);    
        }
    },
    initShowLaundry : function () {
        for (let index = 0; index < laundry.length; index++) {
             var appendList = '<li><a href=#><h2>'+laundry[index].nama_laundry+
             '</h2><p>'+laundry[index].alamat+'</p><p><b>'+laundry[index].no_telp+'</b></p></a></li>'
             $('#list-laundry').append(appendList);    
        }
    },
    initShowRestoran : function () {
        for (let index = 0; index < restoran.length; index++) {
             var appendList = '<li><a href=#><h2>'+restoran[index].nama_restoran+
             '</h2><p>'+restoran[index].alamat+'</p><p><b>'+restoran[index].no_telp+'</b></p></a></li>'
             $('#list-restoran').append(appendList);    
        }
    },
    initShowTaksi : function () {
        for (let index = 0; index < taksi.length; index++) {
             var appendList = '<li><a href=#><h2>'+taksi[index].nama_taxi+
             '</h2><p>'+taksi[index].kapasitas+'</p><p><b>'+taksi[index].no_telp+'</b></p></a></li>'
             $('#list-taksi').append(appendList);    
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
    },
    addDataRuangan : function () {
        let no_id = 16;
        no_id++;
        var nama = document.getElementById("nama_ruangan").value;
        var kapasitas = document.getElementById("kapasitas_ruangan").value;
        var harga = document.getElementById("harga_ruangan").value;
        var no_telp = document.getElementById("telp_ruangan").value;
        var alamat = document.getElementById("alamat_ruangan").value;
        ruangan.push({"no_id": no_id,"nama_ruangan":nama,"kapasitas":kapasitas ,"harga":harga, "no_telp": no_telp, "alamat": alamat});
        alert("Data berhasil ditambahkan!");
    },
    addDataLaundry : function () {
        let no_id = 16;
        no_id++;
        var nama = document.getElementById("nama_laundry").value;
        var harga = document.getElementById("harga_laundry").value;
        var no_telp = document.getElementById("telp_laundry").value;
        var alamat = document.getElementById("alamat_laundry").value;
        laundry.push({"no_id": no_id,"nama_laundry":nama,"harga":harga, "no_telp": no_telp, "alamat": alamat});
        alert("Data berhasil ditambahkan!");
    },
	addDataRestoran : function () {
        let no_id = 16;
        no_id++;
        var nama = document.getElementById("nama_restoran").value;
        var kapasitas = document.getElementById("kapasitas_restoran").value;
        var harga = document.getElementById("harga_restoran").value;
        var no_telp = document.getElementById("notelp_restoran").value;
        var alamat = document.getElementById("alamat_restoran").value;
		var jenpkt = document.getElementById("jenpkt").value;
        ruangan.push({
			"no_id": no_id,
			"nama_restoran":nama,
			"alamat": alamat,
			"no_telp": no_telp,
			"kapasitas":kapasitas,  
			"jenis_paket": jenpkt,
			"harga":harga});
        alert("Data berhasil ditambahkan!");
    }
};
