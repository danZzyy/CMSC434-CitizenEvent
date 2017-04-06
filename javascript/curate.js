$(document).ready(function() {
  $("#template-two-button").click(function(){

    $("#template-one").addClass("noDisplay");
    $("#template-two").removeClass("noDisplay");
  })

  $("#template-one-button").click(function(){
    $("#template-two").addClass("noDisplay");
    $("#template-one").removeClass("noDisplay");
  })

  $("#export").click(function(){
    alert("Sorry this feature is still under construction!");
  })
});
