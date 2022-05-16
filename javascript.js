var hei=$("#carouselExampleCaptions").width();
$("#about").css("margin-top",hei);
$( window ).resize(function() {
var hei=$("#carouselExampleCaptions").width();
$("#about").css("margin-top",hei);
});
$(document).ready(function(){
$('[data-toggle="popover"]').popover();   
});