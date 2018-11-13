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
                    appendList += '<li><a href=page-detail-kamar?id='+data[index].no_id+
                    '" target="_self" id="detail-kamar" data-kamar="'+data[index].no_id+'"><h2>'+data[index].nama+
                    '</h2><p>'+data[index].alamat+'</p><p><b>'+data[index].no_telp+'</b></p></a></li>'       
                    
                }
             $('#list-kamar').append(appendList); 
             $('#list-kamar').listview('refresh'); 
            },
            complete : function () {
                $.mobile.loading('hide');
            }
        });
    },
	initShowRuangan : function () {
        
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
                    appendList += '<li><a href=page-detail-laundry?id='+data[index].no_id+
                    '" target="_self" id="detail-laundry" data-laundry="'+data[index].no_id+'"><h2>'+data[index].nama_laundry+
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
                    appendList += '<li><a href=page-detail-restoran?id='+data[index].no_id+
                    '" target="_self" id="detail-restoran" data-restoran="'+data[index].no_id+'"><h2>'+data[index].nama_restoran+
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
        
    },
    initShowDetailKamar : function (id) {
        
    },
    initShowDetailRestoran : function (id) {
        
    },
    initShowDetailRuangan : function (id) {
        
    },
    initShowDetailTaksi : function (id) {
        
    },
    initShowDetailLaundry : function (id) {
        
    }
};
