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
let kamar = [];
var Application = {
    initApplication  :function () {
        $(window).load('pageinit','#page-kamar',function () {
            Application.initShowKamar();
        })
    },
    initShowKamar : function () {
        for (let index = 0; index < kamar.length; index++) {
            var object = kamar[index];   
             var appendList = '<li><a href=#page-two?id='+object[index].nim+
             '" target="_self" id="detail-mhs" data-nimmhs="'+object[index].nim+'"><h2>'+object[index].nama+
             '</h2><p>'+object[index].nim+'</p><p><b>'+object[index].fakultas+'</b></p></a></li>;'
             $('#list-kamar').append(appendList);    
        }
    }
};