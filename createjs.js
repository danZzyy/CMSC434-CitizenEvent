$(document).ready(function(){
    
    // Activate Carousel
    $('#creationCarousel').carousel();

    $('#nextButton').click( function() {
       $('#creationCarousel').carousel(1);
    });
    
    $('#previousButton').click( function() {
       $('#creationCarousel').carousel(0);
    });
});