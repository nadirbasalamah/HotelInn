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

    },
    initShowKamar : function () {

    },
	initShowRuangan : function () {
        
    },
    initShowLaundry : function () {
        
    },
    initShowRestoran : function () {
        
    },
    initShowTaksi : function () {
        
    }
};