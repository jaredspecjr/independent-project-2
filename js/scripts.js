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
      $(".rubyRails").hide();
      $(".javaAndroid").hide();
      $(".reccomendation").hide();
      $(".information").hide();
      $(".cssReact").show();
    } else if (android === "Yes"){
      $(".cssReact").hide();
      $(".rubyRails").hide();
      $(".reccomendation").hide();
      $(".information").hide();
      $(".javaAndroid").show();
    } else if (team && problemSolve === "Yes" && backend && frontend && android === "No"){
      $(".cssReact").hide();
      $(".javaAndroid").hide();
      $(".rubyRails").hide();
      $(".information").hide();
      $(".reccomendation").show();
    } else {
      $(".cssReact").hide();
      $(".javaAndroid").hide();
      $(".reccomendation").hide();
      $(".rubyRails").hide();
      $(".information").show();
    }
  });

});
