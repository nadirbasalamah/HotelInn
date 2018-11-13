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
        
    },
    initShowRestoran : function () {
        
    },
    initShowTaksi : function () {
        
    },
    initShowDetailKamar : function (id) {
        
    },
};