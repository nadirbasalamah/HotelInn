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
		$(document).on('click','#laundry',function () {
            Application.initShowLaundry();
        })
        $(document).on('click','#restoran',function () {
            Application.initShowRestoran();
        })
        $(document).on('click','#taksi',function () {
            Application.initShowTaksi();
        })
        $(document).on('click','#detail-kamar',function () {
            var id = $(this).data('kamar');
            Application.initShowDetailKamar(id);
        })
	    $(document).on('click','#detail-restoran',function () {
            var id = $(this).data('restoran');
            Application.initShowDetailRestoran(id);
        })
	    $(document).on('click','#detail-ruangan',function () {
            var id = $(this).data('ruangan');
            Application.initShowDetailRuangan(id);
        })
	    $(document).on('click','#detail-taksi',function () {
            var id = $(this).data('taksi');
            Application.initShowDetailTaksi(id);
        })
	    $(document).on('click','#detail-laundry',function () {
            var id = $(this).data('laundry');
            Application.initShowDetailLaundry(id);
        })
    },
    initShowKamar : function () {
        $.ajax({
            url:"https://nadir008basalamah.000webhostapp.com/Hotelinn/web_service_kamar.php",
            type: "get",
            dataType: "json",
            beforeSend : function () {
                $.mobile.loading('show',{
                    text : 'Please wait while retrieving data...',
                    textVisible : true
                });
            },
            success : function (data) {
                var appendList = "";
                for (let index = 0; index < data.length; index++) {
                    appendList += '<li><a href=#page-detail-kamar?id='+data[index].no_id+
                    ' target="_self" id="detail-kamar" data-kamar="'+data[index].no_id+'"><h2>'+data[index].nama+
                    '</h2><p>'+data[index].alamat+'</p><p><b>'+data[index].no_telp+'</b></p></a></li>'       
                    
                }
             $('#list-kamar').append(appendList); 
             $('#list-kamar').listview().listview('refresh'); 
            },
            complete : function () {
                $.mobile.loading('hide');
            }
        });
    },
	initShowRuangan : function () {
        $.ajax({
            url:"https://nadir008basalamah.000webhostapp.com/Hotelinn/web_service_ruangan.php",
            type: "get",
            dataType: "json",
            beforeSend : function () {
                $.mobile.loading('show',{
                    text : 'Please wait while retrieving data...',
                    textVisible : true
                });
            },
            success : function (data) {
                var appendList = "";
                for (let index = 0; index < data.length; index++) {
                    appendList += '<li><a href=#page-detail-ruangan?id='+data[index].no_id+
                    ' target="_self" id="detail-ruangan" data-ruangan="'+data[index].no_id+'"><h2>'+data[index].nama_ruangan+
                    '</h2><p>'+data[index].alamat+'</p><p><b>'+data[index].no_telp+'</b></p></a></li>'       
                }
             $('#list-ruangan').append(appendList); 
             $('#list-ruangan').listview('refresh'); 
            },
            complete : function () {
                $.mobile.loading('hide');
            }
        });
    },
    initShowLaundry : function () {
        $.ajax({
            url:"https://nadir008basalamah.000webhostapp.com/Hotelinn/web_service_laundry.php",
            type: "get",
            dataType: "json",
            beforeSend : function () {
                $.mobile.loading('show',{
                    text : 'Please wait while retrieving data...',
                    textVisible : true
                });
            },
            success : function (data) {
                var appendList = "";
                for (let index = 0; index < data.length; index++) {
                    appendList += '<li><a href=#page-detail-laundry?id='+data[index].no_id+
                    ' target="_self" id="detail-laundry" data-laundry="'+data[index].no_id+'"><h2>'+data[index].nama_laundry+
                    '</h2><p>'+data[index].alamat+'</p><p><b>'+data[index].no_telp+'</b></p></a></li>'       
                }
             $('#list-laundry').append(appendList); 
             $('#list-laundry').listview('refresh'); 
            },
            complete : function () {
                $.mobile.loading('hide');
            }
        });
    },
    initShowRestoran : function () {
        $.ajax({
            url:"https://nadir008basalamah.000webhostapp.com/Hotelinn/web_service_restoran.php",
            type: "get",
            dataType: "json",
            beforeSend : function () {
                $.mobile.loading('show',{
                    text : 'Please wait while retrieving data...',
                    textVisible : true
                });
            },
            success : function (data) {
                var appendList = "";
                for (let index = 0; index < data.length; index++) {
                    appendList += '<li><a href=#page-detail-restoran?id='+data[index].no_id+
                    ' target="_self" id="detail-restoran" data-restoran="'+data[index].no_id+'"><h2>'+data[index].nama_restoran+
                    '</h2><p>'+data[index].alamat+'</p><p><b>'+data[index].no_telp+'</b></p></a></li>'       
                }
             $('#list-restoran').append(appendList); 
             $('#list-restoran').listview('refresh'); 
            },
            complete : function () {
                $.mobile.loading('hide');
            }
        });
    },
    initShowTaksi : function () {
        $.ajax({
            url:"https://nadir008basalamah.000webhostapp.com/Hotelinn/web_service_taxi.php",
            type: "get",
            dataType: "json",
            beforeSend : function () {
                $.mobile.loading('show',{
                    text : 'Please wait while retrieving data...',
                    textVisible : true
                });
            },
            success : function (data) {
                var appendList = "";
                for (let index = 0; index < data.length; index++) {
                    appendList += '<li><a href=#page-detail-taksi?id='+data[index].no_id+
                    ' target="_self" id="detail-taksi" data-taksi="'+data[index].no_id+'"><h2>'+data[index].nama_taxi+
                    '</h2><p>'+data[index].no_telp+'</p><p><b>'+data[index].harga+'</b></p></a></li>'
                }
             $('#list-taksi').append(appendList); 
             $('#list-taksi').listview('refresh'); 
            },
            complete : function () {
                $.mobile.loading('hide');
            }
        });
    },
    initShowDetailKamar : function (id) {
        $.ajax({
            url : 'https://nadir008basalamah.000webhostapp.com/Hotelinn/web_service_kamar.php',
            type : 'get',
            dataType: "json",
            beforeSend : function () {
                $.mobile.loading('show',{
                    text : 'Please wait while retrieving data...',
                    textVisible : true
                });
            },
            success : function (data) {
                let obj;
                for (let index = 0; index < data.length; index++) {
                    if(id == data[index].no_id) {
                        obj = data[index];
                        break;
                    }
                }
                $('#gambar-kamar,#p-nama_kamar,#p-alamat_kamar,#p-notelp_kamar,#p-jumlah_kamar,#p-jenis_kamar,#p-harga_kamar').empty();
                $('#gambar-kamar').attr("src",obj.gambar);
                $('#p-nama_kamar').append('<b>Nama      : </b>'+obj.nama);
                $('#p-alamat_kamar').append('<b>Alamat     : </b>'+obj.alamat);
                $('#p-notelp_kamar').append('<b>Nomor Telepon  : </b>'+obj.no_telp);
                $('#p-jumlah_kamar').append('<b>Jumlah kamar : </b>'+obj.jumlah_kamar);
                $('#p-jenis_kamar').append('<b>Jenis kamar   : </b>'+obj.jenis_kamar);
                $('#p-harga_kamar').append('<b>Harga kamar     : Rp</b>'+obj.harga_kamar);
            },
            complete  :function () {
                $.mobile.loading('hide');
            }
        });
    },
    initShowDetailRestoran : function (id) {
        $.ajax({
            url : 'https://nadir008basalamah.000webhostapp.com/Hotelinn/web_service_restoran.php',
            type : 'get',
            dataType: "json",
            beforeSend : function () {
                $.mobile.loading('show',{
                    text : 'Please wait while retrieving data...',
                    textVisible : true
                });
            },
            success : function (data) {
                let obj;
                for (let index = 0; index < data.length; index++) {
                    if(id == data[index].no_id) {
                        obj = data[index];
                        break;
                    }
                }
                $('#gambar-restoran,#p-nama_restoran,#p-alamat_restoran,#p-notelp_restoran,#p-kapasitas_restoran,#p-jenis_restoran,#p-harga_restoran').empty();
                $('#gambar-restoran').attr("src",obj.gambar_restoran);
                $('#p-nama_restoran').append('<b>Nama      : </b>'+obj.nama_restoran);
                $('#p-alamat_restoran').append('<b>Alamat     : </b>'+obj.alamat);
                $('#p-notelp_restoran').append('<b>Nomor Telepon  : </b>'+obj.no_telp);
                $('#p-kapasitas_restoran').append('<b>Kapasitas : </b>'+obj.kapasitas);
                $('#p-jenis_restoran').append('<b>Jenis paket   : </b>'+obj.jenis_paket);
                $('#p-harga_restoran').append('<b>Harga restoran     : Rp</b>'+obj.harga_restoran);
            },
            complete  :function () {
                $.mobile.loading('hide');
            }
        });
    },
    initShowDetailRuangan : function (id) {
        $.ajax({
            url : 'https://nadir008basalamah.000webhostapp.com/Hotelinn/web_service_ruangan.php',
            type : 'get',
            dataType: "json",
            beforeSend : function () {
                $.mobile.loading('show',{
                    text : 'Please wait while retrieving data...',
                    textVisible : true
                });
            },
            success : function (data) {
                let obj;
                for (let index = 0; index < data.length; index++) {
                    if(id == data[index].no_id) {
                        obj = data[index];
                        break;
                    }
                }
                $('#gambar-ruangan,#p-nama_ruangan,#p-kapasitas_ruangan,#p-harga_ruangan,#p-notelp_ruangan,#p-alamat_ruangan').empty();
                $('#gambar-ruangan').attr("src",obj.gambar_ruangan);
                $('#p-nama_ruangan').append('<b>Nama      : </b>'+obj.nama_ruangan);
                $('#p-kapasitas_ruangan').append('<b>Kapasitas     : </b>'+obj.kapasitas);
                $('#p-harga_ruangan').append('<b>Harga ruangan     : Rp</b>'+obj.harga);
                $('#p-notelp_ruangan').append('<b>Nomor Telepon  : </b>'+obj.no_telp);
                $('#p-alamat_ruangan').append('<b>Alamat : </b>'+obj.alamat);  
            },
            complete  :function () {
                $.mobile.loading('hide');
            }
        });
    },
    initShowDetailTaksi : function (id) {
        $.ajax({
            url : 'https://nadir008basalamah.000webhostapp.com/Hotelinn/web_service_taxi.php',
            type : 'get',
            dataType: "json",
            beforeSend : function () {
                $.mobile.loading('show',{
                    text : 'Please wait while retrieving data...',
                    textVisible : true
                });
            },
            success : function (data) {
                let obj;
                for (let index = 0; index < data.length; index++) {
                    if(id == data[index].no_id) {
                        obj = data[index];
                        break;
                    }
                }
                $('#gambar-taksi,#p-nama_taksi,#p-kapasitas_taksi,#p-notelp_taksi,#p-harga_taksi').empty();
                $('#gambar-taksi').attr("src",obj.gambar_taxi);
                $('#p-nama_taksi').append('<b>Nama      : </b>'+obj.nama_taxi);
                $('#p-kapasitas_taksi').append('<b>Kapasitas     : </b>'+obj.kapasitas);
                $('#p-notelp_taksi').append('<b>Nomor Telepon  : </b>'+obj.no_telp);
                $('#p-harga_taksi').append('<b>Harga Taksi : Rp</b>'+obj.harga);
            },
            complete  :function () {
                $.mobile.loading('hide');
            }
        });
    },
    initShowDetailLaundry : function (id) {
        $.ajax({
            url : 'https://nadir008basalamah.000webhostapp.com/Hotelinn/web_service_laundry.php',
            type : 'get',
            dataType: "json",
            beforeSend : function () {
                $.mobile.loading('show',{
                    text : 'Please wait while retrieving data...',
                    textVisible : true
                });
            },
            success : function (data) {
                let obj;
                for (let index = 0; index < data.length; index++) {
                    if(id == data[index].no_id) {
                        obj = data[index];
                        break;
                    }
                }
                $('#gambar-laundry,#p-nama_laundry,#p-alamat_laundry,#p-notelp_laundry,#p-harga_laundry').empty();
                $('#gambar-laundry').attr("src",obj.gambar_laundry);
                $('#p-nama_laundry').append('<b>Nama      : </b>'+obj.nama_laundry);
                $('#p-alamat_laundry').append('<b>Alamat     : </b>'+obj.alamat);
                $('#p-notelp_laundry').append('<b>Nomor Telepon  : </b>'+obj.no_telp);
                $('#p-harga_laundry').append('<b>Harga     : Rp</b>'+obj.harga);
            },
            complete  :function () {
                $.mobile.loading('hide');
            }
        });
    }
};
