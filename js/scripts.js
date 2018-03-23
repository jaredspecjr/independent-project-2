$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var backend = $("#backend").val();
    var frontend = $("#frontend").val();
    var android = $("#android").val();
    var team = $("#team").val();
    var problemSolve = $("#problemSolve").val();


    if (backend === "Yes" && frontend === "No"){
      $(".cssReact").hide();
      $(".javaAndroid").hide();
      $(".reccomendation").hide();
      $(".information").hide();
      $(".rubyRails").show();
    } else if (frontend === "Yes" && backend === "No"){
      $(".cssReact").show();
    } else if (android === "Yes"){
      $(".javaAndroid").show();
    } else if (team && problemSolve === "Yes" && backend && frontend && android === "No"){
      $(".reccomendation").show();
    } else {
      $(".information").show();
    }
  });

});
