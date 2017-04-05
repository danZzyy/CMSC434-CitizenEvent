$(document).ready(function(){
    
    // Activate Carousel
    $('#creationCarousel').carousel();

    $('#nextButton').click( function() {
       $('#creationCarousel').carousel(1);
    });
    
    $('#previousButton').click( function() {
       $('#creationCarousel').carousel(0);
    });
    
    $('#finishButton').click( function() {
       $('#creationCarousel').carousel(2);
    });
    
    $('#backButton').click( function() {
       $('#creationCarousel').carousel(1);
    });
    
    $('#contributorAdd').click( function() {
       $('#contributorModal').modal('show');
    });
    
    $('#modalAddButton').click( function() {
       $('#contributorBody').append("<div id=\"contributorIcon\" class=\"col pull-left\"><a href=\"#user\"><span class=\"icons\"><span class=\"glyphicon glyphicon-user\"></span></a></div>");
    });
    
});