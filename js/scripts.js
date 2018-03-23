$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var userInput1 = $("#userInput1").val();
    var userInput2 = $("#userInput2").val();
    var userInput3 = $("#userInput3").val();
    var userInput4 = $("#userInput4").val();
    var userInput5 = $("#userInput5").val();

    $(".suggestion").text(answer);
  });

});
