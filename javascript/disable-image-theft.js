$(document).ready(function () {
    //Disable right click for full page 
    $("body").on("contextmenu",function(e){
        return false;
    });

    //disable copy paste full page
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
    
    
});