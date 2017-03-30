$(document).ready(function(){
    
    // Activate Carousel
    $("#creationCarousel").carousel();

    $("#previousButton").click( function() {
       $('#creationCarousel').carousel(0);
    });
});