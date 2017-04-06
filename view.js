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
    
    $(".custom-control-input").click(function(){
    console.log("here")
    if($(this).closest("div.data-container").hasClass("selected-photo")){
      $(this).closest("div.data-container").removeClass("selected-photo")
      $(this).next().removeClass("selected-check");
      $(this).next().empty();
    } else {
      $(this).closest("div.data-container").addClass("selected-photo")
      $(this).next().addClass("selected-check")
      $(this).next().append("<span class='checkmark glyphicon glyphicon-check'/>")
    }
  })

  $(".custom-control-input").hover(function(){
    console.log("here")

      if($(this).closest("div.data-container").hasClass("hover-photo") && !$(this).closest("div.data-container").hasClass("selected-photo")){
        $(this).closest("div.data-container").removeClass("hover-photo")
        $(this).next().removeClass("hover-check");
      } else {
        $(this).closest("div.data-container").addClass("hover-photo")
        $(this).next().addClass("hover-check")
      }

  })
    
});