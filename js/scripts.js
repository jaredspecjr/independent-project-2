$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var backend = $("#backend").val();
    var frontend = $("#frontend").val();
    var android = $("#android").val();
    var team = $("#team").val();
    var problemSolve = $("#problemSolve").val();

    if (backend === "Yes" && frontend === "No"){
      $(".suggestion").text("ruby-rails");
    } else if (frontend === "Yes" && backend === "No"){
      $(".suggestion").text("css-react");
    } else if (android === "Yes"){
      $(".suggestion").text("java-android");
    } else if (team && problemSolve === "Yes" && backend && frontend && android === "No"){
      $(".suggestion").text("reccomendation");
    } else {
      $(".suggestion").text("something");
    }
  });

});
