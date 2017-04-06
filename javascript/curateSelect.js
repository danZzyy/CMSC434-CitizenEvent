
$(document).ready(function() {
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
