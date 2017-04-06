function in_progress(screen) {
  alert(screen + " Screen In Progress");
}

$("#twitter").click(function(){
  $("#twitter-text").text("Connected to Twitter");
  $("#twitter").prop("disabled", true);
  $("#pushToproject").prop("disabled", false);
});

$("#tumblr").click(function(){
  $("#tumblr-text").text("Connected to Tumblr");
  $("#tumblr").prop("disabled", true);
  $("#pushToproject").prop("disabled", false);
});

$("#facebook").click(function(){
  $("#fb-text").text("Connected to Facebook");
  $("#facebook").prop("disabled", true);
  $("#pushToproject").prop("disabled", false);
});

$("#insta").click(function(){
  $("#insta-text").text("Connected to Instagram");
  $("#insta").prop("disabled", true);
  $("#pushToproject").prop("disabled", false);
});
